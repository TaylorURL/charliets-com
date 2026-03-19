import React from 'react'
import { Link } from 'react-router-dom'

const FOOTER_NAV = [
    { label: 'Menu', path: '/menu' },
    { label: 'Our Story', path: '/about' },
    { label: 'Find Us', path: '/contact' }
]

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-surface-300 bg-surface-200 px-4 pb-8 pt-16 md:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & info */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="mb-5 inline-block">
                            <img src="/logo.webp" alt="Charlie T's Crawfish Shack" className="h-24 w-auto" />
                        </Link>
                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-ink-500">
                            Fresh boiled crawfish and Cajun seafood in Dayton, Texas. Seasoning heavy, beer cold,
                            napkins useless.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2.5 text-sm text-ink-500">
                                <svg
                                    className="h-4 w-4 text-ink-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>20 Private Rd 442, Dayton, TX 77535</span>
                            </div>
                            <a
                                href="tel:+15551234567"
                                className="flex items-center gap-2.5 text-sm text-ink-500 transition-colors hover:text-crawfish"
                            >
                                <svg
                                    className="h-4 w-4 text-ink-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>(555) 123-4567</span>
                            </a>
                            <a
                                href="mailto:eat@charliets.com"
                                className="flex items-center gap-2.5 text-sm text-ink-500 transition-colors hover:text-crawfish"
                            >
                                <svg
                                    className="h-4 w-4 text-ink-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>eat@charliets.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigate */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-ink-900">Navigate</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_NAV.map(({ label, path }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className="text-sm text-ink-500 transition-colors hover:text-ink-900"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-ink-900">Hours</h3>
                        <dl className="space-y-2 text-sm text-ink-500">
                            <div className="flex justify-between gap-4">
                                <dt>Tue - Thu</dt>
                                <dd className="text-ink-700">11a - 9p</dd>
                            </div>
                            <div className="flex justify-between gap-4">
                                <dt>Fri - Sat</dt>
                                <dd className="text-ink-700">11a - 10p</dd>
                            </div>
                            <div className="flex justify-between gap-4">
                                <dt>Sunday</dt>
                                <dd className="text-ink-700">11a - 8p</dd>
                            </div>
                            <div className="flex justify-between gap-4">
                                <dt>Monday</dt>
                                <dd className="text-ink-400">Closed</dd>
                            </div>
                        </dl>
                        <a
                            href="tel:+15551234567"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-crawfish px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-crawfish-dark"
                        >
                            Call to Order
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-surface-300 pt-8 sm:flex-row">
                    <p className="text-sm text-ink-400">
                        &copy; {currentYear} Charlie T's Crawfish Shack. All rights reserved.
                    </p>
                    <p className="text-sm text-ink-400">
                        Made by{' '}
                        <a
                            href="https://taylorurl.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-ink-600 transition-colors hover:text-crawfish"
                        >
                            TaylorURL.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
