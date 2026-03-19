import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the top of the page on route change, or to a hash target if present. */
function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash)
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

export default ScrollToTop
