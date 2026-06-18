import React from 'react'

/* ──────────────────────────────────────────────
   Marquee — the start-line sponsor banner. A
   single track of phrases scrolled on loop. The
   list is duplicated so the -50% translate wraps
   seamlessly; pauses on hover, calms under
   reduced-motion via the global media query.
   ────────────────────────────────────────────── */

/**
 * @param {object} props
 * @param {string[]} props.items phrases to repeat across the banner
 */
function Marquee({ items, className = '' }) {
    const track = [...items, ...items]

    return (
        <div className={`group flex overflow-hidden ${className}`} role="presentation">
            <ul className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
                {track.map((item, index) => (
                    <li key={index} className="flex items-center" aria-hidden={index >= items.length}>
                        <span className="whitespace-nowrap font-display text-sm uppercase tracking-[0.18em]">
                            {item}
                        </span>
                        <span className="mx-6 text-crawfish" aria-hidden="true">
                            ✦
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Marquee
