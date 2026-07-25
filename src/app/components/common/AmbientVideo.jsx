import React, { useEffect, useRef, useState } from 'react'

/**
 * Muted looping background clip. An IntersectionObserver pauses it once it
 * scrolls out of view so off-screen decoration stops burning battery and CPU.
 * Under `prefers-reduced-motion: reduce` the video is never mounted at all —
 * the poster renders as a plain image instead, so there is no hidden element
 * still decoding frames.
 */

function AmbientVideo({ src, poster, ariaLabel, className = '' }) {
    const videoRef = useRef(null)
    const containerRef = useRef(null)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const query = window.matchMedia('(prefers-reduced-motion: reduce)')
        const update = () => setPrefersReducedMotion(query.matches)
        update()
        query.addEventListener('change', update)
        return () => query.removeEventListener('change', update)
    }, [])

    useEffect(() => {
        const video = videoRef.current
        const container = containerRef.current
        if (!video || !container || prefersReducedMotion) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {})
                } else {
                    video.pause()
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(container)
        return () => observer.disconnect()
    }, [prefersReducedMotion])

    if (prefersReducedMotion) {
        return (
            <div ref={containerRef} className={className}>
                <img src={poster} alt={ariaLabel || ''} className="h-full w-full object-cover" />
            </div>
        )
    }

    return (
        <div ref={containerRef} className={className}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={ariaLabel}
                className="h-full w-full object-cover"
            />
        </div>
    )
}

export default AmbientVideo
