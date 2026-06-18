import React from 'react'
import { Link } from 'react-router-dom'

/* ──────────────────────────────────────────────
   Button — the throttle. One pressable primitive,
   polymorphic across <Link>, <a>, and <button>.
   Variants carry the race/boil palette; every
   variant gets press feedback + a rev on hover.
   ────────────────────────────────────────────── */

const BASE =
    'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-display uppercase leading-none tracking-[0.12em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out-strong active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
    throttle:
        'bg-crawfish text-white hover:bg-crawfish-dark hover:shadow-[0_10px_30px_-10px_rgba(255,90,31,0.7)] disabled:hover:bg-crawfish disabled:hover:shadow-none',
    racing: 'bg-racing text-white hover:bg-racing-dark hover:shadow-[0_10px_30px_-10px_rgba(224,30,43,0.7)]',
    plate: 'number-plate hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(22,17,11,0.9)]',
    dark: 'bg-ink-900 text-white hover:bg-ink-800',
    'outline-dark':
        'border border-white/20 text-white/75 hover:border-crawfish/70 hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,90,31,0.4)]',
    'outline-light':
        'border border-surface-400 text-ink-700 hover:border-crawfish hover:text-crawfish hover:shadow-[inset_0_0_0_1px_rgba(255,90,31,0.35)]',
}

const SIZES = {
    sm: 'px-5 py-2.5 text-[12px]',
    md: 'px-7 py-3.5 text-[13px]',
    lg: 'px-8 py-4 text-sm',
    block: 'w-full px-7 py-4 text-sm',
}

/**
 * @param {object} props
 * @param {keyof typeof VARIANTS} [props.variant='throttle']
 * @param {keyof typeof SIZES} [props.size='md']
 * @param {string} [props.to] internal route → renders <Link>
 * @param {string} [props.href] external/anchor link → renders <a>
 */
function Button({ variant = 'throttle', size = 'md', to, href, className = '', children, ...rest }) {
    const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`
    const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {content}
            </Link>
        )
    }
    if (href) {
        return (
            <a href={href} className={classes} {...rest}>
                {content}
            </a>
        )
    }
    return (
        <button className={classes} {...rest}>
            {content}
        </button>
    )
}

export default Button
