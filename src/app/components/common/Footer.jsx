import React from 'react'
import { Link } from 'react-router-dom'
import { ADDRESS, BUSINESS, EMAIL, HOURS, PHONE, SOCIAL } from '../../constants/site'
import Button from '../ui/Button'

const FOOTER_NAV = [
    { label: 'Menu', path: '/menu' },
    { label: 'Our Story', path: '/about' },
    { label: 'Find Us', path: '/contact' },
    { label: 'Catering', path: '/contact#catering' }
]

const SOCIAL_ICONS = {
    Instagram: (
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
    ),
    Facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
    TikTok: <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
}

function PinIcon() {
    return (
        <svg
            className="h-4 w-4 text-ink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
}

function PhoneIcon() {
    return (
        <svg
            className="h-4 w-4 text-ink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg
            className="h-4 w-4 text-ink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    )
}

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-surface-200">
            <div className="checker-band h-3 w-full bg-[length:16px_16px] text-ink-900/85" aria-hidden="true" />
            <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 md:px-6">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
                    {/* Logo & info */}
                    <div className="lg:col-span-5">
                        <Link
                            to="/"
                            className="mb-5 inline-block transition-opacity duration-200 hover:opacity-80 active:opacity-60"
                            aria-label={`${BUSINESS.fullName} — home`}
                        >
                            <img src="/logo.webp" alt={BUSINESS.fullName} className="h-24 w-auto" />
                        </Link>
                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-ink-600">
                            {BUSINESS.tagline} Seasoning heavy, beer cold, napkins useless.
                        </p>
                        <address className="not-italic space-y-2">
                            <a
                                href={ADDRESS.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-sm text-ink-600 transition-colors duration-200 hover:text-crawfish"
                            >
                                <PinIcon />
                                <span>{ADDRESS.full}</span>
                            </a>
                            <a
                                href={PHONE.href}
                                className="flex items-center gap-2.5 text-sm text-ink-600 transition-colors duration-200 hover:text-crawfish"
                            >
                                <PhoneIcon />
                                <span>{PHONE.display}</span>
                            </a>
                            <a
                                href={EMAIL.href}
                                className="flex items-center gap-2.5 text-sm text-ink-600 transition-colors duration-200 hover:text-crawfish"
                            >
                                <MailIcon />
                                <span>{EMAIL.primary}</span>
                            </a>
                        </address>

                        {/* Social */}
                        <div className="mt-6 flex items-center gap-2">
                            {SOCIAL.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${BUSINESS.name} on ${label}`}
                                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-surface-400 text-ink-500 transition-[background-color,color,border-color,transform] duration-200 hover:border-crawfish hover:bg-crawfish hover:text-white active:scale-[0.92]"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        {SOCIAL_ICONS[label] || null}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigate */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-4 font-display text-xs uppercase tracking-[0.2em] text-ink-900">Navigate</h3>
                        <ul className="space-y-2.5">
                            {FOOTER_NAV.map(({ label, path }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className="text-sm text-ink-600 transition-colors duration-200 hover:text-crawfish"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="lg:col-span-4">
                        <h3 className="mb-4 font-display text-xs uppercase tracking-[0.2em] text-ink-900">Hours</h3>
                        <dl className="space-y-2 text-sm text-ink-600">
                            {HOURS.map(({ short, time, closed }) => (
                                <div key={short} className="flex justify-between gap-4">
                                    <dt>{short}</dt>
                                    <dd className={closed ? 'text-ink-400' : 'text-ink-800'}>{time}</dd>
                                </div>
                            ))}
                        </dl>
                        <Button href={PHONE.href} size="sm" className="mt-6">
                            Call to Order
                        </Button>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-surface-300 pt-8 text-center sm:text-left">
                    <p className="text-xs text-ink-400">
                        &copy; {currentYear} {BUSINESS.fullName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
