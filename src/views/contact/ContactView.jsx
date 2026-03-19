import React, { useCallback, useState } from 'react'

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const HOURS = [
    { day: 'Tuesday', time: '11:00 AM - 9:00 PM' },
    { day: 'Wednesday', time: '11:00 AM - 9:00 PM' },
    { day: 'Thursday', time: '11:00 AM - 9:00 PM' },
    { day: 'Friday', time: '11:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 8:00 PM' },
    { day: 'Monday', time: 'Closed' }
]

const FAQ_ITEMS = [
    {
        question: 'Do you take reservations?',
        answer: "No. First come, first served. The wait is usually worth it. If you're coming with more than 10 people, call ahead so we can push some tables together."
    },
    {
        question: 'Is crawfish available year-round?',
        answer: "Crawfish season runs roughly from January through June. Outside of season, we still serve everything else on the menu. The gumbo doesn't take summers off."
    },
    {
        question: 'Do you cater?',
        answer: "Yes. We'll bring the pot, the propane, and the crawfish to your location. Minimum 50 pounds. Call us at least two weeks in advance. We'll handle everything except the paper towels."
    },
    {
        question: 'Is there outdoor seating?',
        answer: "We have a patio out back with picnic tables. It's covered but not enclosed. It's where most of the boils happen when the weather cooperates."
    },
    {
        question: 'Do you have a kids menu?',
        answer: 'No separate menu, but we serve corn dogs, grilled cheese, and chicken tenders for kids under 12. $6 with a side and a drink.'
    },
    {
        question: 'Can I bring my own beer?',
        answer: 'No. We have plenty. See the drinks section of the menu.'
    }
]

const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=20+Private+Rd+442+Dayton+TX+77535'

/* ──────────────────────────────────────────────
   Components
   ────────────────────────────────────────────── */

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

    return (
        <div className="border-b border-surface-300">
            <button
                onClick={toggle}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-crawfish"
                aria-expanded={isOpen}
            >
                <span className="pr-4 font-display text-base uppercase tracking-wide text-ink-900">{question}</span>
                <span className={`shrink-0 text-lg text-crawfish transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            {isOpen && (
                <div className="pb-6">
                    <p className="max-w-2xl text-sm leading-relaxed text-ink-500">{answer}</p>
                </div>
            )}
        </div>
    )
}

/* ──────────────────────────────────────────────
   Sections
   ────────────────────────────────────────────── */

function HeroSection() {
    return (
        <section className="border-b border-surface-300 bg-ink-900 pb-16 pt-32 lg:pb-24 lg:pt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Find Us</p>
                <h1 className="mt-4 font-display text-hero uppercase text-white">
                    Come
                    <br />
                    hungry.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                    We're at 20 Private Rd 442 in Dayton, Texas. You'll smell us before you see us. Plenty of parking, a
                    patio out back, and a line that moves fast.
                </p>
            </div>
        </section>
    )
}

function LocationSection() {
    return (
        <section className="bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Location</p>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">The Shack</h2>

                        <address className="mt-8 space-y-4 not-italic">
                            <div>
                                <p className="text-sm uppercase tracking-wider text-ink-400">Address</p>
                                <p className="mt-1 text-lg text-ink-900">20 Private Rd 442</p>
                                <p className="text-lg text-ink-900">Dayton, TX 77535</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-wider text-ink-400">Phone</p>
                                <a
                                    href="tel:+15551234567"
                                    className="mt-1 block text-lg text-ink-900 transition-colors hover:text-crawfish"
                                >
                                    (555) 123-4567
                                </a>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-wider text-ink-400">Email</p>
                                <a
                                    href="mailto:eat@charliets.com"
                                    className="mt-1 block text-lg text-ink-900 transition-colors hover:text-crawfish"
                                >
                                    eat@charliets.com
                                </a>
                            </div>
                        </address>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href={GOOGLE_MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                            >
                                Get Directions
                            </a>
                            <a
                                href="tel:+15551234567"
                                className="inline-flex items-center justify-center rounded-lg border border-surface-400 px-8 py-4 text-sm font-medium tracking-wide text-ink-600 transition-colors hover:border-crawfish hover:text-crawfish"
                            >
                                Call Ahead
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Hours</p>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">When we're open</h2>

                        <dl className="mt-8 divide-y divide-surface-300">
                            {HOURS.map(({ day, time }) => {
                                const isClosed = time === 'Closed'
                                return (
                                    <div key={day} className="flex items-center justify-between py-4">
                                        <dt className={`text-sm ${isClosed ? 'text-ink-400' : 'text-ink-600'}`}>
                                            {day}
                                        </dt>
                                        <dd
                                            className={`text-sm font-medium ${isClosed ? 'text-ink-400' : 'text-ink-900'}`}
                                        >
                                            {time}
                                        </dd>
                                    </div>
                                )
                            })}
                        </dl>

                        <p className="mt-6 text-xs text-ink-400">
                            * Kitchen closes 30 minutes before close. Last boil order 45 minutes before close.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function MapPlaceholderSection() {
    return (
        <section className="border-y border-surface-300">
            <div className="flex min-h-[400px] items-center justify-center bg-surface-200">
                <div className="text-center">
                    <p className="font-display text-xl uppercase tracking-wider text-ink-300">Map</p>
                    <p className="mt-2 text-sm text-ink-400">20 Private Rd 442, Dayton, TX 77535</p>
                    <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm text-crawfish underline decoration-crawfish/30 underline-offset-4 transition-colors hover:decoration-crawfish"
                    >
                        Open in Google Maps &#8594;
                    </a>
                </div>
            </div>
        </section>
    )
}

function ParkingSection() {
    return (
        <section className="bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
                <div className="lg:col-span-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Getting Here</p>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                        Parking &
                        <br />
                        directions
                    </h2>
                </div>

                <div className="space-y-6 text-base leading-relaxed text-ink-500 lg:col-span-7">
                    <p>
                        We're at 20 Private Rd 442 in Dayton, just off the highway. If you're coming from Houston, it's
                        about 45 minutes east on US-90. Look for the sign with the crawfish on a dirt bike. You can't
                        miss it.
                    </p>
                    <p>
                        <span className="text-ink-700">Parking lot</span> is gravel, right out front. Plenty of space.
                        Pull in, park, walk up. It's not complicated.
                    </p>
                    <p>
                        <span className="text-ink-700">Big trucks and trailers</span> &mdash; you're in Dayton, we've
                        got room. Pull around to the side lot if you need extra space.
                    </p>
                    <p>
                        <span className="text-ink-700">The patio</span> is out back. Covered, picnic tables, string
                        lights. Where most of the boils happen when the weather isn't trying to kill you.
                    </p>
                </div>
            </div>
        </section>
    )
}

function FAQSection() {
    return (
        <section className="border-t border-surface-300 bg-surface-200 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">FAQ</p>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">Before you ask</h2>
                </div>

                <div className="max-w-3xl">
                    {FAQ_ITEMS.map(({ question, answer }) => (
                        <FAQItem key={question} question={question} answer={answer} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CateringCTASection() {
    return (
        <section className="border-t border-surface-300 bg-surface-100 py-20">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <h2 className="font-display text-2xl uppercase tracking-wide text-ink-900 md:text-3xl">
                    Need us to bring the boil to you?
                </h2>
                <p className="mt-4 text-sm text-ink-500">
                    We cater events of 50 people or more. We bring everything: crawfish, seasoning, the pots, the
                    propane, the paper towels. You just provide the people and the parking lot.
                </p>
                <a
                    href="tel:+15551234567"
                    className="mt-8 inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                >
                    Call to Book Catering
                </a>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

function ContactView() {
    return (
        <>
            <HeroSection />
            <LocationSection />
            <MapPlaceholderSection />
            <ParkingSection />
            <FAQSection />
            <CateringCTASection />
        </>
    )
}

export default ContactView
