import React from 'react'
import { Link } from 'react-router-dom'
import { ADDRESS, BUSINESS, CATERING, HOURS_SUMMARY, PHONE } from '../../app/constants/site'

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const SIGNATURE_DISHES = [
    {
        name: 'Whole Boiled Crawfish',
        price: 'Market / lb',
        category: 'The Boil',
        note: '3 lb minimum. Seasoning heavy. Corn, potatoes, sausage, garlic included.'
    },
    {
        name: 'The Charlie T Combo',
        price: '$45',
        category: 'The Boil',
        note: '2 lbs crawfish, 1 lb shrimp, 1 lb snow crab. Feeds two if you behave.'
    },
    {
        name: "Charlie's Gumbo",
        price: '$15 / $19',
        category: 'Plates',
        note: 'Dark roux, andouille, okra, rice. The recipe stays in this building.'
    },
    {
        name: 'Crawfish Etouffee',
        price: '$19',
        category: 'Plates',
        note: 'Tail meat in a blonde roux over white rice.'
    },
    {
        name: "Shrimp Po'Boy",
        price: '$15',
        category: 'Sandwiches',
        note: 'Gulf shrimp, fried, dressed. Leidenheimer bread.'
    },
    {
        name: 'Boudin Balls',
        price: '$12',
        category: 'Starters',
        note: 'Cajun pork and rice, crispy fried. Six per order with remoulade.'
    }
]

const HOW_IT_WORKS = [
    {
        step: '01',
        title: 'Pick your pot',
        body: 'Crawfish by the pound, shrimp, snow crab, blue crab — or get the combo and stop deciding.'
    },
    {
        step: '02',
        title: 'We boil to order',
        body: 'Live, into the pot, into our house seasoning. The roll lasts long enough to do it right.'
    },
    {
        step: '03',
        title: 'Dump and eat',
        body: 'Poured straight on the table with corn, potatoes, sausage, garlic. Sleeves up, phones down.'
    }
]

const TESTIMONIALS = [
    {
        quote: 'The seasoning is on another level. Drove 45 minutes from Houston and it was worth every mile. The crawfish were hot, fresh, and the bag of seasoning butter on the side is a war crime in the best way.',
        author: 'Marissa T.',
        location: 'Houston, TX',
        rating: 5
    },
    {
        quote: "Best gumbo I've had outside of Louisiana. The roux is jet black, the andouille is smoky, and they don't skimp on the okra. Charlie knows what he's doing.",
        author: 'Devon R.',
        location: 'Beaumont, TX',
        rating: 5
    },
    {
        quote: 'Brought the whole crew for my birthday. They pushed three tables together, dumped 15 pounds on us, and we stayed until close. No reservations, no fuss, just food and a good time.',
        author: 'Stephanie K.',
        location: 'Dayton, TX',
        rating: 5
    },
    {
        quote: "The boudin balls. That's it, that's the review. Order four. Thank me later.",
        author: 'Cal B.',
        location: 'Baytown, TX',
        rating: 5
    }
]

const STATS = [
    { value: '500+', label: 'Pounds boiled / weekend' },
    { value: '45 min', label: 'From Houston, US-90 east' },
    { value: '2024', label: 'Opened in Dayton' },
    { value: '6 days', label: 'Closed Mondays only' }
]

/* ──────────────────────────────────────────────
   Hero
   ────────────────────────────────────────────── */

function HeroSection() {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900">
            {/* Layered background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 top-0 h-[900px] w-[900px] rounded-full bg-crawfish/[0.04] blur-[100px]" />
                <div className="absolute -left-20 bottom-0 h-[600px] w-[600px] rounded-full bg-crawfish/[0.05] blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
                {/* Top line */}
                <div className="flex animate-fade-in items-center gap-4">
                    <span className="h-px w-8 bg-crawfish" />
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">
                        {ADDRESS.city}, {ADDRESS.state}
                    </p>
                </div>

                {/* Headline */}
                <h1 className="mt-8 animate-slide-up font-display uppercase leading-[0.85] text-white">
                    <span className="block text-[clamp(3rem,12vw,10rem)] tracking-[-0.04em]">{BUSINESS.name}</span>
                    <span className="block text-[clamp(2rem,7vw,5.5rem)] tracking-[-0.02em] text-white/30">
                        Crawfish Shack
                    </span>
                </h1>

                {/* Sub content */}
                <div
                    className="mt-12 flex animate-slide-up flex-col gap-10 lg:mt-16 lg:flex-row lg:items-end lg:justify-between"
                    style={{ animationDelay: '0.15s' }}
                >
                    <div className="max-w-md">
                        <p className="text-base leading-relaxed text-white/50">
                            Boiled crawfish, shrimp, and crab. House seasoning. Corn, potatoes, sausage, garlic. Poured
                            out on the table the way it's supposed to be. Dayton, TX.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                to="/menu"
                                className="inline-flex items-center justify-center rounded-lg bg-crawfish px-7 py-3.5 font-display text-[13px] uppercase tracking-wider text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-crawfish-dark hover:shadow-[0_8px_30px_-8px_rgba(232,93,38,0.5)] active:scale-[0.97]"
                            >
                                View Menu
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-white/65 transition-[border-color,color,transform] duration-200 hover:border-white/35 hover:text-white active:scale-[0.97]"
                            >
                                Find Us
                            </Link>
                        </div>
                    </div>

                    <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.3s' }}>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                                Location
                            </p>
                            <div className="mt-2 space-y-0.5 text-sm text-white/55">
                                <p>{ADDRESS.street}</p>
                                <p>
                                    {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">Hours</p>
                            <div className="mt-2 max-w-[260px] text-sm text-white/55">
                                <p>{HOURS_SUMMARY}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom scroll hint */}
                <div
                    className="mt-20 flex animate-fade-in items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25 lg:mt-28"
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
   What We Do
   ────────────────────────────────────────────── */

function WhatWeDoSection() {
    return (
        <section className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">What We Do</p>
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
                        <div className="grid gap-px rounded-lg bg-surface-300 sm:grid-cols-3">
                            {[
                                {
                                    title: 'Boils',
                                    text: 'Crawfish, shrimp, snow crab, blue crab. Whole pot, heavy seasoning, served with fixins.'
                                },
                                {
                                    title: 'Plates & Sandwiches',
                                    text: "Fried catfish, etouffee, gumbo, po'boys. Full meals with two sides."
                                },
                                {
                                    title: 'Starters & Sides',
                                    text: 'Boudin balls, fried pickles, hushpuppies, dirty rice, mac and cheese.'
                                }
                            ].map(({ title, text }) => (
                                <div
                                    key={title}
                                    className="bg-white p-6 transition-colors duration-200 hover:bg-surface-50"
                                >
                                    <h3 className="font-display text-sm uppercase tracking-wide text-ink-900">
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
   How It Works — The Boil Experience
   ────────────────────────────────────────────── */

function HowItWorksSection() {
    return (
        <section className="border-t border-surface-300 bg-ink-900 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-16 max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">The Boil</p>
                    <h2 className="mt-4 font-display text-section uppercase text-white">
                        Three steps.
                        <br />
                        No surprises.
                    </h2>
                </div>

                <div className="grid gap-px overflow-hidden rounded-lg bg-white/5 md:grid-cols-3">
                    {HOW_IT_WORKS.map(({ step, title, body }, index) => (
                        <div key={step} className="group relative bg-ink-900 p-8 lg:p-10">
                            <span
                                className="absolute right-6 top-6 font-display text-5xl leading-none text-crawfish/10 transition-colors duration-300 group-hover:text-crawfish/25"
                                aria-hidden="true"
                            >
                                {step}
                            </span>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-crawfish/70">
                                Step {index + 1}
                            </p>
                            <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-white">{title}</h3>
                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">{body}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 max-w-2xl text-sm text-white/40">
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
        <section className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">The Menu</p>
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

                <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-surface-300 sm:grid-cols-2 lg:grid-cols-3">
                    {SIGNATURE_DISHES.map(({ name, price, category, note }) => (
                        <div
                            key={name}
                            className="group flex flex-col justify-between bg-white p-6 transition-colors duration-200 hover:bg-crawfish-light lg:p-8"
                        >
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-crawfish/60">
                                    {category}
                                </p>
                                <h3 className="mt-3 font-display text-lg uppercase tracking-wide text-ink-900 transition-colors duration-200 group-hover:text-crawfish-dark">
                                    {name}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink-600">{note}</p>
                            </div>
                            <p className="mt-6 font-display text-base text-crawfish">{price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <Link
                        to="/menu"
                        className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-7 py-3.5 font-display text-[13px] uppercase tracking-wider text-white transition-[background-color,transform] duration-200 hover:bg-ink-800 active:scale-[0.97]"
                    >
                        See the full menu
                    </Link>
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
        <section className="border-t border-surface-300 bg-ink-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <dl className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
                    {STATS.map(({ value, label }) => (
                        <div key={label} className="bg-ink-900 px-8 py-12 text-center">
                            <dt className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-tight text-crawfish">
                                {value}
                            </dt>
                            <dd className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
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
   Testimonials / Social Proof
   ────────────────────────────────────────────── */

function StarRow({ count }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: count }).map((_, index) => (
                <svg
                    key={index}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-amber"
                    aria-hidden="true"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    )
}

function TestimonialsSection() {
    return (
        <section className="border-t border-surface-300 bg-surface-200 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Word of Mouth</p>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            People drive an hour
                            <br />
                            for this.
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <StarRow count={5} />
                        <p className="text-sm font-medium text-ink-700">4.9 average from 600+ reviews</p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {TESTIMONIALS.map(({ quote, author, location, rating }, index) => (
                        <figure
                            key={author}
                            className={`flex h-full flex-col justify-between rounded-xl border border-surface-300 bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] lg:p-7 ${
                                index === 1 ? 'lg:translate-y-2' : index === 2 ? 'lg:-translate-y-2' : ''
                            }`}
                        >
                            <StarRow count={rating} />
                            <blockquote className="mt-5 text-sm leading-relaxed text-ink-700">
                                &ldquo;{quote}&rdquo;
                            </blockquote>
                            <figcaption className="mt-6 border-t border-surface-300 pt-4">
                                <p className="font-display text-xs uppercase tracking-wider text-ink-900">{author}</p>
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
        <section className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">About</p>
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
   Catering callout
   ────────────────────────────────────────────── */

function CateringSection() {
    return (
        <section className="relative overflow-hidden border-t border-surface-300 bg-ink-900 py-24 lg:py-32">
            <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-crawfish/[0.06] blur-[120px]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Catering</p>
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

                        <dl className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/5 sm:grid-cols-3">
                            <div className="bg-ink-900 px-5 py-5">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Minimum
                                </dt>
                                <dd className="mt-1 font-display text-lg text-white">{CATERING.minHeadcount} people</dd>
                            </div>
                            <div className="bg-ink-900 px-5 py-5">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Lead time
                                </dt>
                                <dd className="mt-1 font-display text-lg text-white">
                                    {CATERING.minLeadTimeDays} days
                                </dd>
                            </div>
                            <div className="bg-ink-900 px-5 py-5">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Radius
                                </dt>
                                <dd className="mt-1 font-display text-lg text-white">
                                    {CATERING.deliveryRadiusMiles} miles
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={PHONE.href}
                                className="inline-flex items-center justify-center rounded-lg bg-crawfish px-7 py-3.5 font-display text-[13px] uppercase tracking-wider text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-crawfish-dark hover:shadow-[0_8px_30px_-8px_rgba(232,93,38,0.5)] active:scale-[0.97]"
                            >
                                Call to Book Catering
                            </a>
                            <Link
                                to="/contact#catering"
                                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-white/70 transition-[border-color,color,transform] duration-200 hover:border-white/35 hover:text-white active:scale-[0.97]"
                            >
                                Details &amp; FAQ
                            </Link>
                        </div>
                    </div>

                    <aside className="lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-10">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-crawfish/70">
                                What you get
                            </p>
                            <ul className="mt-6 space-y-4 text-sm text-white/75">
                                {[
                                    'Live boils on-site (no warmers, no buffet line)',
                                    'Crawfish, shrimp, crab, and the full plate menu',
                                    'Propane burners, pots, tables, paper liners',
                                    'Sausage, corn, potatoes, garlic — the works',
                                    'Friendly crew that has done this 1,000 times'
                                ].map((line) => (
                                    <li key={line} className="flex gap-3">
                                        <span
                                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crawfish"
                                            aria-hidden="true"
                                        />
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
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
        <section className="border-t border-surface-300 bg-surface-200 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-crawfish">Location</p>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            {ADDRESS.city}, {ADDRESS.state}
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600">
                            Off Private Road 442. 45 minutes east of Houston on US-90. Gravel lot, covered patio, plenty
                            of parking. You'll smell us before you see us.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={ADDRESS.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg bg-crawfish px-8 py-4 font-display text-sm uppercase tracking-wider text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-crawfish-dark hover:shadow-[0_8px_30px_-8px_rgba(232,93,38,0.5)] active:scale-[0.97]"
                            >
                                Get Directions
                            </a>
                            <a
                                href={PHONE.href}
                                className="inline-flex items-center justify-center rounded-lg border border-surface-400 px-8 py-4 text-sm font-medium tracking-wide text-ink-700 transition-[border-color,color,transform] duration-200 hover:border-crawfish hover:text-crawfish active:scale-[0.97]"
                            >
                                {PHONE.display}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-surface-300">
                        <div className="bg-white p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">Address</p>
                            <p className="mt-2 font-display text-sm uppercase tracking-wide text-ink-900">
                                {ADDRESS.street}
                            </p>
                            <p className="text-sm text-ink-600">
                                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                            </p>
                        </div>
                        <div className="bg-white p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">Phone</p>
                            <a
                                href={PHONE.href}
                                className="mt-2 block font-display text-sm uppercase tracking-wide text-ink-900 transition-colors duration-200 hover:text-crawfish"
                            >
                                {PHONE.display}
                            </a>
                        </div>
                        <div className="bg-white p-6">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                                Open today
                            </p>
                            <p className="mt-2 text-sm text-ink-700">{HOURS_SUMMARY}</p>
                        </div>
                        <div className="bg-white p-6">
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
