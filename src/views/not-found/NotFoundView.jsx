import React from 'react'
import { PHONE } from '../../app/constants/site'
import Button from '../../app/components/ui/Button'
import Eyebrow from '../../app/components/ui/Eyebrow'

function NotFoundView() {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900">
            <div className="pointer-events-none absolute inset-0">
                <div className="mud-texture absolute inset-0" />
                <div className="absolute -right-40 top-0 h-[800px] w-[800px] rounded-full bg-crawfish/[0.05] blur-[120px]" />
                <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-racing/[0.05] blur-[120px]" />
            </div>

            {/* Caution tape across a dead end */}
            <div
                className="hazard-stripes pointer-events-none absolute inset-x-0 top-1/2 hidden h-8 -translate-y-1/2 -rotate-2 text-caution/15 sm:block"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-32 text-center lg:px-10">
                <div className="flex justify-center">
                    <Eyebrow tick={false}>404 — Red Flag</Eyebrow>
                </div>
                <h1 className="mt-6 font-display text-[clamp(4rem,15vw,11rem)] uppercase leading-[0.85] text-white">
                    Wrong
                    <br />
                    <span className="text-crawfish">pot.</span>
                </h1>
                <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/65">
                    The page you're looking for boiled off somewhere. Try the menu, the story, or come find us in
                    Dayton.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button to="/">Back to Home</Button>
                    <Button to="/menu" variant="outline-dark">
                        See the Menu
                    </Button>
                </div>

                <p className="mt-12 text-xs text-white/35">
                    Or just call us at{' '}
                    <a
                        href={PHONE.href}
                        className="font-medium text-white/65 underline decoration-white/20 underline-offset-2 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish/50"
                    >
                        {PHONE.display}
                    </a>
                    .
                </p>
            </div>
        </section>
    )
}

export default NotFoundView
