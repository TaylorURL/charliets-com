/* ──────────────────────────────────────────────
   Charlie T's — "Race Day at the Boil" design system.
   Motocross race-track grit fused with Louisiana
   crawfish-boil heat. Tokens flow primitive → use.
   ────────────────────────────────────────────── */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                // Warm bone / sign-paper surfaces (the Cajun side)
                surface: {
                    50: '#FFFDF7',
                    100: '#FBF4E6',
                    200: '#F4E9D5',
                    300: '#E7D6B8',
                    400: '#D4BC92',
                },
                // Dirt-black asphalt + track clay (the race side)
                ink: {
                    900: '#16110B',
                    800: '#241C13',
                    700: '#3A2A1B',
                    600: '#52402C',
                    500: '#6E5942',
                    400: '#98826A',
                    300: '#B8A488',
                },
                // Throttle orange — primary heat (crawfish shell + engine)
                crawfish: '#FF5A1F',
                'crawfish-dark': '#E03E00',
                'crawfish-light': '#FFEDE2',
                // Race number-plate / hazard yellow
                caution: '#FFC21A',
                'caution-dark': '#E2A400',
                amber: '#FFC21A',
                // Racing red — the boil, the flag, the redline
                racing: '#E01E2B',
                'racing-dark': '#B0121C',
                // Bayou green — swamp, moss, the Cajun trinity
                bayou: '#3E7C4A',
                'bayou-dark': '#234A2B',
                // Track clay / dust
                clay: '#8A5A2B',
                dust: '#C2925A',
            },
            fontFamily: {
                display: ['Anton', 'system-ui', 'sans-serif'],
                paint: ['"Permanent Marker"', 'cursive'],
                body: ['"DM Sans"', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                hero: ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.86', letterSpacing: '0.01em' }],
                section: ['clamp(2rem, 5vw, 4rem)', { lineHeight: '0.92', letterSpacing: '0.01em' }],
            },
            backgroundImage: {
                // Checkered-flag tile — pair with bg-[length:...]
                checker:
                    'conic-gradient(currentColor 90deg, transparent 90deg 180deg, currentColor 180deg 270deg, transparent 270deg)',
                // Diagonal hazard / caution stripes
                hazard: 'repeating-linear-gradient(45deg, currentColor 0 14px, transparent 14px 28px)',
                // Tire-tread block pattern
                tread: 'repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 16px)',
            },
            animation: {
                'fade-in': 'fadeIn 0.7s cubic-bezier(0.23, 1, 0.32, 1) both',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both',
                'mud-kick': 'mudKick 0.7s cubic-bezier(0.23, 1, 0.32, 1) both',
                'slow-pulse': 'slowPulse 4s ease-in-out infinite',
                'steam-rise': 'steamRise 4.5s ease-in-out infinite',
                marquee: 'marquee 38s linear infinite',
                'plate-pop': 'platePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(28px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                // Dirt kicking up off the rear tire
                mudKick: {
                    '0%': { opacity: '0', transform: 'translateY(26px) rotate(-1.5deg)' },
                    '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
                },
                slowPulse: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.7' },
                },
                // Boil-pot steam drifting up
                steamRise: {
                    '0%': { opacity: '0', transform: 'translateY(8px) scale(1)' },
                    '40%': { opacity: '0.5' },
                    '100%': { opacity: '0', transform: 'translateY(-34px) scale(1.5)' },
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                platePop: {
                    '0%': { opacity: '0', transform: 'scale(0.8) rotate(-4deg)' },
                    '100%': { opacity: '1', transform: 'scale(1) rotate(-3deg)' },
                },
            },
            transitionTimingFunction: {
                'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
                'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
                drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
            },
        },
    },
    plugins: [],
}
