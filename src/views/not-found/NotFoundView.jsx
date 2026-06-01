import React from 'react'
import { Link } from 'react-router-dom'
import { PHONE } from '../../app/constants/site'

function NotFoundView() {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 top-0 h-[800px] w-[800px] rounded-full bg-crawfish/[0.04] blur-[120px]" />
                <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-crawfish/[0.05] blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-32 text-center lg:px-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-crawfish">404 — Not Found</p>
                <h1 className="mt-6 font-display text-[clamp(4rem,15vw,11rem)] uppercase leading-[0.85] tracking-tight text-white">
                    Wrong
                    <br />
                    pot.
                </h1>
                <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/65">
                    The page you're looking for boiled off somewhere. Try the menu, the story, or come find us in
                    Dayton.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-lg bg-crawfish px-7 py-3.5 font-display text-[13px] uppercase tracking-wider text-white transition-[background-color,box-shadow,transform] duration-200 hover:bg-crawfish-dark hover:shadow-[0_8px_30px_-8px_rgba(232,93,38,0.5)] active:scale-[0.97]"
                    >
                        Back to Home
                    </Link>
                    <Link
                        to="/menu"
                        className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-white/70 transition-[border-color,color,transform] duration-200 hover:border-white/35 hover:text-white active:scale-[0.97]"
                    >
                        See the Menu
                    </Link>
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
