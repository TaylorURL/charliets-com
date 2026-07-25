import React from 'react'

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
