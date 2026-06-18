import React from 'react'

/* ──────────────────────────────────────────────
   StarRating — caution-yellow rating row.
   ────────────────────────────────────────────── */

/**
 * @param {object} props
 * @param {number} props.count number of filled stars (1–5)
 */
function StarRating({ count, className = '' }) {
    return (
        <div className={`flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: count }).map((_, index) => (
                <svg
                    key={index}
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-caution"
                    aria-hidden="true"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    )
}

export default StarRating
