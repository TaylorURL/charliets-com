import React from 'react'

/* ──────────────────────────────────────────────
   Eyebrow — the tracked kicker label above a
   heading. A short checker tick gives it the
   start-line feel without shouting.
   ────────────────────────────────────────────── */

/**
 * @param {object} props
 * @param {boolean} [props.tick=true] show the leading checker tick
 * @param {string} [props.className] color/spacing overrides (defaults to throttle orange)
 */
function Eyebrow({ tick = true, className = '', children }) {
    return (
        <p
            className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-crawfish ${className}`}
        >
            {tick && (
                <span
                    className="checker-band h-2.5 w-5 bg-[length:6px_6px] text-current opacity-80"
                    aria-hidden="true"
                />
            )}
            {children}
        </p>
    )
}

export default Eyebrow
