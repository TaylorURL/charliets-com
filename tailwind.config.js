module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                surface: {
                    50: '#FFFFFF',
                    100: '#FAFAF8',
                    200: '#F5F3F0',
                    300: '#EDEAE6',
                    400: '#D9D5CF',
                },
                ink: {
                    900: '#1A1816',
                    800: '#2D2A26',
                    700: '#44403C',
                    600: '#5C5752',
                    500: '#78736D',
                    400: '#9C9791',
                    300: '#B8B3AD',
                },
                crawfish: '#E85D26',
                'crawfish-dark': '#C74A1A',
                'crawfish-light': '#FEF0EB',
                amber: '#D4A843',
            },
            fontFamily: {
                display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
                body: ['"DM Sans"', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
                'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out both',
                'slide-up': 'slideUp 0.7s ease-out both',
                'slow-pulse': 'slowPulse 4s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slowPulse: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
}
