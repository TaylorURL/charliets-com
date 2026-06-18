import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ADDRESS, PHONE } from '../../app/constants/site'
import Button from '../../app/components/ui/Button'
import Eyebrow from '../../app/components/ui/Eyebrow'

const PICKUP_LABELS = {
    asap: '20 – 30 minutes',
    '45min': 'About 45 minutes',
    '1hr': 'About 1 hour'
}

function SuccessView() {
    const { state } = useLocation()
    const customerName = state?.customerName?.trim() || 'there'
    const pickupLabel = PICKUP_LABELS[state?.pickupTime] || '20 – 30 minutes'

    return (
        <>
            <section className="relative overflow-hidden border-b-2 border-ink-900 bg-ink-900 pb-16 pt-32 lg:pb-24 lg:pt-40">
                <div className="mud-texture pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                    <Eyebrow>Order Confirmed — Checkered Flag</Eyebrow>
                    <h1 className="mt-4 font-display text-hero uppercase text-white">
                        You're
                        <br />
                        all set.
                    </h1>
                </div>
            </section>

            <section className="bg-surface-100 py-24 lg:py-32">
                <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
                    <div className="number-plate mx-auto flex h-20 w-20 -rotate-3 items-center justify-center rounded-xl">
                        <svg
                            width="38"
                            height="38"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#16110B"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>

                    <h2 className="mt-8 font-display text-2xl uppercase tracking-wide text-ink-900 md:text-3xl">
                        Thanks, {customerName}.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-600">
                        Your order has been placed. We'll have it ready when you arrive. You should receive a
                        confirmation at <span className="font-medium text-ink-800">{state?.email || 'your email'}</span>{' '}
                        shortly.
                    </p>

                    <div className="mt-8 grid gap-px overflow-hidden rounded-xl border-2 border-ink-900 bg-ink-900 text-left shadow-[6px_6px_0_0_rgba(22,17,11,0.9)] sm:grid-cols-2">
                        <div className="bg-surface-50 p-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-400">
                                Pickup at
                            </p>
                            <p className="mt-2 font-display text-sm uppercase tracking-wide text-ink-900">
                                {ADDRESS.street}
                            </p>
                            <p className="text-sm text-ink-600">
                                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                            </p>
                            <a
                                href={ADDRESS.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-crawfish underline decoration-crawfish/30 underline-offset-2 transition-colors duration-200 hover:decoration-crawfish"
                            >
                                Get directions <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="bg-surface-50 p-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-400">
                                Estimated ready
                            </p>
                            <p className="mt-2 font-display text-sm uppercase tracking-wide text-ink-900">
                                {pickupLabel}
                            </p>
                            <a
                                href={PHONE.href}
                                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-crawfish underline decoration-crawfish/30 underline-offset-2 transition-colors duration-200 hover:decoration-crawfish"
                            >
                                {PHONE.display}
                            </a>
                        </div>
                    </div>

                    {state?.notes ? (
                        <div className="mt-4 rounded-xl border-2 border-ink-900 bg-surface-50 px-5 py-4 text-left">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-400">
                                Special instructions
                            </p>
                            <p className="mt-2 text-sm text-ink-700">{state.notes}</p>
                        </div>
                    ) : null}

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button to="/menu" size="lg">
                            Order more
                        </Button>
                        <Link
                            to="/"
                            className="text-sm font-medium text-ink-600 underline decoration-surface-400 underline-offset-4 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish"
                        >
                            Back to home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessView
