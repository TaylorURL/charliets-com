import React from 'react'

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const RITUAL_STEPS = [
    {
        number: '01',
        title: 'The Boil',
        body: 'Forty gallons of rolling water. Whole heads of garlic, halved lemons, corn, potatoes, sausage, and enough cayenne to make your eyes water from across the parking lot. We drop the sack and wait.'
    },
    {
        number: '02',
        title: 'The Pour',
        body: "When it's time, we kill the flame, dump the ice, and let it soak. Then we pour it all out across butcher paper in front of you. No plates. No silverware. This is how it's done."
    },
    {
        number: '03',
        title: 'The Peel',
        body: "Twist the tail. Pinch the end. Pull the meat. You'll figure it out. Or you won't, and the person next to you will teach you. That's the whole point."
    },
    {
        number: '04',
        title: 'Repeat',
        body: "You'll say you're full after the first three pounds. You'll order another two. Nobody leaves this table clean and nobody leaves hungry."
    }
]

const MENU_HIGHLIGHTS = [
    {
        name: 'Whole Boiled Crawfish',
        detail: 'Market price per pound. Corn, potatoes, sausage.',
        tag: 'THE MAIN EVENT'
    },
    {
        name: "Charlie's Gumbo",
        detail: "Dark roux, andouille, okra. The recipe doesn't leave this building.",
        tag: 'HOUSE RECIPE'
    },
    {
        name: 'Fried Catfish Plate',
        detail: 'Cornmeal-crusted, served with slaw and hushpuppies.',
        tag: 'CLASSIC'
    },
    {
        name: 'Boudin Balls',
        detail: 'Crispy outside, Cajun pork and rice inside. Six per order.',
        tag: 'APPETIZER'
    },
    {
        name: "Shrimp Po'Boy",
        detail: 'Gulf shrimp, dressed, on Leidenheimer bread. 12 inches.',
        tag: 'SANDWICH'
    }
]

/* ──────────────────────────────────────────────
   Hero
   ────────────────────────────────────────────── */

function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-end overflow-hidden bg-ink-900 pb-20 pt-32 lg:items-center lg:pb-0 lg:pt-0">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crawfish/8 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16">
                    <div className="flex-1">
                        <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">
                            Dayton, Texas
                        </p>

                        <h1 className="mt-6 animate-slide-up font-display text-hero uppercase text-white">
                            Peel.
                            <br />
                            Eat.
                            <br />
                            Repeat.
                        </h1>

                        <div
                            className="mt-10 flex animate-slide-up flex-col gap-4 sm:flex-row sm:items-center"
                            style={{ animationDelay: '0.2s' }}
                        >
                            <a
                                href="#the-boil"
                                className="group inline-flex items-center gap-3 bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-colors hover:bg-crawfish-dark"
                            >
                                See How We Do It
                                <span className="inline-block transition-transform group-hover:translate-y-0.5">
                                    &#8595;
                                </span>
                            </a>
                            <a
                                href="tel:+15551234567"
                                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-crawfish"
                            >
                                Or just call us &mdash; (555) 123-4567
                            </a>
                        </div>
                    </div>

                    <div className="hidden animate-fade-in lg:block" style={{ animationDelay: '0.4s' }}>
                        <img
                            src="/logo.webp"
                            alt="Charlie T's Crawfish Shack"
                            className="h-80 drop-shadow-[0_0_60px_rgba(232,93,38,0.2)]"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
                <div className="h-12 w-px animate-slow-pulse bg-gradient-to-b from-transparent via-crawfish/60 to-transparent" />
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   The Ritual (The Boil)
   ────────────────────────────────────────────── */

function RitualSection() {
    return (
        <section id="the-boil" className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">The Ritual</p>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                        This ain't dinner.
                        <br />
                        It's an event.
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-ink-500">
                        A crawfish boil is loud, messy, and communal. You don't order for yourself &mdash; you order for
                        the table. There's no wrong way to eat, but there is a way we do things around here.
                    </p>
                </div>

                <div className="mt-16 grid gap-px bg-surface-300 md:grid-cols-2 lg:grid-cols-4">
                    {RITUAL_STEPS.map(({ number, title, body }) => (
                        <div key={number} className="bg-white p-8 transition-colors hover:bg-crawfish-light/40">
                            <span className="font-display text-4xl text-crawfish/15">{number}</span>
                            <h3 className="mt-4 font-display text-lg uppercase tracking-wide text-ink-900">{title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-ink-500">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Menu Highlights
   ────────────────────────────────────────────── */

function MenuSection() {
    return (
        <section className="border-t border-surface-300 bg-surface-200 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Off the Menu</p>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">What's worth ordering</h2>
                    </div>
                    <a
                        href="/menu"
                        className="text-sm font-medium text-ink-500 underline decoration-surface-400 underline-offset-4 transition-colors hover:text-crawfish hover:decoration-crawfish"
                    >
                        See the full menu &#8594;
                    </a>
                </div>

                <div className="mt-14 divide-y divide-surface-300">
                    {MENU_HIGHLIGHTS.map(({ name, detail, tag }) => (
                        <div
                            key={name}
                            className="group flex flex-col gap-2 py-7 transition-colors md:flex-row md:items-center md:gap-8"
                        >
                            <span className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-crawfish/50">
                                {tag}
                            </span>
                            <h3 className="font-display text-xl uppercase tracking-wide text-ink-900 transition-colors group-hover:text-crawfish md:text-2xl">
                                {name}
                            </h3>
                            <p className="text-sm text-ink-500 md:ml-auto md:max-w-xs md:text-right">{detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   The Legend (About)
   ────────────────────────────────────────────── */

function LegendSection() {
    return (
        <section id="the-legend" className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
                <div className="lg:col-span-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">The Legend</p>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                        Who the hell is Charlie T?
                    </h2>
                </div>

                <div className="space-y-6 text-base leading-relaxed text-ink-500 lg:col-span-7">
                    <p>
                        Charlie grew up in Southeast Texas, where crawfish boils aren't a weekend plan &mdash; they're a
                        way of life. He learned to boil from his family, who learned from theirs, going back to a point
                        where nobody wrote anything down because everybody just knew.
                    </p>
                    <p>
                        What started as backyard boils and word-of-mouth turned into something bigger. A proper shack on
                        Private Road 442 in Dayton, Texas. Not a franchise. Not a "Cajun-inspired concept." A real
                        crawfish shack with newspaper on the tables, seasoning under your fingernails, and cold beer in
                        a koozie.
                    </p>
                    <p className="text-ink-700">
                        Charlie T's opened in 2024. The word got out fast. It hasn't really slowed down.
                    </p>
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Marquee
   ────────────────────────────────────────────── */

function MarqueeSection() {
    return (
        <section className="overflow-hidden border-y border-surface-300 bg-surface-200 py-10">
            <div className="flex whitespace-nowrap">
                {Array.from({ length: 3 }).map((_, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="flex shrink-0 animate-[scroll_20s_linear_infinite] items-center gap-8 pr-8"
                    >
                        {[
                            'BOILED FRESH DAILY',
                            'SEASONING HEAVY',
                            'COLD BEER ON TAP',
                            'NO RESERVATIONS',
                            'COME AS YOU ARE',
                            'DAYTON TEXAS'
                        ].map((phrase) => (
                            <React.Fragment key={`${groupIndex}-${phrase}`}>
                                <span className="font-display text-2xl uppercase tracking-wider text-surface-400 md:text-3xl">
                                    {phrase}
                                </span>
                                <span className="text-crawfish/20">&#9670;</span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Find Us (Location / CTA)
   ────────────────────────────────────────────── */

function FindUsSection() {
    return (
        <section id="find-us" className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Find the Shack</p>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            We don't deliver.
                            <br />
                            Come sit down.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500">
                            We're off Private Road 442 in Dayton. You'll smell us before you see us. Gravel lot, plenty
                            of parking, and a patio if you want to eat outside and let the whole county know what you're
                            having.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="https://maps.google.com/?q=20+Private+Rd+442+Dayton+TX+77535"
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
                                (555) 123-4567
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center rounded-xl border border-surface-300 bg-white p-12 shadow-sm">
                        <div className="text-center">
                            <p className="font-display text-lg uppercase tracking-wider text-ink-900">
                                20 Private Rd 442
                            </p>
                            <p className="mt-1 text-sm text-ink-500">Dayton, TX 77535</p>
                            <div className="mx-auto my-6 h-px w-12 bg-crawfish/20" />
                            <div className="space-y-1 text-sm text-ink-500">
                                <p>Tue - Thu: 11a - 9p</p>
                                <p>Fri - Sat: 11a - 10p</p>
                                <p>Sun: 11a - 8p</p>
                                <p className="text-ink-400">Mon: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Home
   ────────────────────────────────────────────── */

function HomeView() {
    return (
        <>
            <HeroSection />
            <RitualSection />
            <MenuSection />
            <MarqueeSection />
            <LegendSection />
            <FindUsSection />
        </>
    )
}

export default HomeView
