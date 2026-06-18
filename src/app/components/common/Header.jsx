import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { ADDRESS, HOURS_SUMMARY, PHONE } from '../../constants/site'
import CartDrawer from './CartDrawer'

const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Our Story', path: '/about' },
    { label: 'Find Us', path: '/contact' }
]

function PhoneIcon({ className }) {
    return (
        <svg
            className={className}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
    )
}

function CartButton({ count, onClick, variant }) {
    const isLight = variant === 'light'
    return (
        <button
            onClick={onClick}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 active:scale-[0.94] ${
                isLight
                    ? 'text-white/70 hover:bg-white/10 hover:text-white'
                    : 'text-ink-600 hover:bg-surface-200 hover:text-ink-900'
            }`}
            aria-label={`Shopping cart, ${count} item${count === 1 ? '' : 's'}`}
        >
            <svg
                width="20"
                height="20"
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
            {count > 0 && (
                <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-crawfish px-1 text-[10px] font-bold leading-none text-white ring-2 ring-ink-900">
                    {count > 99 ? '99+' : count}
                </span>
            )}
        </button>
    )
}

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { pathname } = useLocation()
    const { itemCount } = useCart()

    const isHome = pathname === '/'
    const isTransparent = isHome && !scrolled && !mobileMenuOpen

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
    const toggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), [])
    const openCart = useCallback(() => {
        setMobileMenuOpen(false)
        setCartOpen(true)
    }, [])
    const closeCart = useCallback(() => setCartOpen(false), [])

    return (
        <>
            {/* ── Utility strip ── */}
            <div
                className={`fixed left-0 right-0 top-0 z-[51] flex h-8 items-center justify-center gap-4 px-4 text-[11px] font-medium tracking-wider transition-[transform,opacity,background-color] duration-500 sm:gap-6 ${
                    isTransparent
                        ? 'bg-black/30 text-white/65 backdrop-blur-sm'
                        : scrolled
                          ? '-translate-y-full opacity-0'
                          : 'bg-ink-900 text-white/55'
                }`}
            >
                <span className="whitespace-nowrap font-display tracking-[0.18em]">
                    {ADDRESS.city.toUpperCase()}, {ADDRESS.state}
                </span>
                <span
                    className="checker-band h-2 w-3.5 bg-[length:5px_5px] text-current opacity-50"
                    aria-hidden="true"
                />
                <span className="hidden whitespace-nowrap sm:inline">{HOURS_SUMMARY}</span>
                <span
                    className="checker-band h-2 w-3.5 bg-[length:5px_5px] text-current opacity-50 sm:hidden"
                    aria-hidden="true"
                />
                <a href={PHONE.href} className="whitespace-nowrap transition-colors duration-200 hover:text-crawfish">
                    {PHONE.display}
                </a>
            </div>

            {/* ── Main header ── */}
            <header
                className={`fixed left-0 right-0 z-50 transition-[top,background-color,box-shadow] duration-500 ${
                    scrolled ? 'top-0' : 'top-8'
                } ${
                    isTransparent
                        ? 'bg-transparent'
                        : 'bg-ink-900/95 shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl'
                }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center px-6 lg:h-[72px] lg:px-10">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="shrink-0 transition-opacity duration-200 hover:opacity-90 active:opacity-75"
                        aria-label={`${ADDRESS.city} — Charlie T's home`}
                    >
                        <img
                            src="/logo.webp"
                            alt="Charlie T's Crawfish Shack"
                            className={`transition-[height] duration-300 ${scrolled ? 'h-10 lg:h-11' : 'h-11 lg:h-14'}`}
                        />
                    </Link>

                    {/* Desktop nav -- pushed to the right */}
                    <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
                        {NAV_LINKS.map(({ label, path }) => {
                            const isActive = pathname === path
                            return (
                                <Link key={path} to={path} className="group relative px-5 py-2">
                                    <span
                                        className={`relative z-10 font-display text-[13px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                                            isActive ? 'text-crawfish' : 'text-white/65 group-hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </span>
                                    <span
                                        className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-crawfish transition-[width] duration-300 ${
                                            isActive ? 'w-6' : 'w-0 group-hover:w-4'
                                        }`}
                                    />
                                </Link>
                            )
                        })}

                        <span className="mx-3 h-4 w-px bg-white/10" aria-hidden="true" />

                        <CartButton count={itemCount} onClick={openCart} variant="light" />

                        <a
                            href={PHONE.href}
                            className="ml-3 inline-flex items-center gap-2 rounded-full border border-crawfish/80 bg-crawfish/10 px-5 py-2 font-display text-[12px] uppercase tracking-[0.12em] text-crawfish transition-[background-color,color,box-shadow,transform] duration-200 hover:bg-crawfish hover:text-white hover:shadow-[0_0_20px_rgba(232,93,38,0.3)] active:scale-[0.97]"
                        >
                            <PhoneIcon className="h-3.5 w-3.5" />
                            Call to Order
                        </a>
                    </nav>

                    {/* Mobile controls */}
                    <div className="ml-auto flex items-center gap-2 md:hidden">
                        <CartButton count={itemCount} onClick={openCart} variant="light" />
                        <button
                            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10 active:scale-[0.94]"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <div className="flex w-5 flex-col items-end gap-[5px]">
                                <span
                                    className={`block h-[2px] rounded-full bg-white transition-[transform,width,opacity] duration-300 ${
                                        mobileMenuOpen ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'
                                    }`}
                                />
                                <span
                                    className={`block h-[2px] rounded-full bg-white transition-[transform,width,opacity] duration-300 ${
                                        mobileMenuOpen ? 'w-5 scale-x-0 opacity-0' : 'w-3.5'
                                    }`}
                                />
                                <span
                                    className={`block h-[2px] rounded-full bg-white transition-[transform,width,opacity] duration-300 ${
                                        mobileMenuOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-5'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile fullscreen menu ── */}
            <div
                className={`fixed inset-0 z-40 bg-ink-900 transition-[opacity,visibility] duration-500 md:hidden ${
                    mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-crawfish/5 blur-[100px]" />

                <nav
                    className="relative flex h-full flex-col items-center justify-center gap-3 px-8 pt-20"
                    aria-label="Mobile primary"
                >
                    {NAV_LINKS.map(({ label, path }, index) => {
                        const isActive = pathname === path
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`group flex w-full items-center justify-center gap-4 rounded-2xl py-5 transition-[opacity,transform,background-color] duration-500 ${
                                    mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                } ${isActive ? 'bg-white/5' : 'hover:bg-white/5 active:bg-white/10'}`}
                                style={{
                                    transitionDelay: mobileMenuOpen ? `${(index + 1) * 80}ms` : '0ms'
                                }}
                                onClick={closeMobileMenu}
                            >
                                {isActive && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-crawfish" aria-hidden="true" />
                                )}
                                <span
                                    className={`font-display text-3xl uppercase tracking-wider ${
                                        isActive ? 'text-crawfish' : 'text-white/85 group-hover:text-white'
                                    }`}
                                >
                                    {label}
                                </span>
                            </Link>
                        )
                    })}

                    <div
                        className={`mt-6 w-full transition-[opacity,transform] duration-500 ${
                            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                        style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}
                    >
                        <a
                            href={PHONE.href}
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-crawfish py-5 font-display text-base uppercase tracking-wider text-white transition-[background-color,transform] duration-200 hover:bg-crawfish-dark active:scale-[0.98]"
                            onClick={closeMobileMenu}
                        >
                            <PhoneIcon className="h-[18px] w-[18px]" />
                            Call {PHONE.display}
                        </a>
                    </div>

                    <div
                        className={`mt-6 w-full max-w-xs text-center transition-[opacity,transform] duration-500 ${
                            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: mobileMenuOpen ? '480ms' : '0ms' }}
                    >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-crawfish/60">
                            Open Today
                        </p>
                        <p className="mt-1 text-sm text-white/70">{HOURS_SUMMARY}</p>
                        <p className="mt-4 text-[11px] tracking-wider text-white/30">{ADDRESS.full.toUpperCase()}</p>
                    </div>
                </nav>
            </div>

            <CartDrawer isOpen={cartOpen} onClose={closeCart} />
        </>
    )
}

export default Header
