import React from 'react'
import { Link } from 'react-router-dom'
import { ADDRESS, BUSINESS, CATERING, HOURS_SUMMARY, PHONE } from '../../app/constants/site'
import Button from '../../app/components/ui/Button'
import Eyebrow from '../../app/components/ui/Eyebrow'
import NumberPlate from '../../app/components/ui/NumberPlate'
import Marquee from '../../app/components/ui/Marquee'
import StarRating from '../../app/components/ui/StarRating'
import CrossedFlags from '../../app/components/ui/CrossedFlags'

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const START_BANNER = [
    'Heavy Seasoning',
    'No Reservations',
    'Live Boils',
    '500 lbs a Weekend',
    'Closed Mondays',
    'Dayton, Texas',
]

const SIGNATURE_DISHES = [
    {
        name: 'Whole Boiled Crawfish',
        price: 'Market / lb',
        category: 'The Boil',
        note: '3 lb minimum. Seasoning heavy. Corn, potatoes, sausage, garlic included.',
    },
    {
        name: 'The Charlie T Combo',
        price: '$45',
        category: 'The Boil',
        note: '2 lbs crawfish, 1 lb shrimp, 1 lb snow crab. Feeds two if you behave.',
    },
    {
        name: "Charlie's Gumbo",
        price: '$15 / $19',
        category: 'Plates',
        note: 'Dark roux, andouille, okra, rice. The recipe stays in this building.',
    },
    {
        name: 'Crawfish Etouffee',
        price: '$19',
        category: 'Plates',
        note: 'Tail meat in a blonde roux over white rice.',
    },
    {
        name: "Shrimp Po'Boy",
        price: '$15',
        category: 'Sandwiches',
        note: 'Gulf shrimp, fried, dressed. Leidenheimer bread.',
    },
    {
        name: 'Boudin Balls',
        price: '$12',
        category: 'Starters',
        note: 'Cajun pork and rice, crispy fried. Six per order with remoulade.',
    },
]

const HOW_IT_WORKS = [
    {
        step: '01',
        title: 'Pick your pot',
        body: 'Crawfish by the pound, shrimp, snow crab, blue crab — or get the combo and stop deciding.',
    },
    {
        step: '02',
        title: 'We boil to order',
        body: 'Live, into the pot, into our house seasoning. The roll lasts long enough to do it right.',
    },
    {
        step: '03',
        title: 'Dump and eat',
        body: 'Poured straight on the table with corn, potatoes, sausage, garlic. Sleeves up, phones down.',
    },
]

const TESTIMONIALS = [
    {
        quote: 'The seasoning is on another level. Drove 45 minutes from Houston and it was worth every mile. The crawfish were hot, fresh, and the bag of seasoning butter on the side is a war crime in the best way.',
        author: 'Marissa T.',
        location: 'Houston, TX',
        rating: 5,
    },
    {
        quote: "Best gumbo I've had outside of Louisiana. The roux is jet black, the andouille is smoky, and they don't skimp on the okra. Charlie knows what he's doing.",
        author: 'Devon R.',
        location: 'Beaumont, TX',
        rating: 5,
    },
    {
        quote: 'Brought the whole crew for my birthday. They pushed three tables together, dumped 15 pounds on us, and we stayed until close. No reservations, no fuss, just food and a good time.',
        author: 'Stephanie K.',
        location: 'Dayton, TX',
        rating: 5,
    },
    {
        quote: "The boudin balls. That's it, that's the review. Order four. Thank me later.",
        author: 'Cal B.',
        location: 'Baytown, TX',
        rating: 5,
    },
]

const STATS = [
    { value: '500+', label: 'Pounds boiled / weekend' },
    { value: '45 min', label: 'From Houston, US-90 east' },
    { value: '2024', label: 'Opened in Dayton' },
    { value: '6 days', label: 'Closed Mondays only' },
]

const WHAT_WE_DO = [
    {
        title: 'Boils',
        text: 'Crawfish, shrimp, snow crab, blue crab. Whole pot, heavy seasoning, served with fixins.',
    },
    {
        title: 'Plates & Sandwiches',
        text: "Fried catfish, etouffee, gumbo, po'boys. Full meals with two sides.",
    },
    {
        title: 'Starters & Sides',
        text: 'Boudin balls, fried pickles, hushpuppies, dirty rice, mac and cheese.',
    },
]

const CATERING_INCLUDES = [
    'Live boils on-site (no warmers, no buffet line)',
    'Crawfish, shrimp, crab, and the full plate menu',
    'Propane burners, pots, tables, paper liners',
    'Sausage, corn, potatoes, garlic — the works',
    'Friendly crew that has done this 1,000 times',
]

/* ──────────────────────────────────────────────
   Hero — the start gate
   ────────────────────────────────────────────── */

function HeroSection() {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900">
            {/* Layered dirt + heat */}
            <div className="pointer-events-none absolute inset-0">
                <div className="mud-texture absolute inset-0" />
                <div className="absolute -right-40 top-0 h-[900px] w-[900px] rounded-full bg-crawfish/[0.06] blur-[100px]" />
                <div className="absolute -left-20 bottom-0 h-[600px] w-[600px] rounded-full bg-racing/[0.05] blur-[120px]" />
                {/* Boil-pot steam */}
                <div className="absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-white/[0.06] blur-2xl animate-steam-rise" />
                <div
                    className="absolute bottom-0 right-1/3 h-32 w-32 rounded-full bg-white/[0.05] blur-2xl animate-steam-rise"
                    style={{ animationDelay: '1.6s' }}
                />
            </div>

            {/* Start-gate posts */}
            <div
                className="hazard-stripes pointer-events-none absolute left-0 top-0 hidden h-full w-3 text-caution/70 lg:block"
                aria-hidden="true"
            />
            <div
                className="hazard-stripes pointer-events-none absolute right-0 top-0 hidden h-full w-3 text-caution/70 lg:block"
                aria-hidden="true"
            />
            {/* Finish line along the base */}
            <div
                className="checker-band pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-[length:18px_18px] text-white/15"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
                <div className="flex animate-fade-in items-center gap-4">
                    <CrossedFlags className="h-9 w-9 text-white/80" />
                    <Eyebrow>
                        {ADDRESS.city}, {ADDRESS.state} · Est. {BUSINESS.foundedYear}
                    </Eyebrow>
                </div>

                {/* Headline */}
                <h1 className="mt-8 animate-slide-up font-display uppercase leading-[0.82] text-white">
                    <span className="block text-[clamp(3.2rem,13vw,11rem)]">{BUSINESS.name}</span>
                    <span className="mt-1 flex items-baseline gap-4">
                        <span className="block text-[clamp(2rem,7vw,5.5rem)] text-crawfish">Crawfish Shack</span>
                        <span className="hidden font-paint text-2xl normal-case tracking-normal text-caution sm:block">
                            on the gas
                        </span>
                    </span>
                </h1>

                {/* Sub content */}
                <div
                    className="mt-12 flex animate-slide-up flex-col gap-10 lg:mt-16 lg:flex-row lg:items-end lg:justify-between"
                    style={{ animationDelay: '0.15s' }}
                >
                    <div className="max-w-md">
                        <p className="text-base leading-relaxed text-white/55">
                            Boiled crawfish, shrimp, and crab. House seasoning. Corn, potatoes, sausage, garlic. Poured
                            out on the table the way it's supposed to be. Dayton, TX.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button to="/menu">Drop the Gate — View Menu</Button>
                            <Button href={PHONE.href} variant="outline-dark">
                                Find Us
                            </Button>
                        </div>
                    </div>

                    <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.3s' }}>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                                Location
                            </p>
                            <div className="mt-2 space-y-0.5 text-sm text-white/60">
                                <p>{ADDRESS.street}</p>
                                <p>
                                    {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">Hours</p>
                            <div className="mt-2 max-w-[260px] text-sm text-white/60">
                                <p>{HOURS_SUMMARY}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-20 flex animate-fade-in items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 lg:mt-24"
                    style={{ animationDelay: '0.6s' }}
                >
                    <span>Scroll</span>
                    <span className="h-px w-8 bg-white/15" aria-hidden="true" />
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Start-line banner
   ────────────────────────────────────────────── */

function StartBannerSection() {
    return (
        <div className="border-y-2 border-ink-900 bg-caution py-3 text-ink-900">
            <Marquee items={START_BANNER} />
        </div>
    )
}

/* ──────────────────────────────────────────────
   What We Do
   ────────────────────────────────────────────── */

function WhatWeDoSection() {
    return (
        <section className="bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Eyebrow>What We Do</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            Boil. Serve.
                            <br />
                            That's it.
                        </h2>
                    </div>

                    <div className="space-y-8 lg:col-span-7">
                        <p className="text-lg leading-relaxed text-ink-600">
                            We boil crawfish, shrimp, and crab with our house seasoning and serve it the only way that
                            makes sense &mdash; poured out on the table with corn, potatoes, sausage, and garlic.
                        </p>
                        <div className="grid gap-px overflow-hidden rounded-lg border-2 border-ink-900 bg-ink-900 sm:grid-cols-3">
                            {WHAT_WE_DO.map(({ title, text }) => (
                                <div
                                    key={title}
                                    className="bg-surface-50 p-6 transition-colors duration-200 hover:bg-crawfish-light"
                                >
                                    <h3 className="font-display text-base uppercase tracking-wide text-ink-900">
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   How It Works — number-plate stages
   ────────────────────────────────────────────── */

function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden border-t-2 border-ink-900 bg-ink-900 py-24 lg:py-32">
            <div className="mud-texture pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 max-w-2xl">
                    <Eyebrow>The Boil</Eyebrow>
                    <h2 className="mt-4 font-display text-section uppercase text-white">
                        Three gears.
                        <br />
                        No surprises.
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {HOW_IT_WORKS.map(({ step, title, body }) => (
                        <div
                            key={step}
                            className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-crawfish/40 hover:bg-white/[0.05] lg:p-10"
                        >
                            <NumberPlate>{step}</NumberPlate>
                            <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-white">{title}</h3>
                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">{body}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 max-w-2xl text-sm text-white/45">
                    No reservations. First come, first served. Show up hungry, leave covered in seasoning.
                </p>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Menu Highlights
   ────────────────────────────────────────────── */

function MenuSection() {
    return (
        <section className="bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <Eyebrow>The Menu</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">Worth ordering</h2>
                    </div>
                    <Link
                        to="/menu"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-ink-600 underline decoration-surface-400 underline-offset-4 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish"
                    >
                        Full menu
                        <span
                            className="transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                        >
                            &rarr;
                        </span>
                    </Link>
                </div>

                <div className="mt-14 grid gap-px overflow-hidden rounded-xl border-2 border-ink-900 bg-ink-900 sm:grid-cols-2 lg:grid-cols-3">
                    {SIGNATURE_DISHES.map(({ name, price, category, note }) => (
                        <div
                            key={name}
                            className="group flex flex-col justify-between bg-surface-50 p-6 transition-colors duration-200 hover:bg-crawfish-light lg:p-8"
                        >
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-crawfish">
                                    {category}
                                </p>
                                <h3 className="mt-3 font-display text-lg uppercase tracking-wide text-ink-900 transition-colors duration-200 group-hover:text-crawfish-dark">
                                    {name}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink-600">{note}</p>
                            </div>
                            <p className="mt-6 font-display text-xl text-crawfish">{price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <Button to="/menu" variant="dark" size="lg">
                        See the full menu
                    </Button>
                    <p className="text-sm text-ink-500">
                        Or call us at{' '}
                        <a
                            href={PHONE.href}
                            className="font-medium text-ink-800 underline decoration-surface-400 underline-offset-4 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish"
                        >
                            {PHONE.display}
                        </a>{' '}
                        for large party orders.
                    </p>
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Stats Strip
   ────────────────────────────────────────────── */

function StatsSection() {
    return (
        <section className="border-y-2 border-ink-900 bg-racing">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <dl className="grid gap-px bg-ink-900/20 sm:grid-cols-2 lg:grid-cols-4">
                    {STATS.map(({ value, label }) => (
                        <div key={label} className="bg-racing px-8 py-12 text-center">
                            <dt className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none text-caution">
                                {value}
                            </dt>
                            <dd className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                                {label}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Testimonials
   ────────────────────────────────────────────── */

function TestimonialsSection() {
    return (
        <section className="bg-surface-200 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-xl">
                        <Eyebrow>Word of Mouth</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            People drive an hour
                            <br />
                            for this.
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <StarRating count={5} />
                        <p className="text-sm font-medium text-ink-700">4.9 average from 600+ reviews</p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {TESTIMONIALS.map(({ quote, author, location, rating }, index) => (
                        <figure
                            key={author}
                            className={`flex h-full flex-col justify-between rounded-xl border-2 border-ink-900 bg-surface-50 p-6 shadow-[5px_5px_0_0_rgba(22,17,11,0.9)] transition-transform duration-300 hover:-translate-y-1 lg:p-7 ${
                                index === 1 ? 'lg:translate-y-2' : index === 2 ? 'lg:-translate-y-2' : ''
                            }`}
                        >
                            <StarRating count={rating} />
                            <blockquote className="mt-5 text-sm leading-relaxed text-ink-700">
                                &ldquo;{quote}&rdquo;
                            </blockquote>
                            <figcaption className="mt-6 border-t border-surface-300 pt-4">
                                <p className="font-display text-sm uppercase tracking-wider text-ink-900">{author}</p>
                                <p className="mt-1 text-xs text-ink-500">{location}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   About Teaser
   ────────────────────────────────────────────── */

function AboutSection() {
    return (
        <section className="bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <Eyebrow>About</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            Started in
                            <br />a backyard.
                        </h2>
                        <Link
                            to="/about"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-600 underline decoration-surface-400 underline-offset-4 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish"
                        >
                            Read the full story
                            <span
                                className="transition-transform duration-200 group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                &rarr;
                            </span>
                        </Link>
                    </div>
                    <div className="space-y-6 text-base leading-relaxed text-ink-600 lg:col-span-7">
                        <p>
                            Charlie learned to boil from his family in Southeast Texas. What started as weekend cookouts
                            turned into 500-pound weekend boils out of a trailer. People kept showing up. He found a
                            building.
                        </p>
                        <p>
                            Charlie T's opened in 2024 at {ADDRESS.street} in {ADDRESS.city}. Same seasoning, same
                            recipe, proper kitchen. The line started on day one.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Catering — hazard-striped pit crew
   ────────────────────────────────────────────── */

function CateringSection() {
    return (
        <section className="relative overflow-hidden border-t-2 border-ink-900 bg-ink-900 py-24 lg:py-32">
            <div className="mud-texture pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-crawfish/[0.07] blur-[120px]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <Eyebrow>Catering</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-white">
                            We'll bring
                            <br />
                            the boil to you.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                            Birthdays, tailgates, company outings, weddings, wakes &mdash; if there's a parking lot and
                            a crowd, we'll show up with a pot. We bring the propane, the seasoning, the burners, the
                            paper towels. You bring the people.
                        </p>

                        <dl className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
                            <div className="bg-ink-900 px-5 py-5">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caution">
                                    Minimum
                                </dt>
                                <dd className="mt-1 font-display text-xl text-white">{CATERING.minHeadcount} people</dd>
                            </div>
                            <div className="bg-ink-900 px-5 py-5">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caution">
                                    Lead time
                                </dt>
                                <dd className="mt-1 font-display text-xl text-white">{CATERING.minLeadTimeDays} days</dd>
                            </div>
                            <div className="bg-ink-900 px-5 py-5">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caution">
                                    Radius
                                </dt>
                                <dd className="mt-1 font-display text-xl text-white">
                                    {CATERING.deliveryRadiusMiles} miles
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <Button href={PHONE.href}>Call to Book Catering</Button>
                            <Button to="/contact#catering" variant="outline-dark">
                                Details &amp; FAQ
                            </Button>
                        </div>
                    </div>

                    <aside className="lg:col-span-5">
                        <div className="overflow-hidden rounded-2xl border-2 border-caution/30 bg-white/[0.02]">
                            <div className="hazard-stripes h-2.5 w-full text-caution/70" aria-hidden="true" />
                            <div className="p-8 lg:p-10">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-caution">
                                    What you get
                                </p>
                                <ul className="mt-6 space-y-4 text-sm text-white/80">
                                    {CATERING_INCLUDES.map((line) => (
                                        <li key={line} className="flex gap-3">
                                            <span
                                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-crawfish"
                                                aria-hidden="true"
                                            />
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

/* ──────────────────────────────────────────────
   Location
   ────────────────────────────────────────────── */

function LocationSection() {
    return (
        <section className="bg-surface-200 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <Eyebrow>Location</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            {ADDRESS.city}, {ADDRESS.state}
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600">
                            Off Private Road 442. 45 minutes east of Houston on US-90. Gravel lot, covered patio, plenty
                            of parking. You'll smell us before you see us.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button href={ADDRESS.mapsUrl} target="_blank" rel="noopener noreferrer" size="lg">
                                Get Directions
                            </Button>
                            <Button href={PHONE.href} variant="outline-light" size="lg">
                                {PHONE.display}
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border-2 border-ink-900 bg-ink-900">
                        <div className="bg-surface-50 p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">Address</p>
                            <p className="mt-2 font-display text-sm uppercase tracking-wide text-ink-900">
                                {ADDRESS.street}
                            </p>
                            <p className="text-sm text-ink-600">
                                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                            </p>
                        </div>
                        <div className="bg-surface-50 p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">Phone</p>
                            <a
                                href={PHONE.href}
                                className="mt-2 block font-display text-sm uppercase tracking-wide text-ink-900 transition-colors duration-200 hover:text-crawfish"
                            >
                                {PHONE.display}
                            </a>
                        </div>
                        <div className="bg-surface-50 p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                                Open today
                            </p>
                            <p className="mt-2 text-sm text-ink-700">{HOURS_SUMMARY}</p>
                        </div>
                        <div className="bg-surface-50 p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                                Reservations
                            </p>
                            <p className="mt-2 text-sm text-ink-700">First come, first served. No waiting list.</p>
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
            <StartBannerSection />
            <WhatWeDoSection />
            <HowItWorksSection />
            <MenuSection />
            <StatsSection />
            <TestimonialsSection />
            <AboutSection />
            <CateringSection />
            <LocationSection />
        </>
    )
}

export default HomeView
