import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        if (typeof console !== 'undefined') {
            console.error('Render error captured by ErrorBoundary:', error, info)
        }
    }

    render() {
        if (this.state.hasError) return this.props.fallback ?? null
        return this.props.children
    }
}

export { ErrorBoundary }
