import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ADDRESS, PHONE } from '../../app/constants/site'
import { useCart } from '../../app/context/CartContext'
import { formatCents } from '../../app/utils/FormatUtility'
import Button from '../../app/components/ui/Button'
import Eyebrow from '../../app/components/ui/Eyebrow'

/* ──────────────────────────────────────────────
   Stripe Setup
   ────────────────────────────────────────────── */

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY || 'pk_test_placeholder'
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY)

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '16px',
            fontFamily: '"DM Sans", sans-serif',
            color: '#16110B',
            '::placeholder': { color: '#98826A' }
        },
        invalid: { color: '#E01E2B' }
    }
}

const TAX_RATE = 0.0825

const PICKUP_OPTIONS = [
    { value: 'asap', label: 'ASAP', detail: '20 – 30 minutes' },
    { value: '45min', label: '45 min', detail: 'Less rush' },
    { value: '1hr', label: '1 hour', detail: 'Plan it out' }
]

/* ──────────────────────────────────────────────
   Order Summary
   ────────────────────────────────────────────── */

function OrderSummary({ items, totalCents }) {
    const taxCents = Math.round(totalCents * TAX_RATE)
    const grandTotalCents = totalCents + taxCents

    return (
        <div className="rounded-xl border-2 border-ink-900 bg-surface-50 p-6 shadow-[6px_6px_0_0_rgba(22,17,11,0.9)] lg:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-crawfish">Order Summary</p>
            <h2 className="mt-2 font-display text-lg uppercase tracking-wide text-ink-900">Your pickup order</h2>

            <div className="mt-6 divide-y divide-surface-300 border-y border-surface-300">
                {items.map(({ id, name, priceCents, quantity }) => (
                    <div key={id} className="flex items-start justify-between gap-4 py-3">
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm text-ink-900">{name}</p>
                            <p className="text-xs text-ink-500">
                                Qty {quantity} · {formatCents(priceCents)} each
                            </p>
                        </div>
                        <span className="shrink-0 text-sm font-medium tabular-nums text-ink-900">
                            {formatCents(priceCents * quantity)}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-5 space-y-2">
                <div className="flex justify-between text-sm text-ink-600">
                    <span>Subtotal</span>
                    <span className="tabular-nums">{formatCents(totalCents)}</span>
                </div>
                <div className="flex justify-between text-sm text-ink-600">
                    <span>Tax (8.25%)</span>
                    <span className="tabular-nums">{formatCents(taxCents)}</span>
                </div>
                <div className="flex justify-between border-t border-surface-300 pt-3 font-display text-lg text-ink-900">
                    <span>Total</span>
                    <span className="tabular-nums">{formatCents(grandTotalCents)}</span>
                </div>
            </div>

            <div className="mt-6 rounded-lg bg-surface-100 p-4 text-xs leading-relaxed text-ink-600">
                <p className="font-display uppercase tracking-wide text-ink-900">Pickup only</p>
                <p className="mt-1">
                    {ADDRESS.street}, {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}. Show your name at the counter.
                </p>
            </div>
        </div>
    )
}

/* ──────────────────────────────────────────────
   Pickup time picker
   ────────────────────────────────────────────── */

function PickupTimePicker({ value, onChange }) {
    return (
        <fieldset>
            <legend className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">Pickup time</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {PICKUP_OPTIONS.map(({ value: optionValue, label, detail }) => {
                    const isActive = value === optionValue
                    return (
                        <label
                            key={optionValue}
                            className={`group flex cursor-pointer flex-col rounded-lg border px-4 py-3 transition-[border-color,background-color,transform] duration-200 active:scale-[0.98] ${
                                isActive
                                    ? 'border-crawfish bg-crawfish-light'
                                    : 'border-surface-400 bg-white hover:border-crawfish/40'
                            }`}
                        >
                            <input
                                type="radio"
                                name="pickupTime"
                                value={optionValue}
                                checked={isActive}
                                onChange={() => onChange(optionValue)}
                                className="sr-only"
                            />
                            <span
                                className={`font-display text-sm uppercase tracking-wide ${
                                    isActive ? 'text-crawfish' : 'text-ink-900'
                                }`}
                            >
                                {label}
                            </span>
                            <span className="mt-0.5 text-xs text-ink-500">{detail}</span>
                        </label>
                    )
                })}
            </div>
        </fieldset>
    )
}

/* ──────────────────────────────────────────────
   Checkout Form
   ────────────────────────────────────────────── */

function CheckoutForm({ totalCents, onSuccess }) {
    const stripe = useStripe()
    const elements = useElements()
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        pickupTime: 'asap',
        notes: ''
    })
    const [processing, setProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleFieldChange = useCallback((event) => {
        const { name, value } = event.target
        setFormState((prev) => ({ ...prev, [name]: value }))
    }, [])

    const handlePickupTime = useCallback((pickupTime) => {
        setFormState((prev) => ({ ...prev, pickupTime }))
    }, [])

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault()
            if (!stripe || !elements) return

            setProcessing(true)
            setErrorMessage('')

            const cardElement = elements.getElement(CardElement)
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: `${formState.firstName} ${formState.lastName}`,
                    email: formState.email,
                    phone: formState.phone
                }
            })

            if (error) {
                setErrorMessage(error.message)
                setProcessing(false)
                return
            }

            onSuccess({
                paymentMethodId: paymentMethod.id,
                customerName: `${formState.firstName} ${formState.lastName}`,
                email: formState.email,
                pickupTime: formState.pickupTime,
                notes: formState.notes
            })
        },
        [stripe, elements, formState, onSuccess]
    )

    const taxCents = Math.round(totalCents * TAX_RATE)
    const grandTotalCents = totalCents + taxCents

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="rounded-xl border border-surface-300 bg-white p-6 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-crawfish">Step 1</p>
                <h2 className="mt-1 font-display text-lg uppercase tracking-wide text-ink-900">Contact info</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                            First Name
                        </span>
                        <input
                            type="text"
                            name="firstName"
                            autoComplete="given-name"
                            required
                            value={formState.firstName}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="Charlie"
                        />
                    </label>
                    <label className="block">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                            Last Name
                        </span>
                        <input
                            type="text"
                            name="lastName"
                            autoComplete="family-name"
                            required
                            value={formState.lastName}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="Thompson"
                        />
                    </label>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">Email</span>
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            value={formState.email}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="charlie@example.com"
                        />
                    </label>
                    <label className="block">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">Phone</span>
                        <input
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            required
                            value={formState.phone}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="(936) 555-0123"
                        />
                    </label>
                </div>
            </div>

            <div className="rounded-xl border border-surface-300 bg-white p-6 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-crawfish">Step 2</p>
                <h2 className="mt-1 font-display text-lg uppercase tracking-wide text-ink-900">Pickup details</h2>
                <div className="mt-5">
                    <PickupTimePicker value={formState.pickupTime} onChange={handlePickupTime} />
                </div>
                <label className="mt-4 block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                        Special instructions (optional)
                    </span>
                    <textarea
                        name="notes"
                        rows={3}
                        value={formState.notes}
                        onChange={handleFieldChange}
                        className="mt-1 block w-full resize-y rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                        placeholder="Allergies, light on the seasoning, no shells in the bag — let us know."
                    />
                </label>
            </div>

            <div className="rounded-xl border border-surface-300 bg-white p-6 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-crawfish">Step 3</p>
                <h2 className="mt-1 font-display text-lg uppercase tracking-wide text-ink-900">Payment</h2>
                <div className="mt-5 rounded-lg border border-surface-400 bg-white px-4 py-3.5 transition-[border-color] duration-200 focus-within:border-crawfish">
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </div>
                <p className="mt-3 text-xs text-ink-500">
                    Card is charged securely via Stripe. We never see or store your card number.
                </p>
            </div>

            {errorMessage && (
                <div
                    role="alert"
                    className="rounded-lg border border-crawfish/30 bg-crawfish-light px-4 py-3 text-sm text-crawfish-dark"
                >
                    {errorMessage}
                </div>
            )}

            <Button type="submit" size="block" disabled={!stripe || processing}>
                {processing ? 'Processing…' : `Pay ${formatCents(grandTotalCents)}`}
            </Button>

            <p className="text-center text-xs text-ink-500">
                Questions before you order? Call us at{' '}
                <a
                    href={PHONE.href}
                    className="font-medium text-ink-700 underline decoration-surface-400 underline-offset-2 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish/40"
                >
                    {PHONE.display}
                </a>
                .
            </p>
        </form>
    )
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

function CheckoutView() {
    const { items, totalCents, clearCart } = useCart()
    const navigate = useNavigate()

    const handlePaymentSuccess = useCallback(
        (paymentDetails) => {
            clearCart()
            navigate('/order-success', { state: paymentDetails })
        },
        [clearCart, navigate]
    )

    const hasItems = items.length > 0

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden border-b-2 border-ink-900 bg-ink-900 pb-12 pt-32 lg:pb-16 lg:pt-40">
                <div className="mud-texture pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                    <Eyebrow>Checkout</Eyebrow>
                    <h1 className="mt-4 font-display text-section uppercase text-white">Almost there.</h1>
                </div>
            </section>

            {/* Checkout content */}
            <section className="bg-surface-100 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    {!hasItems ? (
                        <div className="mx-auto max-w-md text-center">
                            <p className="font-display text-xl uppercase tracking-wide text-ink-500">
                                Your cart is empty
                            </p>
                            <p className="mt-3 text-sm text-ink-500">
                                Head back to the menu and add some items before checking out.
                            </p>
                            <Button to="/menu" size="lg" className="mt-8">
                                Back to Menu
                            </Button>
                        </div>
                    ) : (
                        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                            <div className="lg:col-span-7">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm totalCents={totalCents} onSuccess={handlePaymentSuccess} />
                                </Elements>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="lg:sticky lg:top-28">
                                    <OrderSummary items={items} totalCents={totalCents} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default CheckoutView
