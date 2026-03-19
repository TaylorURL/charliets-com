import React, { useCallback, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatCents } from '../../utils/FormatUtility'

function CartLineItem({ id, name, priceCents, quantity, onSetQuantity, onRemove }) {
    const decrement = useCallback(() => onSetQuantity(id, quantity - 1), [id, quantity, onSetQuantity])
    const increment = useCallback(() => onSetQuantity(id, quantity + 1), [id, quantity, onSetQuantity])
    const remove = useCallback(() => onRemove(id), [id, onRemove])

    return (
        <div className="flex items-start gap-4 py-4">
            <div className="flex-1">
                <p className="font-display text-sm uppercase tracking-wide text-ink-900">{name}</p>
                <p className="mt-0.5 text-xs text-ink-500">{formatCents(priceCents)} each</p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={decrement}
                    className="flex h-7 w-7 items-center justify-center rounded border border-surface-400 text-sm text-ink-600 transition-colors hover:border-crawfish hover:text-crawfish"
                    aria-label={`Decrease ${name} quantity`}
                >
                    -
                </button>
                <span className="w-6 text-center text-sm font-medium text-ink-900">{quantity}</span>
                <button
                    onClick={increment}
                    className="flex h-7 w-7 items-center justify-center rounded border border-surface-400 text-sm text-ink-600 transition-colors hover:border-crawfish hover:text-crawfish"
                    aria-label={`Increase ${name} quantity`}
                >
                    +
                </button>
            </div>

            <div className="flex w-16 flex-col items-end gap-1">
                <span className="text-sm font-medium text-ink-900">{formatCents(priceCents * quantity)}</span>
                <button
                    onClick={remove}
                    className="text-xs text-ink-400 underline underline-offset-2 transition-colors hover:text-crawfish"
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
    const drawerRef = useRef(null)

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

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[60]">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

            {/* Drawer */}
            <aside
                ref={drawerRef}
                className="absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
                role="dialog"
                aria-label="Shopping cart"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-surface-300 px-6 py-5">
                    <h2 className="font-display text-lg uppercase tracking-wide text-ink-900">
                        Your Order{itemCount > 0 && ` (${itemCount})`}
                    </h2>
                    <button
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-surface-200 hover:text-ink-900"
                        aria-label="Close cart"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6">
                    {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <p className="font-display text-base uppercase tracking-wide text-ink-400">
                                Nothing here yet
                            </p>
                            <p className="mt-2 text-sm text-ink-400">Add something from the menu to get started.</p>
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
                    <div className="border-t border-surface-300 px-6 pb-6 pt-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-ink-500">Subtotal</span>
                            <span className="font-display text-xl text-ink-900">{formatCents(totalCents)}</span>
                        </div>
                        <p className="mt-1 text-xs text-ink-400">Tax calculated at checkout.</p>

                        <button
                            onClick={handleCheckout}
                            className="mt-4 w-full rounded-lg bg-crawfish py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={clearCart}
                            className="mt-2 w-full py-2 text-xs text-ink-400 underline underline-offset-2 transition-colors hover:text-crawfish"
                        >
                            Clear Order
                        </button>
                    </div>
                )}
            </aside>
        </div>
    )
}

export default CartDrawer
