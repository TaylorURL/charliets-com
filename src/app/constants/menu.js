/* ──────────────────────────────────────────────
   Menu Data — single source of truth
   Prices in cents. Items with `marketPrice: true`
   cannot be ordered online.
   ────────────────────────────────────────────── */

const MENU_CATEGORIES = [
    {
        id: 'boil',
        label: 'The Boil',
        description:
            'Everything comes out of the pot. Corn, potatoes, sausage, garlic, and onions included with every order.',
        items: [
            {
                id: 'boil-crawfish',
                name: 'Whole Boiled Crawfish',
                priceCents: null,
                priceLabel: 'Market Price / lb',
                note: 'Minimum 3 lbs per order. Seasonal: January through June.',
                marketPrice: true
            },
            {
                id: 'boil-shrimp',
                name: 'Head-On Gulf Shrimp',
                priceCents: 1800,
                priceLabel: '$18 / lb',
                note: 'Shell-on, boiled in our house seasoning.'
            },
            {
                id: 'boil-snow-crab',
                name: 'Snow Crab Legs',
                priceCents: 2800,
                priceLabel: '$28 / lb',
                note: 'Clusters, boiled or steamed.'
            },
            {
                id: 'boil-blue-crab',
                name: 'Blue Crab',
                priceCents: 1500,
                priceLabel: '$15 / half dozen',
                note: 'Whole, boiled. Seasonal availability.'
            },
            {
                id: 'boil-combo',
                name: 'The Charlie T Combo',
                priceCents: 4500,
                priceLabel: '$45',
                note: '2 lbs crawfish, 1 lb shrimp, 1 lb snow crab. Feeds two if you behave.'
            },
            {
                id: 'boil-extra-corn',
                name: 'Extra Corn',
                priceCents: 400,
                priceLabel: '$4',
                note: '3 ears.'
            },
            {
                id: 'boil-extra-potatoes',
                name: 'Extra Potatoes',
                priceCents: 400,
                priceLabel: '$4',
                note: '4 halves.'
            },
            {
                id: 'boil-extra-sausage',
                name: 'Extra Sausage',
                priceCents: 400,
                priceLabel: '$4',
                note: '3 links.'
            },
            {
                id: 'boil-extra-garlic',
                name: 'Extra Garlic',
                priceCents: 400,
                priceLabel: '$4',
                note: '1 head.'
            }
        ]
    },
    {
        id: 'starters',
        label: 'Starters',
        description: 'Something to keep your hands busy while the pot rolls.',
        items: [
            {
                id: 'starter-boudin',
                name: 'Boudin Balls',
                priceCents: 1200,
                priceLabel: '$12',
                note: 'Six per order. Cajun pork and rice, crispy fried. Served with remoulade.'
            },
            {
                id: 'starter-pickles',
                name: 'Fried Pickles',
                priceCents: 900,
                priceLabel: '$9',
                note: 'Dill chips, beer-battered. Ranch on the side.'
            },
            {
                id: 'starter-peel-eat',
                name: 'Peel & Eat Shrimp',
                priceCents: 1400,
                priceLabel: '$14',
                note: 'Half pound, chilled, Old Bay. No frills.'
            },
            {
                id: 'starter-dip',
                name: 'Crawfish Dip',
                priceCents: 1300,
                priceLabel: '$13',
                note: 'Cream cheese, tail meat, green onion, served with saltines.'
            },
            {
                id: 'starter-hushpuppies',
                name: 'Hushpuppies',
                priceCents: 700,
                priceLabel: '$7',
                note: 'Eight per order. Cornmeal, jalape\u00f1o, honey butter.'
            }
        ]
    },
    {
        id: 'plates',
        label: 'Plates',
        description: 'Full meals. Every plate comes with two sides unless noted.',
        items: [
            {
                id: 'plate-fried-catfish',
                name: 'Fried Catfish Plate',
                priceCents: 1600,
                priceLabel: '$16',
                note: 'Cornmeal-crusted fillets. Slaw and hushpuppies.'
            },
            {
                id: 'plate-blackened-catfish',
                name: 'Blackened Catfish',
                priceCents: 1800,
                priceLabel: '$18',
                note: 'Pan-seared in cast iron. Rice and greens.'
            },
            {
                id: 'plate-fried-shrimp',
                name: 'Fried Shrimp Plate',
                priceCents: 1700,
                priceLabel: '$17',
                note: 'Gulf shrimp, hand-breaded. Fries and slaw.'
            },
            {
                id: 'plate-etouffee',
                name: 'Crawfish Etouffee',
                priceCents: 1900,
                priceLabel: '$19',
                note: 'Tail meat in a blonde roux. Served over white rice.'
            },
            {
                id: 'plate-gumbo-cup',
                name: "Charlie's Gumbo (Cup)",
                priceCents: 1500,
                priceLabel: '$15',
                note: "Dark roux, andouille, okra, rice. The recipe doesn't leave this building."
            },
            {
                id: 'plate-gumbo-bowl',
                name: "Charlie's Gumbo (Bowl)",
                priceCents: 1900,
                priceLabel: '$19',
                note: "Dark roux, andouille, okra, rice. The recipe doesn't leave this building."
            },
            {
                id: 'plate-red-beans',
                name: 'Red Beans & Rice',
                priceCents: 1300,
                priceLabel: '$13',
                note: "Monday's leftovers, any day of the week. Andouille, smoked ham hock."
            }
        ]
    },
    {
        id: 'sandwiches',
        label: 'Sandwiches',
        description:
            'All sandwiches on Leidenheimer bread, dressed (lettuce, tomato, pickles, mayo) unless you say otherwise.',
        items: [
            {
                id: 'sand-shrimp',
                name: "Shrimp Po'Boy",
                priceCents: 1500,
                priceLabel: '$15',
                note: 'Gulf shrimp, fried, 12 inches. Dressed.'
            },
            {
                id: 'sand-catfish',
                name: "Catfish Po'Boy",
                priceCents: 1400,
                priceLabel: '$14',
                note: 'Cornmeal-crusted fillet. Dressed with remoulade.'
            },
            {
                id: 'sand-roast-beef',
                name: "Roast Beef Po'Boy",
                priceCents: 1600,
                priceLabel: '$16',
                note: 'Slow-roasted, falling apart, debris gravy. The napkin killer.'
            },
            {
                id: 'sand-sausage',
                name: "Hot Sausage Po'Boy",
                priceCents: 1300,
                priceLabel: '$13',
                note: 'Smoked sausage, grilled onions, mustard, pickles.'
            }
        ]
    },
    {
        id: 'sides',
        label: 'Sides',
        description: 'A la carte. $5 each unless noted.',
        items: [
            {
                id: 'side-fries',
                name: 'Cajun Fries',
                priceCents: 500,
                priceLabel: '$5',
                note: 'Seasoned, crispy, no ketchup needed.'
            },
            {
                id: 'side-slaw',
                name: 'Coleslaw',
                priceCents: 500,
                priceLabel: '$5',
                note: 'Creamy, tangy, made in-house daily.'
            },
            {
                id: 'side-greens',
                name: 'Collard Greens',
                priceCents: 500,
                priceLabel: '$5',
                note: 'Slow-cooked with smoked turkey.'
            },
            {
                id: 'side-corn',
                name: 'Corn on the Cob',
                priceCents: 400,
                priceLabel: '$4',
                note: 'Boiled in seasoning water. Two ears.'
            },
            {
                id: 'side-dirty-rice',
                name: 'Dirty Rice',
                priceCents: 500,
                priceLabel: '$5',
                note: 'Chicken liver, ground pork, holy trinity.'
            },
            {
                id: 'side-mac',
                name: 'Mac & Cheese',
                priceCents: 600,
                priceLabel: '$6',
                note: 'Three cheeses. Baked with a breadcrumb top.'
            }
        ]
    },
    {
        id: 'drinks',
        label: 'Drinks',
        description: 'Nothing fancy. Nothing needs to be.',
        items: [
            {
                id: 'drink-sweet-tea',
                name: 'Sweet Tea',
                priceCents: 300,
                priceLabel: '$3',
                note: 'Brewed daily. Refills free.'
            },
            {
                id: 'drink-unsweet-tea',
                name: 'Unsweet Tea',
                priceCents: 300,
                priceLabel: '$3',
                note: 'Same pot, no sugar.'
            },
            {
                id: 'drink-lemonade',
                name: 'Fresh Lemonade',
                priceCents: 400,
                priceLabel: '$4',
                note: 'Squeezed in-house. Add strawberry for $1.'
            },
            {
                id: 'drink-soda',
                name: 'Soft Drinks',
                priceCents: 300,
                priceLabel: '$3',
                note: 'Coke, Diet Coke, Sprite, Dr Pepper, Root Beer.'
            },
            {
                id: 'drink-domestic',
                name: 'Domestic Beer',
                priceCents: 400,
                priceLabel: '$4',
                note: 'Bud Light, Miller Lite, Coors Light. Cans.'
            },
            {
                id: 'drink-craft',
                name: 'Craft / Import Beer',
                priceCents: 600,
                priceLabel: '$6',
                note: 'Rotating selection. Ask your server.'
            },
            {
                id: 'drink-abita',
                name: 'Abita on Draft',
                priceCents: 600,
                priceLabel: '$6',
                note: "Amber, Purple Haze, or seasonal. Louisiana's beer."
            }
        ]
    }
]

export default MENU_CATEGORIES
