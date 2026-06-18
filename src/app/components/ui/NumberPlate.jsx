import React from 'react'

/* ──────────────────────────────────────────────
   NumberPlate — a motocross race plate. Bold digit
   on caution yellow with a hard offset shadow.
   Used for ranked steps and headline stats.
   ────────────────────────────────────────────── */

const SIZES = {
    sm: 'h-10 w-10 text-xl',
    md: 'h-14 w-14 text-3xl',
    lg: 'h-20 w-20 text-5xl',
}

/**
 * @param {object} props
 * @param {keyof typeof SIZES} [props.size='md']
 */
function NumberPlate({ size = 'md', className = '', children }) {
    return (
        <span
            className={`number-plate inline-flex shrink-0 -rotate-3 items-center justify-center rounded-md font-display leading-none tracking-tight ${SIZES[size]} ${className}`}
            aria-hidden="true"
        >
            {children}
        </span>
    )
}

export default NumberPlate
