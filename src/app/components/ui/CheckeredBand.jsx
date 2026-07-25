import React from 'react'

/**
 * @param {object} props
 * @param {string} [props.className] height + text color (the check color)
 */
function CheckeredBand({ className = 'h-3 text-ink-900' }) {
    return <div className={`checker-band w-full ${className}`} role="presentation" aria-hidden="true" />
}

export default CheckeredBand
