import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const ACTION = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    SET_QUANTITY: 'SET_QUANTITY',
    CLEAR: 'CLEAR'
}

function cartReducer(state, action) {
    switch (action.type) {
        case ACTION.ADD: {
            const { item } = action
            const existing = state.find((entry) => entry.id === item.id)
            if (existing) {
                return state.map((entry) => (entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry))
            }
            return [...state, { ...item, quantity: 1 }]
        }
        case ACTION.REMOVE:
            return state.filter((entry) => entry.id !== action.id)
        case ACTION.SET_QUANTITY: {
            if (action.quantity <= 0) {
                return state.filter((entry) => entry.id !== action.id)
            }
            return state.map((entry) => (entry.id === action.id ? { ...entry, quantity: action.quantity } : entry))
        }
        case ACTION.CLEAR:
            return []
        default:
            return state
    }
}

export function CartProvider({ children }) {
    const [items, dispatch] = useReducer(cartReducer, [])

    const addItem = useCallback((item) => dispatch({ type: ACTION.ADD, item }), [])

    const removeItem = useCallback((id) => dispatch({ type: ACTION.REMOVE, id }), [])

    const setQuantity = useCallback((id, quantity) => dispatch({ type: ACTION.SET_QUANTITY, id, quantity }), [])

    const clearCart = useCallback(() => dispatch({ type: ACTION.CLEAR }), [])

    const itemCount = useMemo(() => items.reduce((sum, entry) => sum + entry.quantity, 0), [items])

    const totalCents = useMemo(() => items.reduce((sum, entry) => sum + entry.priceCents * entry.quantity, 0), [items])

    const value = useMemo(
        () => ({ items, itemCount, totalCents, addItem, removeItem, setQuantity, clearCart }),
        [items, itemCount, totalCents, addItem, removeItem, setQuantity, clearCart]
    )

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
