// tweaks-data.jsx — single source of truth for the deck.
// Change any value here and every slide / chart re-renders automatically.

const INVESTOR_DATA = /*EDITMODE-BEGIN*/{
  "brand": {
    "name": "Dhanam Investment and Finance",
    "short": "Dhanam",
    "legalName": "Dhanam Investment and Finance Private Limited",
    "tagline": "An RBI-licensed NBFC building India's most trusted neighbourhood financier — rooted local, rising national.",
    "city": "India",
    "hq": "Coimbatore, Tamil Nadu",
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
    "customers": "25,000+",
    "productMix": [
      { "label": "Gold loans",            "value": 65 },
      { "label": "Loan against property", "value": 25 },
      { "label": "Unsecured / other",     "value": 10 }
    ]
  },

  "productCategories": {
    "loans": [
      { "key": "gold",              "label": "Gold loans",                "slot": "about-gold",       "caption": "Best rates in town. 30-minute disbursal. Fully secured." },
      { "key": "lap",               "label": "Loan against property",     "slot": "about-lap",        "caption": "Small-ticket secured credit for self-employed India.", "imgPos": "center 65%" },
      { "key": "secured-business",  "label": "Secured business loans",    "slot": "about-business",   "caption": "Working capital secured by assets — for MSMEs banks miss." },
      { "key": "unsecured",         "label": "Personal loans",            "slot": "about-unsecured",  "caption": "Unsecured credit — for existing customers with a clean track record.", "imgZoom": 1.5, "imgZoomOrigin": "55% 35%" }
    ],
    "wealth": [
      { "key": "ncd",     "label": "Non-convertible debentures",     "slot": "about-ncd",     "caption": "Recurring monthly income — RBI-overseen debt instruments. Built for retirees and conservative wealth." },
      { "key": "lockers", "label": "Private lockers",                "slot": "about-lockers", "caption": "Better than your bank's locker — hospitality-grade service, armed security, all under one roof." }
    ]
  },

  "products": {
    "gold":      { "label": "Gold loans",            "bookCr": 95, "growthYoY": 38, "yieldPct": 22, "atsLakh": 1.2 },
    "lap":       { "label": "Loan against property", "bookCr": 38, "growthYoY": 42, "yieldPct": 17, "atsLakh": 18 },
    "lockers":   { "label": "Private lockers",       "units": 1850, "occupancyPct": 92, "feeCr": 4.2 }
  },

  "goldProspectus": {
    "historical": [
      { "year": "FY22", "value": 1800 },
      { "year": "FY23", "value": 1950 },
      { "year": "FY24", "value": 2300 },
      { "year": "FY25", "value": 2900 },
      { "year": "FY26", "value": 3500 }
    ],
    "future": [
      { "year": "FY27", "value": 4500 },
      { "year": "FY28", "value": 5500 },
      { "year": "FY29", "value": 7000 },
      { "year": "FY30", "value": 8500 },
      { "year": "FY31", "value": 10000 }
    ],
    "valueUnit": "$",
    "valuePrefix": "$",
    "axisLabel": "Gold price · USD per troy ounce — 5 historical + 5 projected",
    "macroHeadline": "Gold could reach $10,000/oz by 2030.",
    "macroCite": "Yardeni Research; CoinPriceForecast — long-range gold price models",
    "yieldHeadline": "22% gross yield. Fully secured. Intra-day disbursal.",
    "marketStat": "Central-bank gold buying, currency debasement and household monetisation are pushing gold higher every year. As the asset rises, our loan-to-value ticket rises with it — the same gram of gold collateralises a bigger loan, year after year. We grow when gold grows."
  },

  "lapProspectus": {
    "historical": [
      { "year": "FY22", "value": 59 },
      { "year": "FY23", "value": 67 },
      { "year": "FY24", "value": 76 },
      { "year": "FY25", "value": 86 },
      { "year": "FY26", "value": 97 }
    ],
    "future": [
      { "year": "FY27", "value": 110 },
      { "year": "FY28", "value": 125 },
      { "year": "FY29", "value": 141 },
      { "year": "FY30", "value": 160 },
      { "year": "FY31", "value": 181 }
    ],
    "valuePrefix": "₹",
    "axisLabel": "India LAP market · ₹ lakh crore — 5 historical + 5 projected",
    "macroHeadline": "India's LAP market: ₹76 lakh crore (FY24) → ₹160 lakh crore by 2030.",
    "macroCite": "TechSci Research, IMARC — 13.28% CAGR through 2030",
    "yieldHeadline": "17% gross yield. Property-secured. Cash-flow underwritten.",
    "marketStat": "A market doubling in six years — and your capital compounds inside it. Self-employed India is the engine; NBFCs own the category; Dhanam underwrites at the branch, where banks structurally can't reach. Partner with us and grow on the same curve."
  },

  "lockersDetail": {
    "headline": "Private lockers — better than your bank's, with the service of a five-star hotel.",
    "intro": "Not a side business. A serious wealth-product line — designed for every Dhanam customer who wants more than what their bank offers, without the queue or the wait-list.",
    "features": [
      { "title": "Triple-layer biometric access",    "body": "Fingerprint + iris + custodian dual-key. No single point of failure." },
      { "title": "24/7 armed protection",            "body": "Trained, licensed armed security on premises round the clock — well above standard bank-locker protocol." },
      { "title": "Hospitality-grade service",        "body": "Concierge welcome, refreshments, private waiting area. Treated like a guest, not a queue number." },
      { "title": "Network access across branches",   "body": "Operate your locker at any Dhanam branch — not just where you opened it." },
      { "title": "Evening & weekend access",         "body": "Pre-book outside banking hours. We open the vault for you." },
      { "title": "Discreet private rooms",           "body": "Sound-isolated review rooms. No staff, no queues, no eyes." }
    ]
  },

  "directors": [
    {
      "name": "Dr. CA. Gokul Govindarajan",
      "role": "Director · Governance",
      "qualification": "M.Com · FCA · CS · PhD",
      "bio": "Promoter-Director since inception. Two decades across chartered accountancy, company secretarial and corporate law — the architect of Dhanam's governance, compliance and strategic posture. Personal connections to industry pioneers, including India's founding fathers of microfinance.",
      "slot": "dir-gokul",
      "show": true,
      "founder": true
    },
    {
      "name": "Mr. Avinash Gopalakrishnan",
      "role": "Director · Strategy & Operations",
      "qualification": "MBA",
      "bio": "Founding director and serial entrepreneur with 15+ years of operating experience. Built Dhanam's day-to-day execution engine from scratch — branches, products, distribution. The hands-on operating partner alongside the next generation of leadership.",
      "slot": "dir-avinash",
      "show": true,
      "founder": true
    },
    {
      "name": "Mr. Sankar Venkataraman",
      "role": "Director · Finance & Risk",
      "qualification": "B.Sc. · FCA",
      "bio": "Fellow Chartered Accountant with deep audit, taxation and risk-advisory expertise across regulated financial institutions. Long-standing relationships across India's NBFC and MFI ecosystem. Anchors Dhanam's financial discipline and audit readiness.",
      "slot": "dir-sankar",
      "show": true,
      "founder": true
    },
    {
      "name": "Mr. Suren S",
      "role": "CEO · Technology & Strategy",
      "qualification": "B.E.",
      "bio": "Engineer and former CEO of two technology companies. 10+ years in the United States with Home Depot, Walmart and global banking clients. Drives Dhanam's digital transformation, scalable infrastructure and data-led decisions.",
      "slot": "dir-suren",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Gunasekaran S",
      "role": "Director & COO",
      "qualification": "MBA",
      "bio": "Operations specialist with decades in branch-network management, process optimisation and service delivery at scale across financial services. Leads Dhanam's branch productivity, customer service and operational delivery.",
      "slot": "dir-guna",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Selvakumar D",
      "role": "CAO",
      "qualification": "M.A.",
      "bio": "Three decades in financial-services administration. Oversees HR, infrastructure, vendor management and branch coordination — Dhanam's operational backbone.",
      "slot": "dir-selvakumar",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Nambirajan R",
      "role": "CBO",
      "qualification": "B.Com · MBA",
      "bio": "Growth strategist with a sharp focus on market development, customer acquisition and distribution. Drives Dhanam's pan-India expansion and channel partnerships.",
      "slot": "dir-nambi",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Somasundaram G",
      "role": "CS",
      "qualification": "B.Com · LLB · FCS",
      "bio": "Fellow Company Secretary with 25+ years in corporate secretarial practice. Anchors Dhanam's board governance, regulatory filings and company-law matters.",
      "slot": "dir-somasundaram",
      "show": true,
      "founder": false
    }
  ],

  "team": [
    { "name": "Mr. Pathmanathan D",   "role": "VP · Business",            "qualification": "B.E., M.Eng.Sc.", "slot": "team-pathmanathan", "show": true },
    { "name": "Mr. Sridhar M P",      "role": "VP · Gold",                "qualification": "M.Tech.",         "slot": "team-sridhar",      "show": true },
    { "name": "Mr. Gowtham D S",      "role": "VP · LAP",                 "qualification": "B.B.A., L.L.B.",  "slot": "team-gowtham",      "show": true },
    { "name": "Mr. Raju P",           "role": "Head of Operations · North","qualification": "B.A.",           "slot": "team-raju",         "show": true },
    { "name": "Mr. Prem Karnan",      "role": "VP · Tech",                "qualification": "B.E.",            "slot": "team-prem",         "show": true },
    { "name": "Mr. Harisudhan D",     "role": "AVP · Business",           "qualification": "B.Tech.",         "slot": "team-harisudhan",   "show": true },
    { "name": "Mr. Eashwar Ram K",    "role": "AVP · Tech",               "qualification": "B.Tech.",         "slot": "team-eashwar",      "show": true },
    { "name": "Mr. Srinish D",        "role": "AVP · Digital & Social",   "qualification": "M.B.A.",          "slot": "team-srinish",      "show": true },
    { "name": "Mr. Thivya Darssan E", "role": "AVP · Accounts",           "qualification": "B.M.S.",          "slot": "team-thivya",       "show": true }
  ],

  "aceInvestors": [
    { "name": "Dr. Manivannan R",            "tag": "Radiologist, UAE" },
    { "name": "Mr. Sanjay Malhotra",         "tag": "Rtd., London Stock Exchange" },
    { "name": "Mr. Karnan Shanmugam",        "tag": "Director of Engg., Intel, Malaysia" },
    { "name": "Mr. Samy K",                  "tag": "Associate Partner, IBM India" },
    { "name": "Mr. Vairavan A L",            "tag": "Director, Sree Alagulakshmi Finance, Trichy" },
    { "name": "Mr. Sivashanmugam P",         "tag": "Kotak Securities, Erode" },
    { "name": "CA. Mohan Raj T M",           "tag": "Chartered Accountant, CBE" },
    { "name": "CA. Vishwanath T M",          "tag": "Chartered Accountant, CBE" },
    { "name": "CA. Shanmugam P",             "tag": "Chartered Accountant, Namakkal" },
    { "name": "Dr. Krishna Kumar T",         "tag": "Founder, Sabari Eye Hospital, P.Velur" },
    { "name": "Dr. Senthil Kumar K",         "tag": "Founder, Gateway Hospitals, CBE" },
    { "name": "Dr. Subramanian N",           "tag": "Rtd. Income Tax Officer, CBE" },
    { "name": "Dr. Sudhakaran K",            "tag": "President, Rajshree Biosolutions, Theni" },
    { "name": "Dr. Umashankar K K",          "tag": "Director, Vimalaa Dental Health Care, Erode" },
    { "name": "Mr. Kuppuraj S",              "tag": "Rtd. Senior Manager, IOB, CBE" },
    { "name": "Mr. Mahendran V",             "tag": "Director, Realty One Shelters, CBE" },
    { "name": "Mr. Vivek Anandh D",          "tag": "VP — JP Morgan Chase, Bangalore" },
    { "name": "Mr. Dinesh Thangamuthu",      "tag": "Muthu Constructions, Erode" },
    { "name": "Mr. Kuppusamy M",             "tag": "Founder, M P Selli Constructions, Erode" },
    { "name": "Mr. Venkatachalamurthi S",    "tag": "Vinayaka Electro Alloys, Perundurai" },
    { "name": "Mr. Dhanasekaran A",          "tag": "Valuemax Corporate Services, Erode" },
    { "name": "Mr. Senthilkumar G",          "tag": "MD, FreshNet Farms Pvt. Ltd., Pollachi" },
    { "name": "Mr. Balakrishnan Parthiban",  "tag": "Classiqu Building Engravers, CBE" },
    { "name": "Mr. Kamalasekar P",           "tag": "Social Activist & Ex-Journalist, Namakkal" },
    { "name": "Mr. Eswaramoorthi P M",       "tag": "Founder, Aathira Jewels, Erode" },
    { "name": "Mr. Govindhasamy S",          "tag": "Gem Housing, CBE" },
    { "name": "Mr. Prabhakaran T",           "tag": "Standard Roofs, India & USA" },
    { "name": "Mr. Dinesh M S",              "tag": "Clued In, Mathampatti" },
    { "name": "Mr. Balasubraniam M S",       "tag": "Shri Shendhur Poultry Farms, Namakkal" },
    { "name": "Mr. Keerthi Vardhan Singhania", "tag": "Denmax International, CBE" },
    { "name": "Mr. Vijayakumar S",           "tag": "Financial Advisor, Rasipuram" }
  ],

  "growth": {
    "aumTodayCr": 150,
    "aumYr5TargetCr": 2500,
    "branchesTodayCount": 12,
    "branchesYr5TargetCount": 150,
    "customersTodayK": 25,
    "customersYr5TargetK": 500,
    "nbfcSectorCagrPct": 18,
    "lapMarketCagrPct": 13.3,
    "goldMarketCagrPct": 18,
    "macroPoints": [
      { "label": "NBFC sector AUM",     "stat": "Crosses ₹50 lakh crore by FY27", "cite": "CRISIL — 18% growth FY26-FY27" },
      { "label": "Gold loan market",    "stat": "Gold could hit $10,000/oz by 2030", "cite": "Yardeni Research" },
      { "label": "LAP market",          "stat": "$0.76T → $1.59T by 2030 (13.3% CAGR)", "cite": "TechSci Research, IMARC" },
      { "label": "Locker demand",       "stat": "Multi-year wait-lists at PSU banks",   "cite": "Industry observation" }
    ],
    "ourTrajectory": [
      { "label": "AUM",        "today": "₹150 Cr",  "year5": "₹2,500 Cr",  "multiple": "16×" },
      { "label": "Branches",   "today": "12",        "year5": "150+",        "multiple": "12×" },
      { "label": "Customers",  "today": "25,000+",   "year5": "5,00,000+",   "multiple": "20×" }
    ]
  },

  "competitors": [
    {
      "product": "Gold loans",
      "us": { "headline": "Hyper-local · 30-minute disbursal", "sub": "Branch-level credit decisions, in your language." },
      "peers": [
        { "name": "Muthoot Finance",  "focus": "Single-product specialist" },
        { "name": "Manappuram Finance", "focus": "Single-product specialist" }
      ]
    },
    {
      "product": "Loan against property",
      "us": { "headline": "Self-employed underwriting", "sub": "Cash-flow at the branch — not bureau-only." },
      "peers": [
        { "name": "Five Star",  "focus": "Small-ticket LAP only" },
        { "name": "Veritas",    "focus": "MSME / LAP only" }
      ]
    },
    {
      "product": "Private lockers",
      "us": { "headline": "Better than a bank locker", "sub": "Hospitality-grade service. Armed security. Locker + lending under one roof." },
      "peers": [
        { "name": "PSU bank lockers", "focus": "Multi-year wait-lists" },
        { "name": "Sakthi",           "focus": "Locker specialist · regional" }
      ]
    },
    {
      "product": "Personal loans",
      "us": { "headline": "Existing customers only", "sub": "12+ months of clean repayment history required." },
      "peers": [
        { "name": "Bajaj Finance",  "focus": "Multi-product retail giant" },
        { "name": "Shriram",        "focus": "Vehicle + retail credit" }
      ]
    }
  ],

  "promise": {
    "headline": "Your money will grow with us.",
    "subhead": "Building a fintech on the bones of a 10-year-old NBFC.",
    "mrf": {
      "kicker": "If you missed MRF, you have Dhanam.",
      "stat": "₹270 Cr",
      "statSub": "20,000 MRF shares · 1990 → today",
      "detail": "₹70 lakh in MRF in 1990 is worth ~₹270 crore today. The early ones got rich. The waiters watched. The window doesn't open twice — it's open now.",
      "cite": "Source: NSE/BSE · April 2026"
    },
    "pillars": [
      { "title": "Multi-product NBFC",        "body": "Five products under one roof. Diversified revenue, lower risk." },
      { "title": "Fintech inside an NBFC",    "body": "RBI-licensed credit chassis. Data, AI and modern operations." },
      { "title": "Compounding alongside us",  "body": "Your capital sits next to ours. We win together — or not at all." }
    ]
  }
};/*EDITMODE-END*/

window.INVESTOR_DATA = INVESTOR_DATA;
