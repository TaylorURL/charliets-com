import React from 'react'

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
        year: '2024',
        title: 'The Shack Opens',
        body: "Charlie T's Crawfish Shack opens at 20 Private Rd 442 in Dayton, Texas. A proper building with a proper kitchen, but the same newspaper on the tables, the same seasoning in the pot, and the same crawfish riding a dirt bike on the sign out front. The word got out fast."
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

/* ──────────────────────────────────────────────
   Sections
   ────────────────────────────────────────────── */

function HeroSection() {
    return (
        <section className="border-b border-surface-300 bg-ink-900 pb-16 pt-32 lg:pb-24 lg:pt-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                    <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Our Story</p>
                        <h1 className="mt-4 font-display text-hero uppercase text-white">
                            Who the hell
                            <br />
                            is Charlie T?
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                            The short version: a Southeast Texas kid from crawfish country who opened a boil shack in
                            Dayton because nobody else was going to do it right. The long version is below.
                        </p>
                    </div>
                    <div className="hidden shrink-0 lg:block">
                        <img
                            src="/logo.webp"
                            alt="Charlie T's Crawfish Shack"
                            className="h-64 drop-shadow-[0_0_60px_rgba(232,93,38,0.2)]"
                        />
                    </div>
                </div>
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
                            key={year}
                            className={`relative pb-14 ${index === TIMELINE_EVENTS.length - 1 ? 'pb-0' : ''}`}
                        >
                            <div className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-crawfish md:-left-[calc(3rem+5px)]" />
                            <span className="font-display text-sm uppercase tracking-wider text-crawfish/60">
                                {year}
                            </span>
                            <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-ink-900">{title}</h3>
                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500">{body}</p>
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

                <div className="grid gap-px bg-surface-300 md:grid-cols-3">
                    {VALUES.map(({ title, body }) => (
                        <div key={title} className="bg-white p-10">
                            <h3 className="font-display text-lg uppercase tracking-wide text-ink-900">{title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-ink-500">{body}</p>
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
                <div className="mx-auto mb-8 h-px w-12 bg-crawfish/20" />
                <blockquote className="font-display text-2xl uppercase leading-snug tracking-wide text-ink-900 md:text-4xl">
                    "People kept driving an hour to eat out of my trailer. At some point you gotta give 'em a building
                    with a roof and a bathroom."
                </blockquote>
                <p className="mt-8 text-sm uppercase tracking-[0.2em] text-crawfish/60">&mdash; Charlie T, Founder</p>
                <div className="mx-auto mt-8 h-px w-12 bg-crawfish/20" />
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
                <p className="mt-4 text-sm text-ink-500">Come taste it.</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="/menu"
                        className="inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                    >
                        See the Menu
                    </a>
                    <a
                        href="/contact"
                        className="text-sm font-medium text-ink-500 underline decoration-surface-400 underline-offset-4 transition-colors hover:text-crawfish hover:decoration-crawfish"
                    >
                        Find us &#8594;
                    </a>
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
            <TimelineSection />
            <ValuesSection />
            <PullQuoteSection />
            <VisitCTASection />
        </>
    )
}

export default AboutView
