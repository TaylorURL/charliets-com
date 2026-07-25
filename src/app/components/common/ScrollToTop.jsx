import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
