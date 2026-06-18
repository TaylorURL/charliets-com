import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatCents } from '../../utils/FormatUtility'
import Button from '../ui/Button'

function CartLineItem({ id, name, priceCents, quantity, onSetQuantity, onRemove }) {
    const decrement = useCallback(() => onSetQuantity(id, quantity - 1), [id, quantity, onSetQuantity])
    const increment = useCallback(() => onSetQuantity(id, quantity + 1), [id, quantity, onSetQuantity])
    const remove = useCallback(() => onRemove(id), [id, onRemove])

    return (
        <div className="flex items-start gap-4 py-5">
            <div className="flex-1 min-w-0">
                <p className="truncate font-display text-sm uppercase tracking-wide text-ink-900">{name}</p>
                <p className="mt-0.5 text-xs text-ink-500">{formatCents(priceCents)} each</p>
            </div>

            <div className="flex shrink-0 items-center gap-1.5">
                <button
                    onClick={decrement}
                    className="flex h-7 w-7 items-center justify-center rounded border border-surface-400 text-sm text-ink-700 transition-[border-color,color,transform] duration-150 hover:border-crawfish hover:text-crawfish active:scale-[0.9]"
                    aria-label={`Decrease ${name} quantity`}
                >
                    <span aria-hidden="true">&minus;</span>
                </button>
                <span className="w-6 text-center text-sm font-medium tabular-nums text-ink-900">{quantity}</span>
                <button
                    onClick={increment}
                    className="flex h-7 w-7 items-center justify-center rounded border border-surface-400 text-sm text-ink-700 transition-[border-color,color,transform] duration-150 hover:border-crawfish hover:text-crawfish active:scale-[0.9]"
                    aria-label={`Increase ${name} quantity`}
                >
                    <span aria-hidden="true">+</span>
                </button>
            </div>

            <div className="flex w-20 shrink-0 flex-col items-end gap-1">
                <span className="text-sm font-medium tabular-nums text-ink-900">
                    {formatCents(priceCents * quantity)}
                </span>
                <button
                    onClick={remove}
                    className="text-[11px] text-ink-400 underline decoration-surface-400 underline-offset-2 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish/40"
                    aria-label={`Remove ${name} from cart`}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

function CartDrawer({ isOpen, onClose }) {
    const { items, itemCount, totalCents, setQuantity, removeItem, clearCart } = useCart()
    const navigate = useNavigate()
    const [rendered, setRendered] = useState(isOpen)
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setRendered(true)
            const id = requestAnimationFrame(() => setAnimating(true))
            return () => cancelAnimationFrame(id)
        }
        setAnimating(false)
        const timer = setTimeout(() => setRendered(false), 300)
        return () => clearTimeout(timer)
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const handleCheckout = useCallback(() => {
        onClose()
        navigate('/checkout')
    }, [onClose, navigate])

    if (!rendered) return null

    return (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-label="Shopping cart" aria-modal="true">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 ${
                    animating ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <aside
                className={`absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-white shadow-2xl will-change-transform ${
                    animating ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{
                    transition: 'transform 320ms cubic-bezier(0.32, 0.72, 0, 1)'
                }}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-surface-300 px-6 py-5">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-crawfish">
                            Your Order
                        </p>
                        <h2 className="mt-1 font-display text-lg uppercase tracking-wide text-ink-900">
                            {itemCount > 0 ? `${itemCount} ${itemCount === 1 ? 'item' : 'items'}` : 'Empty cart'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-ink-500 transition-[background-color,color,transform] duration-200 hover:bg-surface-200 hover:text-ink-900 active:scale-[0.92]"
                        aria-label="Close cart"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6">
                    {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-surface-300 text-ink-400">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                            </div>
                            <p className="font-display text-base uppercase tracking-wide text-ink-500">
                                Nothing here yet
                            </p>
                            <p className="mt-2 max-w-xs text-sm text-ink-500">
                                Add something from the menu and your order will show up here.
                            </p>
                            <Button onClick={onClose} variant="outline-light" size="sm" className="mt-6">
                                Browse menu
                            </Button>
                        </div>
                    ) : (
                        <div className="divide-y divide-surface-300">
                            {items.map((item) => (
                                <CartLineItem
                                    key={item.id}
                                    {...item}
                                    onSetQuantity={setQuantity}
                                    onRemove={removeItem}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-surface-300 px-6 pb-6 pt-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-ink-600">Subtotal</span>
                            <span className="font-display text-xl tabular-nums text-ink-900">
                                {formatCents(totalCents)}
                            </span>
                        </div>
                        <p className="mt-1 text-xs text-ink-500">Tax calculated at checkout. Pickup only.</p>

                        <button
                            onClick={handleCheckout}
                            className="mt-4 w-full rounded-lg bg-crawfish py-4 font-display text-sm uppercase tracking-wider text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-crawfish-dark hover:shadow-[0_8px_30px_-8px_rgba(232,93,38,0.5)] active:scale-[0.98]"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={clearCart}
                            className="mt-2 w-full py-2 text-xs text-ink-400 underline decoration-surface-400 underline-offset-2 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish/40"
                        >
                            Clear order
                        </button>
                    </div>
                )}
            </aside>
        </div>
    )
}

export default CartDrawer
