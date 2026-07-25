import React from 'react'

/**
 * @param {object} props
 * @param {string[]} props.items phrases to repeat across the banner
 */
function Marquee({ items, className = '' }) {
    // Doubled so the -50% translate lands exactly one copy over, seamlessly.
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
