import React, { useCallback, useState } from 'react'
import { ADDRESS, BUSINESS, CATERING, EMAIL, HOURS, PHONE, SOCIAL } from '../../app/constants/site'
import Button from '../../app/components/ui/Button'
import Eyebrow from '../../app/components/ui/Eyebrow'

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

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
        answer: `Yes. We'll bring the pot, the propane, and the crawfish to your location. Minimum ${CATERING.minHeadcount} people. Call us at least ${CATERING.minLeadTimeDays} days in advance. We'll handle everything except the paper towels.`
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
    },
    {
        question: 'Are you pet-friendly?',
        answer: "Well-behaved dogs are welcome on the patio. Bring a water bowl, mind your tableside neighbors, and please don't feed them crawfish — the shells are bad for them."
    },
    {
        question: 'What forms of payment do you accept?',
        answer: 'Cash, all major credit cards, Apple Pay, and Google Pay. The ATM up the road in Dayton has a $3 fee — fair warning.'
    }
]

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
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-crawfish"
                aria-expanded={isOpen}
            >
                <span className="pr-4 font-display text-base uppercase tracking-wide text-ink-900">{question}</span>
                <span
                    className={`shrink-0 text-lg text-crawfish transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                >
                    +
                </span>
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-600">{answer}</p>
                </div>
            </div>
        </div>
    )
}

function SocialBlock() {
    return (
        <div className="rounded-xl border border-surface-300 bg-white p-6 lg:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-crawfish/70">Follow Along</p>
            <p className="mt-3 font-display text-lg uppercase tracking-wide text-ink-900">
                Boils, specials, behind-the-pot.
            </p>
            <ul className="mt-6 space-y-3">
                {SOCIAL.map(({ label, handle, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 rounded-lg border border-surface-300 px-4 py-3 transition-[border-color,background-color,transform] duration-200 hover:border-crawfish/40 hover:bg-crawfish-light active:scale-[0.99]"
                        >
                            <div>
                                <p className="font-display text-sm uppercase tracking-wide text-ink-900">{label}</p>
                                <p className="text-xs text-ink-500">{handle}</p>
                            </div>
                            <span
                                className="text-crawfish transition-transform duration-200 group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                &rarr;
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

/* ──────────────────────────────────────────────
   Sections
   ────────────────────────────────────────────── */

function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b-2 border-ink-900 bg-ink-900 pb-16 pt-32 lg:pb-24 lg:pt-40">
            <div className="mud-texture pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <Eyebrow>Find Us</Eyebrow>
                <h1 className="mt-4 font-display text-hero uppercase text-white">
                    Come
                    <br />
                    <span className="text-crawfish">hungry.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                    We're at {ADDRESS.street} in {ADDRESS.city}, Texas. You'll smell us before you see us. Plenty of
                    parking, a patio out back, and a line that moves fast.
                </p>
            </div>
        </section>
    )
}

function LocationSection() {
    return (
        <section className="bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <Eyebrow>Location</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">The Shack</h2>

                        <address className="mt-8 grid gap-6 not-italic sm:grid-cols-2">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                                    Address
                                </p>
                                <p className="mt-2 text-lg text-ink-900">{ADDRESS.street}</p>
                                <p className="text-lg text-ink-900">
                                    {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                                    Phone
                                </p>
                                <a
                                    href={PHONE.href}
                                    className="mt-2 block text-lg text-ink-900 transition-colors duration-200 hover:text-crawfish"
                                >
                                    {PHONE.display}
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                                    General email
                                </p>
                                <a
                                    href={EMAIL.href}
                                    className="mt-2 block text-lg text-ink-900 transition-colors duration-200 hover:text-crawfish"
                                >
                                    {EMAIL.primary}
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                                    Catering email
                                </p>
                                <a
                                    href={`mailto:${EMAIL.catering}`}
                                    className="mt-2 block text-lg text-ink-900 transition-colors duration-200 hover:text-crawfish"
                                >
                                    {EMAIL.catering}
                                </a>
                            </div>
                        </address>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <Button href={ADDRESS.mapsUrl} target="_blank" rel="noopener noreferrer" size="lg">
                                Get Directions
                            </Button>
                            <Button href={PHONE.href} variant="outline-light" size="lg">
                                Call Ahead
                            </Button>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <Eyebrow>Hours</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">When we're open</h2>

                        <dl className="mt-8 divide-y divide-surface-300 border-y border-surface-300">
                            {HOURS.map(({ day, time, closed }) => (
                                <div key={day} className="flex items-center justify-between py-4">
                                    <dt className={`text-sm ${closed ? 'text-ink-400' : 'text-ink-700'}`}>{day}</dt>
                                    <dd
                                        className={`text-sm font-medium tabular-nums ${closed ? 'text-ink-400' : 'text-ink-900'}`}
                                    >
                                        {time}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <p className="mt-6 text-xs text-ink-500">
                            * Kitchen closes 30 minutes before close. Last boil order 45 minutes before close.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function MapSection() {
    return (
        <section className="border-y border-surface-300">
            <div className="relative">
                <iframe
                    title={`${BUSINESS.fullName} location`}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-94.9100%2C30.0350%2C-94.8900%2C30.0550&layer=mapnik&marker=30.0460%2C-94.9005"
                    className="h-[400px] w-full border-0 grayscale-[30%] lg:h-[500px]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 max-w-[260px] rounded-lg bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                    <p className="font-display text-sm uppercase tracking-wide text-ink-900">{ADDRESS.street}</p>
                    <p className="text-xs text-ink-500">
                        {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                    </p>
                    <a
                        href={ADDRESS.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-crawfish underline decoration-crawfish/30 underline-offset-2 transition-colors duration-200 hover:decoration-crawfish"
                    >
                        Get Directions <span aria-hidden="true">&rarr;</span>
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
                    <Eyebrow>Getting Here</Eyebrow>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                        Parking &amp;
                        <br />
                        directions
                    </h2>
                </div>

                <div className="space-y-6 text-base leading-relaxed text-ink-600 lg:col-span-7">
                    <p>
                        We're at {ADDRESS.street} in {ADDRESS.city}, just off the highway. If you're coming from
                        Houston, it's about 45 minutes east on US-90. Look for the sign with the crawfish on a dirt
                        bike. You can't miss it.
                    </p>
                    <p>
                        <span className="text-ink-800">Parking lot</span> is gravel, right out front. Plenty of space.
                        Pull in, park, walk up. It's not complicated.
                    </p>
                    <p>
                        <span className="text-ink-800">Big trucks and trailers</span> &mdash; you're in {ADDRESS.city},
                        we've got room. Pull around to the side lot if you need extra space.
                    </p>
                    <p>
                        <span className="text-ink-800">The patio</span> is out back. Covered, picnic tables, string
                        lights. Where most of the boils happen when the weather isn't trying to kill you.
                    </p>
                </div>
            </div>
        </section>
    )
}

function CateringSection() {
    return (
        <section
            id="catering"
            className="relative scroll-mt-32 overflow-hidden border-t-2 border-ink-900 bg-ink-900 py-24 lg:py-32"
        >
            <div className="mud-texture pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <Eyebrow>Catering</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-white">
                            We'll bring the pot
                            <br />
                            to you.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                            We do birthdays, tailgates, wedding rehearsals, company outings, crawfish-and-beer
                            fundraisers. If there's a parking lot and a crowd, we'll be there with the propane.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <dl className="grid gap-px overflow-hidden rounded-xl bg-white/5 sm:grid-cols-2">
                            <div className="bg-ink-900 p-6 lg:p-8">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.3em] text-caution">
                                    Headcount
                                </dt>
                                <dd className="mt-2 font-display text-2xl text-white">
                                    {CATERING.minHeadcount}+ people
                                </dd>
                                <p className="mt-2 text-sm text-white/55">
                                    Smaller groups, give us a call and we'll work something out.
                                </p>
                            </div>
                            <div className="bg-ink-900 p-6 lg:p-8">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.3em] text-caution">
                                    Lead time
                                </dt>
                                <dd className="mt-2 font-display text-2xl text-white">
                                    {CATERING.minLeadTimeDays} days
                                </dd>
                                <p className="mt-2 text-sm text-white/55">
                                    Live boils require planning. The further out, the better.
                                </p>
                            </div>
                            <div className="bg-ink-900 p-6 lg:p-8">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.3em] text-caution">
                                    Service radius
                                </dt>
                                <dd className="mt-2 font-display text-2xl text-white">
                                    {CATERING.deliveryRadiusMiles} miles
                                </dd>
                                <p className="mt-2 text-sm text-white/55">
                                    Dayton, Liberty, Baytown, Houston, Beaumont, anywhere in between.
                                </p>
                            </div>
                            <div className="bg-ink-900 p-6 lg:p-8">
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.3em] text-caution">
                                    Crawfish minimum
                                </dt>
                                <dd className="mt-2 font-display text-2xl text-white">
                                    {CATERING.minCrawfishPounds} lbs
                                </dd>
                                <p className="mt-2 text-sm text-white/55">
                                    In season. Off-season we'll do shrimp boils.
                                </p>
                            </div>
                        </dl>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button href={PHONE.href}>Call to book</Button>
                            <Button href={`mailto:${EMAIL.catering}?subject=Catering%20inquiry`} variant="outline-dark">
                                Email the catering desk
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContactFormSection() {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', topic: 'general', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleFieldChange = useCallback((event) => {
        const { name, value } = event.target
        setFormState((prev) => ({ ...prev, [name]: value }))
    }, [])

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault()
            setSubmitting(true)
            const recipient = formState.topic === 'catering' ? EMAIL.catering : EMAIL.primary
            const subject = encodeURIComponent(
                `[${BUSINESS.name}] ${formState.topic === 'catering' ? 'Catering inquiry' : 'Website message'} from ${formState.name}`
            )
            const body = encodeURIComponent(
                `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\n${formState.message}`
            )
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
            setTimeout(() => {
                setSubmitting(false)
                setSubmitted(true)
            }, 400)
        },
        [formState]
    )

    return (
        <section className="border-t border-surface-300 bg-surface-100 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <Eyebrow>Send a Message</Eyebrow>
                        <h2 className="mt-4 font-display text-section uppercase text-ink-900">
                            Got a question?
                            <br />
                            Drop us a line.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600">
                            For the fastest reply, just call us &mdash; we pick up between{' '}
                            {HOURS[1].time.split('–')[0].trim()} and close. Otherwise, this form will open your email
                            app with our address pre-filled.
                        </p>

                        <div className="mt-10">
                            <SocialBlock />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        {submitted ? (
                            <div className="rounded-xl border border-crawfish/20 bg-crawfish-light p-8 text-center lg:p-10">
                                <p className="font-display text-xl uppercase tracking-wide text-ink-900">
                                    Email opened.
                                </p>
                                <p className="mt-3 text-sm text-ink-600">
                                    We just opened your email app with the message ready to send. If it didn't pop up,
                                    just write us directly at{' '}
                                    <a
                                        href={EMAIL.href}
                                        className="font-medium text-crawfish underline decoration-crawfish/30 underline-offset-2"
                                    >
                                        {EMAIL.primary}
                                    </a>
                                    .
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5 rounded-xl border border-surface-300 bg-white p-6 lg:p-8"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                                            Name
                                        </span>
                                        <input
                                            type="text"
                                            name="name"
                                            autoComplete="name"
                                            required
                                            value={formState.name}
                                            onChange={handleFieldChange}
                                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                                            placeholder="Your name"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                                            Email
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            required
                                            value={formState.email}
                                            onChange={handleFieldChange}
                                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                                            placeholder="you@example.com"
                                        />
                                    </label>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                                            Phone (optional)
                                        </span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            autoComplete="tel"
                                            value={formState.phone}
                                            onChange={handleFieldChange}
                                            className="mt-1 block w-full rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                                            placeholder="(936) 555-0123"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                                            Topic
                                        </span>
                                        <select
                                            name="topic"
                                            value={formState.topic}
                                            onChange={handleFieldChange}
                                            className="mt-1 block w-full appearance-none rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                                        >
                                            <option value="general">General question</option>
                                            <option value="catering">Catering inquiry</option>
                                            <option value="large-order">Large takeout / call ahead</option>
                                            <option value="feedback">Feedback / press</option>
                                        </select>
                                    </label>
                                </div>

                                <label className="block">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                                        Message
                                    </span>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={handleFieldChange}
                                        className="mt-1 block w-full resize-y rounded-lg border border-surface-400 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-[border-color,box-shadow] duration-200 focus:border-crawfish focus:outline-none focus:ring-1 focus:ring-crawfish"
                                        placeholder="Tell us what you need — headcount, date, anything else we should know."
                                    />
                                </label>

                                <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-xs text-ink-500">
                                        We'll respond within one business day, usually faster.
                                    </p>
                                    <Button type="submit" disabled={submitting}>
                                        {submitting ? 'Opening…' : 'Send Message'}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
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
                    <Eyebrow>FAQ</Eyebrow>
                    <h2 className="mt-4 font-display text-section uppercase text-ink-900">Before you ask</h2>
                </div>

                <div className="max-w-3xl border-t border-surface-300">
                    {FAQ_ITEMS.map(({ question, answer }) => (
                        <FAQItem key={question} question={question} answer={answer} />
                    ))}
                </div>
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
            <MapSection />
            <ParkingSection />
            <CateringSection />
            <ContactFormSection />
            <FAQSection />
        </>
    )
}

export default ContactView
