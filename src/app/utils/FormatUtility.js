/**
 * Format cents as a dollar string.
 * @param {number} cents
 * @returns {string} e.g. "$12.00"
 */
export function formatCents(cents) {
    return `$${(cents / 100).toFixed(2)}`
}
