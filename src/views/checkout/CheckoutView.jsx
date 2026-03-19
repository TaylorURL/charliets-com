import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useCart } from '../../app/context/CartContext'
import { formatCents } from '../../app/utils/FormatUtility'

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
            color: '#1A1816',
            '::placeholder': { color: '#9C9791' }
        },
        invalid: { color: '#E85D26' }
    }
}

const TAX_RATE = 0.0825

/* ──────────────────────────────────────────────
   Order Summary
   ────────────────────────────────────────────── */

function OrderSummary({ items, totalCents }) {
    const taxCents = Math.round(totalCents * TAX_RATE)
    const grandTotalCents = totalCents + taxCents

    return (
        <div className="rounded-xl border border-surface-300 bg-white p-6 shadow-sm lg:p-8">
            <h2 className="font-display text-lg uppercase tracking-wide text-ink-900">Your Order</h2>

            <div className="mt-6 divide-y divide-surface-300">
                {items.map(({ id, name, priceCents, quantity }) => (
                    <div key={id} className="flex items-start justify-between py-3">
                        <div>
                            <p className="text-sm text-ink-900">{name}</p>
                            <p className="text-xs text-ink-400">Qty: {quantity}</p>
                        </div>
                        <span className="text-sm font-medium text-ink-900">{formatCents(priceCents * quantity)}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 space-y-2 border-t border-surface-300 pt-4">
                <div className="flex justify-between text-sm text-ink-500">
                    <span>Subtotal</span>
                    <span>{formatCents(totalCents)}</span>
                </div>
                <div className="flex justify-between text-sm text-ink-500">
                    <span>Tax (8.25%)</span>
                    <span>{formatCents(taxCents)}</span>
                </div>
                <div className="flex justify-between border-t border-surface-300 pt-3 font-display text-lg text-ink-900">
                    <span>Total</span>
                    <span>{formatCents(grandTotalCents)}</span>
                </div>
            </div>
        </div>
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
        phone: ''
    })
    const [processing, setProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleFieldChange = useCallback((event) => {
        const { name, value } = event.target
        setFormState((prev) => ({ ...prev, [name]: value }))
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

            // In production, send paymentMethod.id + order details to your backend
            // to create a PaymentIntent and confirm it server-side.
            // For now, simulate success after payment method creation.
            onSuccess({
                paymentMethodId: paymentMethod.id,
                customerName: `${formState.firstName} ${formState.lastName}`,
                email: formState.email
            })
        },
        [stripe, elements, formState, onSuccess]
    )

    const taxCents = Math.round(totalCents * TAX_RATE)
    const grandTotalCents = totalCents + taxCents

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h2 className="font-display text-lg uppercase tracking-wide text-ink-900">Contact Info</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-xs uppercase tracking-wider text-ink-400">First Name</span>
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={formState.firstName}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="Charlie"
                        />
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-wider text-ink-400">Last Name</span>
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={formState.lastName}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="Thompson"
                        />
                    </label>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-xs uppercase tracking-wider text-ink-400">Email</span>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="charlie@example.com"
                        />
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-wider text-ink-400">Phone</span>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formState.phone}
                            onChange={handleFieldChange}
                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                            placeholder="(555) 123-4567"
                        />
                    </label>
                </div>
            </div>

            <div>
                <h2 className="font-display text-lg uppercase tracking-wide text-ink-900">Payment</h2>
                <div className="mt-4 rounded-lg border border-surface-400 bg-white px-4 py-3.5">
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </div>
            </div>

            {errorMessage && (
                <div className="rounded-lg border border-crawfish/30 bg-crawfish-light px-4 py-3 text-sm text-crawfish-dark">
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={!stripe || processing}
                className="w-full rounded-lg bg-crawfish py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
                {processing ? 'Processing...' : `Pay ${formatCents(grandTotalCents)}`}
            </button>
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
            <section className="border-b border-surface-300 bg-ink-900 pb-12 pt-32 lg:pb-16 lg:pt-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Checkout</p>
                    <h1 className="mt-4 font-display text-section uppercase text-white">Almost there.</h1>
                </div>
            </section>

            {/* Checkout content */}
            <section className="bg-surface-100 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    {!hasItems ? (
                        <div className="mx-auto max-w-md text-center">
                            <p className="font-display text-xl uppercase tracking-wide text-ink-400">
                                Your cart is empty
                            </p>
                            <p className="mt-3 text-sm text-ink-400">
                                Head back to the menu and add some items before checking out.
                            </p>
                            <a
                                href="/menu"
                                className="mt-8 inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                            >
                                Back to Menu
                            </a>
                        </div>
                    ) : (
                        <div className="grid gap-12 lg:grid-cols-12">
                            <div className="lg:col-span-7">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm totalCents={totalCents} onSuccess={handlePaymentSuccess} />
                                </Elements>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="lg:sticky lg:top-24">
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
