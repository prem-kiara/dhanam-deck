// tweaks-data.jsx — single source of truth for the deck.
// Change any value here and every slide / chart re-renders automatically.

const INVESTOR_DATA = /*EDITMODE-BEGIN*/{
  "brand": {
    "name": "Dhanam Investment and Finance",
    "short": "Dhanam",
    "legalName": "Dhanam Investment and Finance Private Limited",
    "tagline": "An RBI-licensed NBFC, building Coimbatore's most trusted neighbourhood financier.",
    "city": "Coimbatore, Tamil Nadu",
    "yearsOperating": "10+",
    "establishedYear": 2018,
    "website": "www.dhanamfinance.com",
    "tollFree": "1800 2025 180",
    "instagram": "@dhanamfin",
    "instagramUrl": "https://www.instagram.com/dhanamfin"
  },

  "highlights": {
    "aumCr": 150,
    "branches": 12,
    "carPct": 40,
    "growthPct": 35,
    "products": 5,
    "customers": "25,000+"
  },

  "products": {
    "gold":      { "label": "Gold loans",            "bookCr": 95, "growthYoY": 38, "yieldPct": 22, "atsLakh": 1.2 },
    "lap":       { "label": "Loan against property", "bookCr": 38, "growthYoY": 42, "yieldPct": 17, "atsLakh": 18 },
    "lockers":   { "label": "Private lockers",       "units": 1850, "occupancyPct": 92, "feeCr": 4.2 },
    "vehicle":   { "label": "Vehicle loans",         "bookCr": 12, "growthYoY": 55, "yieldPct": 16, "atsLakh": 6 },
    "unsecured": { "label": "Personal loans",        "bookCr": 5,  "growthYoY": 28, "yieldPct": 24, "atsLakh": 0.8 }
  },

  "directors": [
    {
      "name": "Dr. CA Gokul Govindarajan",
      "role": "Director · Governance",
      "qualification": "M.Com · FCA · CS · PhD",
      "highlights": [
        "Two decades in finance, audit and academic leadership",
        "Deep NBFC and regulatory knowledge",
        "Personal connections to industry pioneers — including India's founding fathers of microfinance",
        "Anchors governance, controls and strategic direction"
      ],
      "slot": "dir-gokul",
      "show": true
    },
    {
      "name": "Mr. Sankar Venkataraman",
      "role": "Director · Finance & Risk",
      "qualification": "B.Sc. · FCA",
      "highlights": [
        "Chartered Accountant with deep audit and tax expertise",
        "NBFC controls, regulatory compliance and risk oversight",
        "Long-standing relationships across India's NBFC and MFI ecosystem",
        "Leads financial governance and external assurance"
      ],
      "slot": "dir-sankar",
      "show": true
    },
    {
      "name": "Mr. Avinash Gopalakrishnan",
      "role": "Director · Strategy & Operations",
      "qualification": "MBA",
      "highlights": [
        "15+ years as a serial entrepreneur",
        "Founding director — built the operating engine from day one",
        "Drives day-to-day execution across branches, products and distribution",
        "Active hands-on guide for the next generation of leadership"
      ],
      "slot": "dir-avinash",
      "show": true
    },
    {
      "name": "Mr. Suren S",
      "role": "CEO · Technology & Strategy",
      "qualification": "Tech · Data Science · AI",
      "highlights": [
        "10+ years operating in the United States",
        "Worked with Home Depot, Walmart and global banking clients",
        "Background spans technology, data science and artificial intelligence",
        "CEO of two prior companies; current full-time CEO at Dhanam"
      ],
      "slot": "dir-suren",
      "show": true
    },
    {
      "name": "Mr. Gunasekaran S",
      "role": "Director · Operations",
      "qualification": null,
      "highlights": [
        "Leads field operations across the branch network",
        "Process design, branch productivity and customer service",
        "Drives day-to-day operational delivery"
      ],
      "slot": "dir-guna",
      "show": true
    },
    {
      "name": "Mr. Nambirajan",
      "role": "Director",
      "qualification": null,
      "highlights": [
        "[Add 3–4 bullet highlights — sector experience, prior roles, achievements]"
      ],
      "slot": "dir-nambi",
      "show": true
    },
    {
      "name": "Mr. Selvakumar",
      "role": "Director",
      "qualification": null,
      "highlights": [
        "[Add 3–4 bullet highlights — sector experience, prior roles, achievements]"
      ],
      "slot": "dir-selvakumar",
      "show": true
    }
  ],

  "team": [
    { "name": "Prem",         "role": "[Role placeholder]",      "slot": "team-prem",        "show": true },
    { "name": "Padmanabhan",  "role": "Gold business",           "slot": "team-padmanabhan", "show": true },
    { "name": "Eashwar",      "role": "AVP · Technology",        "slot": "team-eashwar",     "show": true },
    { "name": "Sridhar",      "role": "Gold business",           "slot": "team-sridhar",     "show": true },
    { "name": "Gowtham",      "role": "Branch operations",       "slot": "team-gowtham",     "show": true }
  ],

  "advisors": {
    "board": [
      { "name": "[Advisor name]", "slot": "adv-1", "show": true },
      { "name": "[Advisor name]", "slot": "adv-2", "show": true },
      { "name": "[Advisor name]", "slot": "adv-3", "show": true }
    ],
    "ace": [
      { "name": "Manivannan",     "slot": "ace-manivannan", "show": true },
      { "name": "[Ace investor]", "slot": "ace-2",          "show": true },
      { "name": "[Ace investor]", "slot": "ace-3",          "show": true }
    ]
  },

  "growth": {
    "goldMarketCagrPct": 18,
    "lapMarketCagrPct": 22,
    "nbfcAumCagrPct": 16,
    "fiveYearAumTargetCr": 2500
  },

  "competitors": [
    {
      "product": "Gold loans",
      "us": { "metric": "₹95 Cr", "sub": "+38% YoY · 22% yield" },
      "peers": [
        { "name": "Muthoot",     "scale": "₹74,000 Cr",  "focus": "Gold-only specialist" },
        { "name": "Manappuram",  "scale": "₹40,000 Cr",  "focus": "Gold-only specialist" }
      ]
    },
    {
      "product": "Loan against property",
      "us": { "metric": "₹38 Cr", "sub": "+42% YoY · 17% yield" },
      "peers": [
        { "name": "Five Star",   "scale": "₹11,000 Cr",   "focus": "Small-ticket LAP only" },
        { "name": "Veritas",     "scale": "₹8,000 Cr",    "focus": "MSME / LAP only" },
        { "name": "Mahindra",    "scale": "₹1,00,000 Cr", "focus": "Vehicle-led, some LAP" }
      ]
    },
    {
      "product": "Private lockers",
      "us": { "metric": "1,850 lockers", "sub": "92% occupancy · ₹4.2 Cr fees" },
      "peers": [
        { "name": "Sakthi",      "scale": "Niche", "focus": "Locker specialist · regional" }
      ]
    },
    {
      "product": "Personal loans",
      "us": { "metric": "₹5 Cr", "sub": "+28% YoY · existing customers only" },
      "peers": [
        { "name": "Bajaj Finance", "scale": "₹3,30,000 Cr", "focus": "Multi-product retail giant" },
        { "name": "Shriram",       "scale": "₹2,40,000 Cr", "focus": "Vehicle + retail credit" }
      ]
    },
    {
      "product": "Vehicle loans",
      "us": { "metric": "₹12 Cr", "sub": "+55% YoY · 16% yield" },
      "peers": [
        { "name": "Cholamandalam",   "scale": "₹1,40,000 Cr", "focus": "Vehicle-finance leader" },
        { "name": "Shriram",         "scale": "₹2,40,000 Cr", "focus": "Used CV / commercial fleet" },
        { "name": "Mahindra Finance","scale": "₹1,00,000 Cr", "focus": "Rural / vehicle finance" }
      ]
    }
  ],

  "promise": {
    "headline": "Your money will grow with us.",
    "lines": [
      "Freely tradable shares — sell anytime in the market.",
      "Compounding alongside one of India's most carefully run regional NBFCs.",
      "A partnership on your timeline, not ours."
    ]
  }
};/*EDITMODE-END*/

window.INVESTOR_DATA = INVESTOR_DATA;
