import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MENU_CATEGORIES from '../../app/constants/menu'
import { PHONE } from '../../app/constants/site'
import { useCart } from '../../app/context/CartContext'
import Button from '../../app/components/ui/Button'
import Eyebrow from '../../app/components/ui/Eyebrow'

/* ──────────────────────────────────────────────
   Components
   ────────────────────────────────────────────── */

function CategoryNav({ categories, activeCategoryId, onSelect }) {
    return (
        <nav className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1" aria-label="Menu categories">
            {categories.map(({ id, label }) => {
                const isActive = activeCategoryId === id
                return (
                    <button
                        key={id}
                        onClick={() => onSelect(id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`shrink-0 rounded-lg px-5 py-2.5 font-display text-[11px] uppercase tracking-[0.18em] transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.97] ${
                            isActive
                                ? 'bg-crawfish text-white shadow-[0_6px_20px_-8px_rgba(232,93,38,0.5)]'
                                : 'border border-surface-400 bg-white text-ink-700 hover:border-crawfish/40 hover:text-crawfish'
                        }`}
                    >
                        {label}
                    </button>
                )
            })}
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
                className="shrink-0 rounded-lg border border-crawfish/30 bg-crawfish-light px-4 py-2 font-display text-[11px] uppercase tracking-[0.15em] text-crawfish transition-[background-color,color,border-color,transform] duration-200 hover:border-crawfish hover:bg-crawfish hover:text-white active:scale-[0.96]"
                aria-label={`Add ${item.name} to cart`}
            >
                Add
            </button>
        )
    }

    return (
        <div className="flex shrink-0 items-center gap-1.5">
            <button
                onClick={handleDecrement}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-400 text-sm text-ink-700 transition-[border-color,color,transform] duration-150 hover:border-crawfish hover:text-crawfish active:scale-[0.92]"
                aria-label={`Decrease ${item.name} quantity`}
            >
                <span aria-hidden="true">&minus;</span>
            </button>
            <span className="w-7 text-center text-sm font-semibold tabular-nums text-ink-900">{quantity}</span>
            <button
                onClick={handleIncrement}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-400 text-sm text-ink-700 transition-[border-color,color,transform] duration-150 hover:border-crawfish hover:text-crawfish active:scale-[0.92]"
                aria-label={`Increase ${item.name} quantity`}
            >
                <span aria-hidden="true">+</span>
            </button>
        </div>
    )
}

function MenuItem({ item }) {
    const isMarketPrice = item.marketPrice

    return (
        <div className="group flex flex-col gap-3 py-6 md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
                <h3 className="font-display text-lg uppercase tracking-wide text-ink-900 transition-colors duration-200 group-hover:text-crawfish">
                    {item.name}
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-600">{item.note}</p>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <span className="shrink-0 font-display text-lg tabular-nums text-crawfish">{item.priceLabel}</span>
                {isMarketPrice ? (
                    <a
                        href={PHONE.href}
                        className="shrink-0 rounded-lg border border-surface-400 px-4 py-2 font-display text-[11px] uppercase tracking-[0.15em] text-ink-600 transition-[border-color,color,transform] duration-200 hover:border-crawfish hover:text-crawfish active:scale-[0.96]"
                    >
                        Call to order
                    </a>
                ) : (
                    <AddToCartButton item={item} />
                )}
            </div>
        </div>
    )
}

function MenuCategory({ category, registerRef }) {
    return (
        <section
            id={`menu-${category.id}`}
            ref={registerRef}
            data-category-id={category.id}
            className="scroll-mt-44 lg:scroll-mt-48"
            aria-labelledby={`heading-${category.id}`}
        >
            <div className="mb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-crawfish">Section</p>
                <h2 id={`heading-${category.id}`} className="mt-3 font-display text-section uppercase text-ink-900">
                    {category.label}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">{category.description}</p>
            </div>

            <div className="divide-y divide-surface-300 border-t border-surface-300">
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
    const sectionRefsRef = useRef({})
    const ignoreScrollUntilRef = useRef(0)

    const handleCategorySelect = useCallback((categoryId) => {
        setActiveCategoryId(categoryId)
        ignoreScrollUntilRef.current = Date.now() + 900
        const element = sectionRefsRef.current[categoryId]
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    const registerRef = useCallback(
        (categoryId) => (element) => {
            if (element) {
                sectionRefsRef.current[categoryId] = element
            }
        },
        []
    )

    useEffect(() => {
        const handleScroll = () => {
            if (Date.now() < ignoreScrollUntilRef.current) return
            const offsetThreshold = window.innerHeight * 0.35
            let currentId = MENU_CATEGORIES[0].id
            for (const { id } of MENU_CATEGORIES) {
                const element = sectionRefsRef.current[id]
                if (!element) continue
                const rect = element.getBoundingClientRect()
                if (rect.top - offsetThreshold <= 0) {
                    currentId = id
                }
            }
            setActiveCategoryId((prev) => (prev === currentId ? prev : currentId))
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const itemSummary = useMemo(() => MENU_CATEGORIES.reduce((total, category) => total + category.items.length, 0), [])

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
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                        Prices are straightforward. Portions are generous. If you can't decide, get the crawfish. That's
                        why you're here.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/45">
                        <span>
                            <span className="font-display text-white">{itemSummary}+</span> items
                        </span>
                        <span>
                            <span className="font-display text-white">{MENU_CATEGORIES.length}</span> sections
                        </span>
                        <span>
                            <span className="font-display text-white">Tax</span> not included
                        </span>
                    </div>
                </div>
            </section>

            {/* Sticky category nav + menu items */}
            <section className="bg-surface-100 pb-16 pt-8 lg:pb-24 lg:pt-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="sticky top-16 z-30 -mx-6 border-b border-surface-300 bg-surface-100/95 px-6 py-4 backdrop-blur-md lg:-mx-10 lg:top-[72px] lg:px-10">
                        <CategoryNav
                            categories={MENU_CATEGORIES}
                            activeCategoryId={activeCategoryId}
                            onSelect={handleCategorySelect}
                        />
                    </div>

                    <div className="mt-12 space-y-20 lg:mt-16 lg:space-y-24">
                        {MENU_CATEGORIES.map((category) => (
                            <MenuCategory
                                key={category.id}
                                category={category}
                                registerRef={registerRef(category.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-surface-300 bg-surface-200 py-20">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="font-display text-2xl uppercase tracking-wide text-ink-900 md:text-3xl">
                        Big party? Call ahead.
                    </h2>
                    <p className="mt-4 text-sm text-ink-600">
                        For groups over 10 or large takeout orders, give us a call so we can have the pot rolling when
                        you arrive.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href={PHONE.href}
                            className="inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-crawfish-dark hover:shadow-[0_8px_30px_-8px_rgba(232,93,38,0.5)] active:scale-[0.97]"
                        >
                            Call {PHONE.display}
                        </a>
                        <a
                            href="/contact"
                            className="text-sm font-medium text-ink-600 underline decoration-surface-400 underline-offset-4 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish"
                        >
                            Or come find us &rarr;
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuView
