import React from 'react'
import { Link } from 'react-router-dom'

/* ──────────────────────────────────────────────
   ArrowLink — a "more →" affordance. Underlined
   label with an arrow that revs forward on hover.
   Renders <Link> for routes, <a> for everything else.
   ────────────────────────────────────────────── */

const CLASSES =
    'group inline-flex items-center gap-2 text-sm font-medium text-ink-600 underline decoration-surface-400 underline-offset-4 transition-colors duration-200 hover:text-crawfish hover:decoration-crawfish'

const Arrow = () => (
    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
        &rarr;
    </span>
)

/**
 * @param {object} props
 * @param {string} [props.to] internal route → renders <Link>
 * @param {string} [props.href] external/anchor link → renders <a>
 */
function ArrowLink({ to, href, className = '', children, ...rest }) {
    const classes = `${CLASSES} ${className}`

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {children}
                <Arrow />
            </Link>
        )
    }
    return (
        <a href={href} className={classes} {...rest}>
            {children}
            <Arrow />
        </a>
    )
}

export default ArrowLink
