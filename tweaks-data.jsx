// tweaks-data.jsx — single source of truth for the deck.
// Change any value here and every slide / chart re-renders automatically.

const INVESTOR_DATA = /*EDITMODE-BEGIN*/{
  "brand": {
    "name": "Dhanam Investment and Finance",
    "short": "Dhanam",
    "legalName": "Dhanam Investment and Finance Private Limited",
    "tagline": "An RBI-licensed NBFC — building India's most trusted multi-product financial institution. Rooted in communities, powered by our own technology, scaling nationally.",
    "city": "India",
    "hq": "Coimbatore, Tamil Nadu",
    "yearsOperating": "10+",
    "establishedYear": 2018,
    "website": "www.dhanamfinance.com",
    "tollFree": "1800 2025 180",
    "instagram": "@dhanamfin",
    "instagramUrl": "https://www.instagram.com/dhanamfin",
    "whatsapp": "89258 03986"
  },

  "story": {
    "subhead": "From a single branch to an end-to-end fintech across South India — built on trust, innovation and financial inclusion.",
    "brandLine": "means wealth — and to us, that's empowering communities, not just money.",
    "narrative": "Founded in 2016 in Coimbatore, Dhanam Investment and Finance Pvt. Ltd. was born from a vision to bring formal financial services to underserved communities. Starting with microfinance and MFI lending, we recognized the potential to serve rural farmers, small business owners, and working families who faced barriers to accessing credit from traditional banking systems.",
    "journey": [
      { "year": "2016",   "title": "Founded",                 "note": "A single branch — microfinance for the underserved" },
      { "year": "Growth", "title": "Multi-product NBFC",       "note": "Gold loans, LAP & SME finance" },
      { "year": "2026",   "title": "Premium Private Lockers",  "note": "State-of-the-art vault storage" },
      { "year": "Now",    "title": "Giant leaps in technology","note": "Since 2026 — fully fintech, on our own stack", "highlight": true }
    ],
    "values": [
      { "title": "Customer First",        "note": "Your success is our success" },
      { "title": "Trust & Transparency",  "note": "Clear terms, no hidden charges" },
      { "title": "Financial Inclusion",   "note": "Credit for those who need it most" },
      { "title": "Heritage & Innovation", "note": "Tradition meets modern technology" },
      { "title": "Fintech-first",         "note": "Our own apps, automated end to end" }
    ]
  },

  "highlights": {
    "aumCr": 150,
    "branches": "50+",
    "carPct": 40,
    "growthPct": 35,
    "products": 5,
    "customers": "50,000+",
    "productMix": [
      { "label": "Gold loans",            "value": 40 },
      { "label": "Loan against property", "value": 40 },
      { "label": "Personal loans",        "value": 20 }
    ]
  },

  "productCategories": {
    "loans": [
      { "key": "gold",              "label": "Gold loans",                "slot": "about-gold",       "caption": "Instant Gold Loans. Instant Relief." },
      { "key": "lap",               "label": "Loan against property",     "slot": "about-lap",        "caption": "Turn Property into Possibilities.", "imgPos": "center 50%" },
      { "key": "secured-business",  "label": "Secured business loans",    "slot": "about-business",   "caption": "Grow More. Worry Less." },
      { "key": "unsecured",         "label": "Personal loans",            "slot": "about-unsecured",  "caption": "Turn Plans into Reality." }
    ],
    "wealth": [
      { "key": "ncd",     "label": "Non-convertible debentures",     "slot": "about-ncd",     "caption": "Stable Returns. Stronger Tomorrow." },
      { "key": "lockers", "label": "Private lockers",                "slot": "about-lockers", "caption": "Lock It. Leave It. Live Worry-Free." }
    ]
  },

  "tech": {
    "appName": "Dhanamfin",
    "appPlatforms": "iOS · Android · Web",
    "headline": "Engineered by us, crafted for you.",
    "subhead": "A fully digital lending platform — built and run entirely in-house.",
    "appSubtitle": "Invest, save, borrow and bank — apply, e-sign and pay in minutes. No branch visit needed.",
    "appChips": ["Instant e-KYC", "e-Signing", "UPI & auto-pay", "Immediate disbursal"],
    "appStoreUrl": "https://apps.apple.com/in/app/dhanamfin/id6766440740",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.dhanam.lockerhub",
    "capabilities": [
      { "label": "NCD investments",      "note": "Subscribe & track secured debentures" },
      { "label": "Private lockers",      "note": "Book & manage vault access" },
      { "label": "Gold savings schemes", "note": "Enrol & pay in, gram by gram" },
      { "label": "Personal loans",       "note": "Apply, e-sign & repay in-app" }
    ],
    "pipeline": [
      { "step": "Onboard",  "note": "Digital KYC & verification" },
      { "step": "e-Sign",   "note": "Paperless agreements" },
      { "step": "Disburse", "note": "Straight-to-bank payouts" },
      { "step": "Collect",  "note": "Automated repayments" },
      { "step": "Service",  "note": "In-app LMS & support" }
    ],
    "buildHeadline": "Run as a fintech, end to end.",
    "buildLead": "From first tap to final collection — automated, paperless, on-app:",
    "buildBlocks": [
      { "label": "Zero-touch onboarding",  "note": "Digital KYC to disbursal — no manual intervention" },
      { "label": "Paper-free branches",     "note": "App-first operations, fully paperless" },
      { "label": "App-based servicing",     "note": "Customers and staff, entirely on-app" },
      { "label": "Integrated core banking", "note": "LOS, LMS & core ledger — one platform" }
    ],
    "stpLine": "No manual intervention — from onboarding to collections.",
    "metrics": [
      { "value": "100%", "label": "Digital onboarding" },
      { "value": "100%", "label": "Paperless branches" },
      { "value": "24×7", "label": "App-based access" }
    ],
    "appIcon": "assets/dhanamfin-icon.png"
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
    "headline": "Dhanam Private Vaults — where your most precious possessions meet uncompromising protection.",
    "intro": "We do not offer a mere locker. We offer a sovereign-grade sanctuary — where biometric precision, armed custodianship and five-star hospitality converge. Designed for those who expect nothing less than the finest.",
    "features": [
      { "title": "Triple-layer biometric authentication",  "body": "Military-grade fingerprint and dual-custodian key protocol. No single point of failure. No exceptions." },
      { "title": "Round-the-clock armed custodianship",    "body": "Licensed, trained security personnel on premises at all hours — exceeding every benchmark set by the RBI and industry peers." },
      { "title": "Concierge-class welcome",                "body": "From the moment you arrive — a private attendant and a dedicated vault suite. You are honoured as a guest, never managed as a number." },
      { "title": "Large-format premium lockers",           "body": "Spacious, large-sized vault compartments for families, collections and high-value assets — available at Dhanam Private Vaults. Designed for those with more to protect." },
      { "title": "Appointment-based after-hours access",   "body": "Pre-scheduled private sessions outside standard banking hours. We open the vault at your convenience, not ours." },
      { "title": "Sovereign private chambers",             "body": "Sound-isolated, staff-free review rooms where your privacy is absolute — no observation, no queue, no compromise." }
    ]
  },

  "directors": [
    {
      "name": "Dr. CA. Gokul Govindarajan",
      "role": "Director · Governance",
      "qualification": "M.Com · FCA · CS · PhD",
      "bio": "Promoter-Director since inception. Two decades across chartered accountancy, company secretarial and corporate law — the architect of Dhanam's governance, compliance and strategic posture. Holds a doctorate in banking and finance. Deep roots in the banking and finance ecosystem, spanning grassroots lending, financial inclusion and community credit.",
      "slot": "dir-gokul",
      "show": true,
      "founder": true
    },
    {
      "name": "Mr. Avinash Gopalakrishnan",
      "role": "Director · Strategy & Operations",
      "qualification": "MBA",
      "bio": "Serial entrepreneur with 15+ years of operating experience. Built Dhanam's day-to-day execution engine from scratch — branches, products, distribution. The hands-on operating partner alongside the next generation of leadership.",
      "slot": "dir-avinash",
      "show": true,
      "founder": true
    },
    {
      "name": "Mr. Sankar Venkataraman",
      "role": "Director · Finance & Risk",
      "qualification": "B.Sc. · FCA",
      "bio": "Fellow Chartered Accountant with deep audit, taxation and risk-advisory expertise across regulated financial institutions. Long-standing relationships across India's NBFC and MFI ecosystem, including personal connections to the founding fathers of microfinance. Anchors Dhanam's financial discipline and audit readiness.",
      "slot": "dir-sankar",
      "show": true,
      "founder": true
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
      "name": "Mr. Suren S",
      "role": "Director · CEO · Technology & Strategy",
      "qualification": "B.E.",
      "bio": "Engineer and former CEO of two technology companies. 8+ years in machine learning and data sciences across the United States, delivering AI-led solutions for Home Depot, Walmart and global banking clients. Drives Dhanam's digital transformation, scalable infrastructure and intelligent data-led decisions.",
      "slot": "dir-suren",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Selvakumar D",
      "role": "CAO",
      "qualification": "M.A.",
      "bio": "Three decades in financial-services administration. Oversees infrastructure, vendor management and branch coordination — Dhanam's operational backbone.",
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
      "bio": "Fellow Company Secretary with 25+ years in corporate secretarial practice. Led IPO readiness and capital-markets compliance for regulated entities. Anchors Dhanam's board governance, regulatory filings and company-law matters.",
      "slot": "dir-somasundaram",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Pathmanathan D",
      "role": "Director · Business",
      "qualification": "B.E., M.Eng.Sc.",
      "bio": "Veteran business leader with deep experience in NBFC operations and branch network expansion. Spearheads Dhanam's business development strategy, client relationships and cross-product revenue growth across markets.",
      "slot": "dir-pathmanathan",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Sivashanmugam P",
      "role": "Director",
      "qualification": "MBA",
      "bio": "Capital markets and securities specialist with 30+ years of experience in share market and trading. Business Associate at Kotak Securities, Erode. Brings deep investor relations, wealth management and financial markets expertise to Dhanam's board.",
      "slot": "dir-sivashanmugam",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Raju P",
      "role": "Head of Operations · North",
      "qualification": "B.A.",
      "bio": "Leads Dhanam's operations across the northern region — branch coordination, service delivery and on-ground execution. Ensures the expanding northern network holds consistent operational standards and a customer-first approach as Dhanam scales beyond its southern base.",
      "slot": "team-raju",
      "show": true,
      "founder": false
    },
    {
      "name": "Mr. Govindasamy S",
      "role": "Director · Property & LAP",
      "qualification": "B.A.",
      "bio": "Three decades of expertise in property analysis, valuation and construction. A sharp eye for assessing collateral quality and market value anchors Dhanam's loan-against-property underwriting and real-estate-backed lending. Deep networks across the construction and property ecosystem sharpen credit and risk decisions.",
      "slot": "dir-govindasamy",
      "show": true,
      "founder": false
    }
  ],

  "team": [
    { "name": "Mr. Pathmanathan D",   "role": "VP · Business",            "qualification": "B.E., M.Eng.Sc.", "slot": "team-pathmanathan", "show": false },
    { "name": "Mr. Raju P",           "role": "Head of Operations · North","qualification": "B.A.",           "slot": "team-raju",         "show": true, "imgPos": "center 5%" },
    { "name": "Mr. Sridhar M P",      "role": "VP · Gold",                "qualification": "M.Tech.",         "slot": "team-sridhar",      "show": true },
    { "name": "Mr. Gowtham D S",      "role": "VP · LAP",                 "qualification": "B.B.A., L.L.B.",  "slot": "team-gowtham",      "show": true, "imgZoom": 1.25 },
    { "name": "Mr. Prem Karnan",      "role": "VP · Tech",                "qualification": "B.E.",            "slot": "team-prem",         "show": true },
    { "name": "Mr. Eashwar Ram K",    "role": "AVP · Tech",               "qualification": "B.Tech.",         "slot": "team-eashwar",      "show": true },
    { "name": "Mr. Harisudhan D",     "role": "AVP · Business",           "qualification": "B.Tech.",         "slot": "team-harisudhan",   "show": true },
    { "name": "Mr. Srinish D",        "role": "AVP · Digital & Social",   "qualification": "M.B.A.",          "slot": "team-srinish",      "show": true },
    { "name": "Mr. Thivya Darssan E", "role": "AVP · Accounts",           "qualification": "B.M.S.",          "slot": "team-thivya",       "show": true }
  ],

  "aceInvestors": [
    { "name": "CA. Mohan Raj T M",           "tag": "Chartered Accountant, CBE" },
    { "name": "CA. Vishwanath T M",          "tag": "Chartered Accountant, CBE" },
    { "name": "Dr. Krishna Kumar T",         "tag": "Founder, Sabari Eye Hospital, P.Velur" },
    { "name": "Dr. Manivannan R",            "tag": "Qatar" },
    { "name": "Mr. Karnan Shanmugam",        "tag": "Director of Engg., Intel, Malaysia" },
    { "name": "Dr. Senthil Kumar K",         "tag": "Founder, Gateway Hospitals, CBE" },
    { "name": "Dr. Sudhakaran K",            "tag": "President, Rajshree Biosolutions, Theni" },
    { "name": "Mr. Palanisamy D",            "tag": "Sri Sakthi Tyres, Erode" },
    { "name": "Mr. Dinesh Thangamuthu",      "tag": "Muthu Constructions, Erode" },
    { "name": "CA. Shanmugam P",             "tag": "Chartered Accountant, Namakkal" },
    { "name": "Mr. Samy K",                  "tag": "Associate Partner, IBM India" },
    { "name": "Mr. Vivek Anandh D",          "tag": "VP — JP Morgan Chase, Bangalore" },
    { "name": "Dr. Subramanian N",           "tag": "Rtd. Income Tax Officer, CBE" },
    { "name": "Dr. Umashankar K K",          "tag": "Director, Vimalaa Dental Health Care, Erode" },
    { "name": "Mr. Sanjay Malhotra",         "tag": "Rtd., London Stock Exchange" },
    { "name": "Mr. Mahendran V",             "tag": "Director, Realty One Shelters, CBE" },
    { "name": "Mr. Murthy Nanjan N",         "tag": "Western Hill Villas, Kothagiri" },
    { "name": "Mr. Kuppuraj S",              "tag": "Rtd. Senior Manager, IOB, CBE" },
    { "name": "Mr. Kuppusamy M",             "tag": "Founder, M P Selli Constructions, Erode" },
    { "name": "Mr. Venkatachalamurthi S",    "tag": "Vinayaka Electro Alloys, Perundurai" },
    { "name": "Mr. Dhanasekaran A",          "tag": "Valuemax Corporate Services, Erode" },
    { "name": "Mr. Senthilkumar G",          "tag": "MD, FreshNet Farms Pvt. Ltd., Pollachi" },
    { "name": "Mr. Vairavan A L",            "tag": "Director, Sree Alagulakshmi Finance, Trichy" },
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
    "aumTodayCr": 250,
    "aumYr5TargetCr": 2500,
    "branchesTodayCount": 50,
    "branchesYr5TargetCount": 200,
    "customersTodayK": 50,
    "customersYr5TargetK": 500,
    "nbfcSectorCagrPct": 18,
    "lapMarketCagrPct": 13.3,
    "goldMarketCagrPct": 18,
    "macroPoints": [
      { "label": "NBFC sector AUM",     "stat": "Crosses ₹50 lakh crore by FY27", "cite": "CRISIL — 18% growth FY26-FY27" },
      { "label": "Gold loan market",    "stat": "Gold could hit $10,000/oz by 2030", "cite": "Yardeni Research" },
      { "label": "LAP market",          "stat": "₹76 lakh crore → ₹160 lakh crore by 2030 (13.3% CAGR)", "cite": "TechSci Research, IMARC" },
      { "label": "Locker demand",       "stat": "Multi-year wait-lists at PSU banks",   "cite": "Industry observation" }
    ],
    "current": [
      { "label": "AUM",         "value": "₹250 Cr" },
      { "label": "Branches",    "value": "50+" },
      { "label": "Customers",   "value": "50,000+" },
      { "label": "Share price", "value": "₹100" }
    ]
  },

  "businessModel": {
    "subhead": "Two engines under one roof — a proven, secured lending book, compounding through a paperless, AI-driven fintech layer.",
    "conventional": {
      "label": "Conventional model",
      "tag": "Proven · secured · cash-generating",
      "items": [
        { "name": "Gold loans",          "note": "Highest-LTV, 30-minute disbursal, fully secured" },
        { "name": "Loan against property","note": "Property-backed credit for the self-employed" },
        { "name": "Private lockers",      "note": "Recurring fee income, zero credit risk" },
        { "name": "Personal loans",       "note": "Fast, flexible, repayment-track-record based" },
        { "name": "Bill discounting",     "note": "Short-tenor working-capital & invoice finance" }
      ]
    },
    "fintech": {
      "label": "Fintech model",
      "tag": "AI-driven · digital · scalable",
      "items": [
        { "name": "Digi-gold",         "note": "Buy, save & pledge gold digitally, in-app" },
        { "name": "AI credit analysis","note": "Data-led underwriting & risk scoring" },
        { "name": "App-based services","note": "Personal Loans, NCD, Lockers, Gold Schemes" },
        { "name": "Cross-selling",     "note": "AI-matched products across the customer base" },
        { "name": "Upselling",         "note": "Right-size & top-up offers, driven by usage data" }
      ]
    },
    "footer": "One customer base, two compounding engines — secured cash flows today, AI-led scale tomorrow."
  },

  "risks": {
    "subhead": "Conservative by design — every material risk identified, owned and actively mitigated.",
    "items": [
      { "risk": "Credit risk",            "mitigation": "The large majority of the book is secured against gold or property at conservative LTVs. AI-assisted, branch-level underwriting, a granular small-ticket book and active monitoring keep concentration and default risk low." },
      { "risk": "Gold-price risk",        "mitigation": "Loans capped at prudent LTV margins with daily mark-to-market and short (3–12 month) tenors. Disciplined re-pledge limits and timely auctions protect principal even through sharp gold corrections." },
      { "risk": "Liquidity / ALM risk",   "mitigation": "Funding diversified across banks, NCDs and own capital, with assets and liabilities tenor-matched. A 40% capital-adequacy ratio — well above the RBI minimum — and maintained liquidity buffers absorb shocks." },
      { "risk": "Regulatory & compliance","mitigation": "RBI-licensed NBFC with an in-house Company Secretary and compliance team. Regular audits, timely filings and IPO-grade governance keep us continuously audit-ready." },
      { "risk": "Operational risk",       "mitigation": "Paperless, automated workflows on a single integrated core remove manual error. Standardised low-touch branch processes, maker-checker controls and centralised oversight contain operational exposure." },
      { "risk": "Technology & cyber",     "mitigation": "Built and run on our own engineering stack — no third-party core dependency. Role-based access, encryption in transit and at rest, regular backups and continuous monitoring." }
    ]
  },

  "competitors": [
    {
      "product": "Gold loans",
      "us": { "headline": "Hyper-local · 30-minute disbursal", "sub": "Branch-level credit decisions, clearly explained." },
      "peers": [
        { "name": "Muthoot Finance",  "focus": "Single-product specialist" },
        { "name": "Manappuram Finance", "focus": "Single-product specialist" },
        { "name": "Gold-loan fintechs", "focus": "App-only · e.g. Rupeek" }
      ]
    },
    {
      "product": "Loan against property",
      "us": { "headline": "Self-employed underwriting", "sub": "Fastest disbursement in 3–4 days — cash-flow underwritten at the branch, not bureau-only." },
      "peers": [
        { "name": "Five Star",  "focus": "Small-ticket LAP only" },
        { "name": "Veritas",    "focus": "MSME / LAP only" },
        { "name": "Banks & HFCs", "focus": "Bureau-only · slow" }
      ]
    },
    {
      "product": "Private lockers",
      "us": { "headline": "The sovereign alternative to a bank locker", "sub": "Large-sized lockers, concierge-class service, armed custodianship and seamless wealth integration — all under one Dhanam roof." },
      "peers": [
        { "name": "PSU bank lockers", "focus": "Multi-year wait-lists" },
        { "name": "Sakthi",           "focus": "Locker specialist · regional" },
        { "name": "Private banks",    "focus": "Premium · wait-listed" }
      ]
    },
    {
      "product": "Personal loans",
      "us": { "headline": "Fast, flexible personal credit", "sub": "Swift disbursal backed by a verified repayment track record — credit that rewards loyalty." },
      "peers": [
        { "name": "Bajaj Finance",  "focus": "Multi-product retail giant" },
        { "name": "Shriram",        "focus": "Vehicle + retail credit" },
        { "name": "App-only fintechs", "focus": "Thin-file · high-rate" }
      ]
    }
  ],

  "promise": {
    "headline": "Your money will grow with us.",
    "subhead": "Building a fintech on the bones of a 10-year-old NBFC.",
    "wipro": {
      "kicker": "If you missed Wipro's 1980 IPO, you have Dhanam today.",
      "detail": "An investment of ₹10,000 in Wipro's 1980 IPO — held patiently — grew into a fortune of over ₹598 crores by late 2024. The early investors who believed in a disciplined, quietly compounding enterprise were the ones who built generational wealth.",
      "cite": "Source: Wipro historical performance data · NSE/BSE"
    },
    "dhanam": {
      "kicker": "This is your Dhanam moment.",
      "detail": "Dhanam is a rare early-entry opportunity into one of India's most carefully run regional NBFCs — now scaling into a national, multi-product financial institution. RBI-licensed. Profit-making. The architecture is built. The trajectory is clear. Those who partner with us at the ground floor compound the most.",
      "note": "The window to enter at the earliest stage does not remain open indefinitely."
    },
    "pillars": [
      { "title": "Multi-product NBFC",        "body": "Five products under one roof. Diversified revenue, resilient by design." },
      { "title": "Fintech inside an NBFC",    "body": "RBI-licensed credit chassis. Data, AI and modern operations." },
      { "title": "Compounding alongside us",  "body": "Your capital sits next to ours. We win together." }
    ]
  }
};/*EDITMODE-END*/

window.INVESTOR_DATA = INVESTOR_DATA;
