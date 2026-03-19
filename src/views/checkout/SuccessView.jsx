import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SuccessView() {
    const { state } = useLocation()
    const customerName = state?.customerName || 'there'

    return (
        <>
            {/* Hero */}
            <section className="border-b border-surface-300 bg-ink-900 pb-16 pt-32 lg:pb-24 lg:pt-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Order Confirmed</p>
                    <h1 className="mt-4 font-display text-hero uppercase text-white">
                        You're
                        <br />
                        all set.
                    </h1>
                </div>
            </section>

            {/* Confirmation */}
            <section className="bg-surface-100 py-24 lg:py-32">
                <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-crawfish-light">
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#E85D26"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>

                    <h2 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink-900 md:text-3xl">
                        Thanks, {customerName}.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-500">
                        Your order has been placed. We'll have it ready when you arrive. You should receive a
                        confirmation at <span className="font-medium text-ink-700">{state?.email || 'your email'}</span>{' '}
                        shortly.
                    </p>

                    <div className="mt-6 rounded-xl border border-surface-300 bg-white px-6 py-5 text-left shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-ink-400">Pickup Location</p>
                                <p className="mt-1 text-sm font-medium text-ink-900">20 Private Rd 442</p>
                                <p className="text-sm text-ink-500">Dayton, TX 77535</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs uppercase tracking-wider text-ink-400">Estimated Pickup</p>
                                <p className="mt-1 text-sm font-medium text-ink-900">20 - 30 minutes</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            to="/menu"
                            className="inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                        >
                            Order More
                        </Link>
                        <Link
                            to="/"
                            className="text-sm font-medium text-ink-500 underline decoration-surface-400 underline-offset-4 transition-colors hover:text-crawfish hover:decoration-crawfish"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessView
