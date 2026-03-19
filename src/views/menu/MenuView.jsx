import React, { useCallback, useState } from 'react'
import MENU_CATEGORIES from '../../app/constants/menu'
import { useCart } from '../../app/context/CartContext'

/* ──────────────────────────────────────────────
   Components
   ────────────────────────────────────────────── */

function CategoryNav({ categories, activeCategoryId, onSelect }) {
    return (
        <nav className="scrollbar-none flex gap-2 overflow-x-auto pb-2">
            {categories.map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => onSelect(id)}
                    className={`shrink-0 rounded-lg px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                        activeCategoryId === id
                            ? 'bg-crawfish text-white'
                            : 'border border-surface-400 text-ink-600 hover:border-crawfish/50 hover:text-crawfish'
                    }`}
                >
                    {label}
                </button>
            ))}
        </nav>
    )
}

function AddToCartButton({ item }) {
    const { items, addItem, setQuantity } = useCart()
    const cartEntry = items.find((entry) => entry.id === item.id)
    const quantity = cartEntry?.quantity || 0

    const handleAdd = useCallback(() => addItem(item), [addItem, item])
    const handleIncrement = useCallback(() => setQuantity(item.id, quantity + 1), [setQuantity, item.id, quantity])
    const handleDecrement = useCallback(() => setQuantity(item.id, quantity - 1), [setQuantity, item.id, quantity])

    if (quantity === 0) {
        return (
            <button
                onClick={handleAdd}
                className="shrink-0 rounded-lg border border-crawfish/30 bg-crawfish-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-crawfish transition-colors hover:bg-crawfish hover:text-white"
            >
                Add
            </button>
        )
    }

    return (
        <div className="flex shrink-0 items-center gap-1.5">
            <button
                onClick={handleDecrement}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-400 text-sm text-ink-600 transition-colors hover:border-crawfish hover:text-crawfish"
                aria-label="Decrease quantity"
            >
                -
            </button>
            <span className="w-7 text-center text-sm font-semibold text-ink-900">{quantity}</span>
            <button
                onClick={handleIncrement}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-400 text-sm text-ink-600 transition-colors hover:border-crawfish hover:text-crawfish"
                aria-label="Increase quantity"
            >
                +
            </button>
        </div>
    )
}

function MenuItem({ item }) {
    const isMarketPrice = item.marketPrice

    return (
        <div className="group flex flex-col gap-3 py-6 md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
                <h3 className="font-display text-lg uppercase tracking-wide text-ink-900 transition-colors group-hover:text-crawfish">
                    {item.name}
                </h3>
                <p className="mt-1 text-sm text-ink-500">{item.note}</p>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <span className="shrink-0 font-display text-lg text-crawfish">{item.priceLabel}</span>
                {isMarketPrice ? (
                    <span className="shrink-0 text-xs italic text-ink-400">Call to order</span>
                ) : (
                    <AddToCartButton item={item} />
                )}
            </div>
        </div>
    )
}

function MenuCategory({ category }) {
    return (
        <section id={`menu-${category.id}`} className="scroll-mt-32">
            <div className="mb-10">
                <h2 className="font-display text-section uppercase text-ink-900">{category.label}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500">{category.description}</p>
            </div>

            <div className="divide-y divide-surface-300">
                {category.items.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

function MenuView() {
    const [activeCategoryId, setActiveCategoryId] = useState(MENU_CATEGORIES[0].id)

    const handleCategorySelect = (categoryId) => {
        setActiveCategoryId(categoryId)
        const element = document.getElementById(`menu-${categoryId}`)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <>
            {/* Hero */}
            <section className="border-b border-surface-300 bg-ink-900 pb-16 pt-32 lg:pb-20 lg:pt-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">The Menu</p>
                    <h1 className="mt-4 font-display text-hero uppercase text-white">
                        What we
                        <br />
                        serve.
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                        Prices are straightforward. Portions are generous. If you can't decide, get the crawfish. That's
                        why you're here.
                    </p>
                </div>
            </section>

            {/* Sticky category nav + menu items */}
            <section className="bg-surface-100 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="sticky top-16 z-30 -mx-6 bg-surface-100/95 px-6 py-4 backdrop-blur-md lg:-mx-10 lg:px-10">
                        <CategoryNav
                            categories={MENU_CATEGORIES}
                            activeCategoryId={activeCategoryId}
                            onSelect={handleCategorySelect}
                        />
                    </div>

                    <div className="mt-8 space-y-20">
                        {MENU_CATEGORIES.map((category) => (
                            <MenuCategory key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-surface-300 bg-surface-200 py-20">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="font-display text-2xl uppercase tracking-wide text-ink-900 md:text-3xl">
                        We don't do online orders.
                    </h2>
                    <p className="mt-4 text-sm text-ink-500">
                        Call ahead for large party orders or catering. Walk-ins welcome for everything else.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                        >
                            Call (555) 123-4567
                        </a>
                        <a
                            href="/contact"
                            className="text-sm font-medium text-ink-500 underline decoration-surface-400 underline-offset-4 transition-colors hover:text-crawfish hover:decoration-crawfish"
                        >
                            Or come find us &#8594;
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuView
