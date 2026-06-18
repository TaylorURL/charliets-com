import React from 'react'

/* ──────────────────────────────────────────────
   CrossedFlags — the house crest. A checkered race
   flag crossed with a Cajun boil paddle: the two
   worlds in one mark. Poles inherit currentColor;
   the flag check + paddle carry their own paint.
   ────────────────────────────────────────────── */

const CHECKER_ID = 'charliets-flag-check'

/**
 * @param {object} props
 * @param {string} [props.className] sizing + pole color via text color
 */
function CrossedFlags({ className = 'h-12 w-12' }) {
    return (
        <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
            <defs>
                <pattern id={CHECKER_ID} width="8" height="8" patternUnits="userSpaceOnUse">
                    <rect width="8" height="8" fill="#FBF4E6" />
                    <rect width="4" height="4" fill="#16110B" />
                    <rect x="4" y="4" width="4" height="4" fill="#16110B" />
                </pattern>
            </defs>

            {/* Boil paddle, crossing bottom-left → top-right */}
            <g transform="rotate(-32 32 32)">
                <rect x="29.5" y="14" width="5" height="40" rx="2.5" fill="currentColor" />
                <rect x="22" y="6" width="20" height="16" rx="5" fill="#8A5A2B" stroke="#16110B" strokeWidth="2" />
                <line x1="27" y1="11" x2="27" y2="17" stroke="#16110B" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="32" y1="11" x2="32" y2="17" stroke="#16110B" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="37" y1="11" x2="37" y2="17" stroke="#16110B" strokeWidth="1.6" strokeLinecap="round" />
            </g>

            {/* Checkered race flag, crossing bottom-right → top-left */}
            <g transform="rotate(32 32 32)">
                <rect x="29.5" y="12" width="4" height="42" rx="2" fill="currentColor" />
                <path
                    d="M33 12c8-3 14 3 21 0v17c-7 3-13-3-21 0z"
                    fill={`url(#${CHECKER_ID})`}
                    stroke="#16110B"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default CrossedFlags
