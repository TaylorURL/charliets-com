/* ──────────────────────────────────────────────
   Site Info — single source of truth.
   Swap the placeholder phone / handles below
   with real values when launching.
   ────────────────────────────────────────────── */

export const BUSINESS = {
    name: "Charlie T's",
    fullName: "Charlie T's Crawfish Shack",
    tagline: 'Fresh boiled crawfish and Cajun seafood in Dayton, Texas.',
    foundedYear: 2024
}

export const ADDRESS = {
    street: '20 Private Rd 442',
    city: 'Dayton',
    state: 'TX',
    zip: '77535',
    region: 'Liberty County',
    full: '20 Private Rd 442, Dayton, TX 77535',
    mapsUrl: 'https://maps.google.com/?q=20+Private+Rd+442+Dayton+TX+77535',
    appleMapsUrl: 'https://maps.apple.com/?address=20+Private+Rd+442,+Dayton,+TX+77535',
    coords: { lat: 30.046, lng: -94.9005 }
}

export const PHONE = {
    raw: '+19365550193',
    href: 'tel:+19365550193',
    display: '(936) 555-0193'
}

export const EMAIL = {
    primary: 'eat@charliets.com',
    catering: 'catering@charliets.com',
    href: 'mailto:eat@charliets.com'
}

export const HOURS = [
    { day: 'Monday', short: 'Mon', time: 'Closed', closed: true },
    { day: 'Tuesday', short: 'Tue', time: '11:00 AM – 9:00 PM', open: '11:00', close: '21:00' },
    { day: 'Wednesday', short: 'Wed', time: '11:00 AM – 9:00 PM', open: '11:00', close: '21:00' },
    { day: 'Thursday', short: 'Thu', time: '11:00 AM – 9:00 PM', open: '11:00', close: '21:00' },
    { day: 'Friday', short: 'Fri', time: '11:00 AM – 10:00 PM', open: '11:00', close: '22:00' },
    { day: 'Saturday', short: 'Sat', time: '11:00 AM – 10:00 PM', open: '11:00', close: '22:00' },
    { day: 'Sunday', short: 'Sun', time: '11:00 AM – 8:00 PM', open: '11:00', close: '20:00' }
]

export const HOURS_SUMMARY = 'Tue–Thu 11a–9p · Fri–Sat 11a–10p · Sun 11a–8p · Closed Mon'

export const SOCIAL = [
    {
        label: 'Instagram',
        handle: '@charlietscrawfish',
        href: 'https://instagram.com/charlietscrawfish'
    },
    {
        label: 'Facebook',
        handle: "Charlie T's Crawfish Shack",
        href: 'https://facebook.com/charlietscrawfish'
    },
    {
        label: 'TikTok',
        handle: '@charlietscrawfish',
        href: 'https://tiktok.com/@charlietscrawfish'
    }
]

export const CATERING = {
    minHeadcount: 50,
    minLeadTimeDays: 14,
    minCrawfishPounds: 50,
    deliveryRadiusMiles: 60
}
