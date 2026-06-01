import React from 'react'
import { Link } from 'react-router-dom'
import { ADDRESS, BUSINESS, PHONE } from '../../app/constants/site'

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const TIMELINE_EVENTS = [
    {
        year: 'Early Days',
        title: 'Southeast Texas',
        body: "Charlie grew up in the heart of crawfish country. By the time he could hold a pair of tongs, he was stirring roux and shucking corn for family boils every weekend. His grandmother's seasoning recipe is still the one we use."
    },
    {
        year: 'The Hustle',
        title: 'Backyard Boils',
        body: "Started running boils for anyone who'd ask. Birthdays, tailgates, church fundraisers, Fourth of July, random Saturdays. If you had a parking lot and a crowd, Charlie would show up with a pot. He never said no."
    },
    {
        year: 'The Grind',
        title: 'Kitchen Years',
        body: 'Worked kitchens across Southeast Texas to learn the business side. Hated the business side. Kept a notebook full of seasoning ratios, supplier contacts, and ideas for doing it his own way.'
    },
    {
        year: 'Pop-Ups',
        title: 'Word Gets Out',
        body: 'The backyard boils got too big for backyards. Charlie was boiling 500 pounds a weekend out of a trailer. People were driving 45 minutes for a plate. It was time to find a building.'
    },
    {
        year: BUSINESS.foundedYear.toString(),
        title: 'The Shack Opens',
        body: `Charlie T's Crawfish Shack opens at ${ADDRESS.street} in ${ADDRESS.city}, Texas. A proper building with a proper kitchen, but the same newspaper on the tables, the same seasoning in the pot, and the same crawfish riding a dirt bike on the sign out front. The word got out fast.`
    }
]

const VALUES = [
    {
        title: "We Don't Cut Corners",
        body: "Our crawfish come from farms we've visited, not from a distributor's catalog. Our seasoning is mixed in-house every morning. Our roux starts with a cold pan and patience. There are faster ways to do all of this. We don't use them."
    },
    {
        title: 'This Is a Gathering Place',
        body: "Crawfish boils are communal by nature. You can't eat them alone in a corner with headphones on. You're elbow-to-elbow, teaching a stranger how to peel, arguing about seasoning levels, sharing a pile of food with people you just met. That's the design, not a side effect."
    },
    {
        title: 'No Pretense',
        body: "We don't have a sommelier. The floors are concrete. The music is loud. Your shirt will get dirty. We're not trying to be a \"dining experience.\" We're trying to be the place you bring people when you want them to have a good time."
    }
]

const NUMBERS = [
    { value: '500+', label: 'Pounds we boil on a busy weekend' },
    { value: '14', label: 'Years Charlie has been boiling for crowds' },
    { value: '3', label: 'Generations using the same seasoning recipe' },
    { value: '0', label: 'Reservations taken. First come, first served.' }
]

const SOURCING = [
    {
        title: 'Crawfish',
        from: 'Texas & Louisiana farms',
        body: "We buy from farms in Hamshire, Winnie, and across the Louisiana line. We've shaken hands with the farmers. We know when the mud's right and when it isn't."
    },
    {
        title: 'Shrimp',
        from: 'Gulf of Mexico',
        body: 'Wild-caught Gulf shrimp out of Sabine Pass and Galveston Bay. Head-on, shell-on, the way they should arrive.'
    },
    {
        title: 'Bread',
        from: 'New Orleans',
        body: "Leidenheimer Baking Co. has been making French bread for po'boys since 1896. Nobody else comes close. The trucks come in twice a week."
    },
    {
        title: 'Seasoning',
        from: "Charlie's kitchen",
        body: 'Mixed every morning in-house. Salt, cayenne, paprika, garlic, lemon, and the part of the recipe that stays in the building.'
    }
]

/* ──────────────────────────────────────────────
   Sections
   ────────────────────────────────────────────── */

function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b border-surface-300 bg-ink-900 pb-16 pt-32 lg:pb-24 lg:pt-40">
            <div className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-crawfish/[0.05] blur-[120px]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                    <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Our Story</p>
                        <h1 className="mt-4 font-display text-hero uppercase text-white">
                            Who the hell
                            <br />
                            is Charlie T?
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
                            The short version: a Southeast Texas kid from crawfish country who opened a boil shack in
                            Dayton because nobody else was going to do it right. The long version is below.
                        </p>
                    </div>
                    <div className="flex shrink-0 justify-center lg:block">
                        <img
                            src="/logo.webp"
                            alt={BUSINESS.fullName}
                            className="h-40 drop-shadow-[0_0_60px_rgba(232,93,38,0.2)] lg:h-64"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function NumbersSection() {
    return (
        <section className="border-b border-surface-300 bg-surface-100 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <dl className="grid gap-px overflow-hidden rounded-xl bg-surface-300 sm:grid-cols-2 lg:grid-cols-4">
                    {NUMBERS.map(({ value, label }) => (
                        <div key={label} className="bg-white p-8 text-center">
                            <dt className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-tight text-crawfish">
                                {value}
                            </dt>
                            <dd className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                                {label}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

function TimelineSection() {
    return (
        <section className="bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">The Timeline</p>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                        From backyard boils
                        <br />
                        to the shack
                    </h2>
                </div>

                <div className="relative border-l border-surface-400 pl-8 md:pl-12">
                    {TIMELINE_EVENTS.map(({ year, title, body }, index) => (
                        <div
                            key={`${year}-${title}`}
                            className={`relative ${index === TIMELINE_EVENTS.length - 1 ? 'pb-0' : 'pb-14'}`}
                        >
                            <div
                                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-crawfish ring-4 ring-surface-100 md:-left-[calc(3rem+5px)]"
                                aria-hidden="true"
                            />
                            <span className="font-display text-xs uppercase tracking-[0.2em] text-crawfish/70">
                                {year}
                            </span>
                            <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-ink-900">{title}</h3>
                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ValuesSection() {
    return (
        <section className="border-t border-surface-300 bg-surface-200 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">How We Think</p>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                        Not a mission statement.
                        <br />
                        Just how it is.
                    </h2>
                </div>

                <div className="grid gap-px overflow-hidden rounded-xl bg-surface-300 md:grid-cols-3">
                    {VALUES.map(({ title, body }, index) => (
                        <div key={title} className="bg-white p-10">
                            <span className="font-display text-xs tracking-[0.2em] text-crawfish" aria-hidden="true">
                                0{index + 1}
                            </span>
                            <h3 className="mt-3 font-display text-lg uppercase tracking-wide text-ink-900">{title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-ink-600">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function SourcingSection() {
    return (
        <section className="border-t border-surface-300 bg-ink-900 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-14 grid gap-10 lg:grid-cols-2 lg:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">
                            Where it comes from
                        </p>
                        <h2 className="mt-4 font-display text-section uppercase text-white">
                            We know our
                            <br />
                            suppliers.
                        </h2>
                    </div>
                    <p className="max-w-md text-base leading-relaxed text-white/60">
                        We're a small shack in a small town. We don't have a procurement department. Charlie picks up
                        the phone, and we know the people on the other end.
                    </p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-xl bg-white/5 sm:grid-cols-2">
                    {SOURCING.map(({ title, from, body }) => (
                        <div key={title} className="bg-ink-900 p-8 lg:p-10">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="font-display text-lg uppercase tracking-wide text-white">{title}</h3>
                                <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    {from}
                                </span>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-white/60">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function PullQuoteSection() {
    return (
        <section className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
                <div className="mx-auto mb-8 h-px w-12 bg-crawfish/40" aria-hidden="true" />
                <blockquote className="font-display text-2xl uppercase leading-snug tracking-wide text-ink-900 md:text-4xl">
                    &ldquo;People kept driving an hour to eat out of my trailer. At some point you gotta give 'em a
                    building with a roof and a bathroom.&rdquo;
                </blockquote>
                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-crawfish/70">&mdash; Charlie T, Founder</p>
                <div className="mx-auto mt-8 h-px w-12 bg-crawfish/40" aria-hidden="true" />
            </div>
        </section>
    )
}

function VisitCTASection() {
    return (
        <section className="border-t border-surface-300 bg-surface-200 py-20">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <h2 className="font-display text-2xl uppercase tracking-wide text-ink-900 md:text-3xl">
                    Now you know the story.
                </h2>
                <p className="mt-4 text-sm text-ink-600">Come taste it.</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        to="/menu"
                        className="inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-crawfish-dark hover:shadow-[0_8px_30px_-8px_rgba(232,93,38,0.5)] active:scale-[0.97]"
                    >
                        See the Menu
                    </Link>
                    <Link
                        to="/contact"
                        className="text-sm font-medium text-ink-600 underline decoration-surface-400 underline-offset-4 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish"
                    >
                        Or call us at {PHONE.display} &rarr;
                    </Link>
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

function AboutView() {
    return (
        <>
            <HeroSection />
            <NumbersSection />
            <TimelineSection />
            <ValuesSection />
            <SourcingSection />
            <PullQuoteSection />
            <VisitCTASection />
        </>
    )
}

export default AboutView
