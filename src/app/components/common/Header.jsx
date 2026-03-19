import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartDrawer from './CartDrawer'

const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Our Story', path: '/about' },
    { label: 'Find Us', path: '/contact' }
]

function CartButton({ count, onClick, variant }) {
    const isLight = variant === 'light'
    return (
        <button
            onClick={onClick}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                isLight
                    ? 'text-white/70 hover:bg-white/10 hover:text-white'
                    : 'text-ink-600 hover:bg-surface-200 hover:text-ink-900'
            }`}
            aria-label={`Shopping cart, ${count} items`}
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
            >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {count > 0 && (
                <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-crawfish px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white">
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
                className={`fixed left-0 right-0 top-0 z-[51] flex h-8 items-center justify-center gap-6 text-[11px] font-medium tracking-wider transition-all duration-500 ${
                    isTransparent
                        ? 'bg-black/30 text-white/60 backdrop-blur-sm'
                        : scrolled
                          ? '-translate-y-full opacity-0'
                          : 'bg-ink-900 text-white/50'
                }`}
            >
                <span>DAYTON, TX</span>
                <span className="text-crawfish/40">|</span>
                <span>TUE-SAT 11A-10P</span>
                <span className="text-crawfish/40">|</span>
                <a href="tel:+15551234567" className="transition-colors hover:text-crawfish">
                    (555) 123-4567
                </a>
            </div>

            {/* ── Main header ── */}
            <header
                className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0' : 'top-8'} ${
                    isTransparent
                        ? 'bg-transparent'
                        : 'bg-ink-900/95 shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl'
                }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center px-6 lg:h-[72px] lg:px-10">
                    {/* Logo */}
                    <Link to="/" className="shrink-0">
                        <img
                            src="/logo.webp"
                            alt="Charlie T's Crawfish Shack"
                            className={`transition-all duration-300 ${scrolled ? 'h-10 lg:h-11' : 'h-11 lg:h-14'}`}
                        />
                    </Link>

                    {/* Desktop nav -- pushed to the right */}
                    <nav className="ml-auto hidden items-center gap-1 md:flex">
                        {NAV_LINKS.map(({ label, path }) => {
                            const isActive = pathname === path
                            return (
                                <Link key={path} to={path} className="group relative px-5 py-2">
                                    <span
                                        className={`relative z-10 font-display text-[13px] uppercase tracking-[0.15em] transition-colors ${
                                            isActive ? 'text-crawfish' : 'text-white/60 group-hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </span>
                                    {/* Active / hover underline */}
                                    <span
                                        className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-crawfish transition-all duration-300 ${
                                            isActive ? 'w-6' : 'w-0 group-hover:w-4'
                                        }`}
                                    />
                                </Link>
                            )
                        })}

                        <span className="mx-3 h-4 w-px bg-white/10" />

                        <CartButton count={itemCount} onClick={openCart} variant="light" />

                        <a
                            href="tel:+15551234567"
                            className="ml-3 inline-flex items-center gap-2 rounded-full border border-crawfish/80 bg-crawfish/10 px-5 py-2 font-display text-[12px] uppercase tracking-[0.12em] text-crawfish transition-all hover:bg-crawfish hover:text-white hover:shadow-[0_0_20px_rgba(232,93,38,0.3)]"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            Order Now
                        </a>
                    </nav>

                    {/* Mobile controls */}
                    <div className="ml-auto flex items-center gap-2 md:hidden">
                        <CartButton count={itemCount} onClick={openCart} variant="light" />
                        <button
                            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <div className="flex w-5 flex-col items-end gap-[5px]">
                                <span
                                    className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${
                                        mobileMenuOpen ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'
                                    }`}
                                />
                                <span
                                    className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${
                                        mobileMenuOpen ? 'w-5 scale-x-0 opacity-0' : 'w-3.5'
                                    }`}
                                />
                                <span
                                    className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${
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
                className={`fixed inset-0 z-40 bg-ink-900 transition-all duration-500 md:hidden ${
                    mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Decorative glow */}
                <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-crawfish/5 blur-[100px]" />

                <nav className="relative flex h-full flex-col items-center justify-center gap-3 px-8">
                    {NAV_LINKS.map(({ label, path }, index) => {
                        const isActive = pathname === path
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`group flex w-full items-center justify-center gap-4 rounded-2xl py-5 transition-all duration-500 ${
                                    mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                } ${isActive ? 'bg-white/5' : 'hover:bg-white/5'}`}
                                style={{
                                    transitionDelay: mobileMenuOpen ? `${(index + 1) * 80}ms` : '0ms'
                                }}
                                onClick={closeMobileMenu}
                            >
                                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-crawfish" />}
                                <span
                                    className={`font-display text-3xl uppercase tracking-wider ${
                                        isActive ? 'text-crawfish' : 'text-white/80 group-hover:text-white'
                                    }`}
                                >
                                    {label}
                                </span>
                            </Link>
                        )
                    })}

                    <div
                        className={`mt-6 w-full transition-all duration-500 ${
                            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                        }`}
                        style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}
                    >
                        <a
                            href="tel:+15551234567"
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-crawfish py-5 font-display text-base uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                            onClick={closeMobileMenu}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            Call (555) 123-4567
                        </a>
                    </div>

                    <p
                        className={`mt-4 text-center text-xs tracking-wider text-white/20 transition-all duration-500 ${
                            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: mobileMenuOpen ? '480ms' : '0ms' }}
                    >
                        20 PRIVATE RD 442 -- DAYTON, TX 77535
                    </p>
                </nav>
            </div>

            <CartDrawer isOpen={cartOpen} onClose={closeCart} />
        </>
    )
}

export default Header
