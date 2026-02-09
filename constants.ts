import { TimelineItem, ExpertiseItem, StatItem } from './types';

// Generic placeholder avatar
export const AVATAR_URL = 'https://media.licdn.com/dms/image/v2/D4D03AQHm36D8YRN6pQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688975421143?e=1772064000&v=beta&t=p39EJMgaTc0HVlDRDt0VHNzTtdHA_kzXbBsuHxM2el0';

export const HERO_KEYWORDS = [
    "Great User Experience",
    "Automation & AI",
    "Customer Empathy",
    "The Right Data",
    "Humor",
    "Roadmap",
    "Positioning & Messaging",
    "Iteration",
    "Teamwork",
    "Scalability",
    "Go-to-Market (GTM)",
    "Pricing Strategy",
    "Design Systems",
    "Growth Loops",
    "Stakeholder Alignment",
    "Prioritization",
    "Analytics & Insights",
    "Onboarding & Activation"
];

export const STATS: StatItem[] = [
    { values: ["B2B", "B2C", "B2B2C"], label: "Business Models" },
    { values: ["Web", "Mobile", "SaaS"], label: "Platforms" },
    // For the "roll once" effect to look good like a counter
    { values: ["8+", "9+", "10+"], label: "Years Experience" },
    { values: ["1M", "2M", "3M"], label: "Users Impacted" }
];

export const TECH_TOOLS = [
    { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-3.svg" },
    { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
    { name: "Monday", logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
    { name: "Google Analytics", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
    { name: "GTM", logo: "https://cdn.worldvectorlogo.com/logos/google-tag-manager.svg" },
    { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
    { name: "Pendo", logo: "https://cdn.worldvectorlogo.com/logos/pendo.svg" },
    { name: "Mixpanel", logo: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg" },
    { name: "Make", logo: "https://logo.clearbit.com/make.com" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
    { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
    { name: "Antigravity", logo: "https://logo.clearbit.com/antigravity.agency" },
    { name: "Claude Code", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Anthropic_logo.svg" }
];

export const EXPERTISE: ExpertiseItem[] = [
    {
        icon: "map",
        title: "Strategy & Roadmaps",
        description: "Turning ambiguity into a focused roadmap-from MVP to reliable, enterprise-ready delivery.",
        colSpan: 3,
        variant: "default"
    },
    {
        icon: "trending_up",
        title: "GTM & Growth",
        description: "Positioning, pricing, and launch strategy. Building adoption loops that improve activation, retention, and revenue.",
        colSpan: 3,
        variant: "primary"
    },
    {
        icon: "layers",
        title: "UX & Platform Scale",
        description: "Customer-first UX, design systems, and platform redesign to scale across markets, and devices.",
        colSpan: 3,
        variant: "default"
    },
    {
        icon: "analytics",
        title: "Product Analytics",
        description: "Turning data into business impact that drives revenue, adoption, and retention, and turning it into a clear product roadmap.",
        colSpan: 3,
        variant: "default"
    },
    {
        icon: "smart_toy",
        title: "AI & Automation",
        description: "Driving innovation with AI and automation , reducing friction, and unlocking new product capabilities",
        colSpan: 3,
        variant: "default"
    },
    {
        icon: "groups",
        title: "Leadership & Execution",
        description: "Executive execution and building high-performance product teams.",
        colSpan: 3,
        variant: "dark"
    }
];

export const TIMELINE: TimelineItem[] = [
    {
        id: 1,
        company: "Kerberus Cyber Security",
        role: "Head of Product Analytics",
        period: "2025 - PRESENT",
        description: [
            "Kerberus is the leader in crypto web3 scam protection for B2C",
            "Designed data architecture for product and business analytics",
            "Built Mixpanel analytics foundation"
        ],
        logo: "https://logo.clearbit.com/kerberus.com" 
    },
    {
        id: 2,
        company: "WaveBL",
        role: "Head of Product Growth",
        period: "2023 - 2025",
        description: [
            "WaveBL is the global leader in electronic Bills of Lading (eBL) and blockchain trade documentation.",
            "Drove GTM & product marketing: positioning, pricing, messaging, campaigns.",
            "Owned platform roadmap, focusing on UX/UI, design system implementation, localization, and scalability.",
            "Managed onboarding flows, Knowledge Base, and in-app guides to improve adoption.",
            "Led release management and mentored PMs and cross-functional teams."
        ],
        logo: "https://logo.clearbit.com/wavebl.com"
    },
    {
        id: 3,
        company: "Tarya Fintech",
        role: "Product Team Lead",
        period: "2021 - 2023",
        description: [
            "Tarya Fintech develops loan management and embedded finance solutions for banks and financial institutions.",
            "Led a multi-tenant SaaS lending platform (Loans, Mortgages, BNPL, EWA).",
            "Manage & mentor PMs, BAs, and UX teams across three regions.",
            "Drove customer centric UX research, usability testing, and A/B testing."
        ],
        logo: "https://logo.clearbit.com/taryafintech.com"
    },
    {
        id: 4,
        company: "AWS (Amazon Web Services)",
        role: "Biz Dev & Enterprise Account Manager",
        period: "2019 - 2021",
        description: [
            "Managed strategic accounts in banking , credit card & fintech."
        ],
        logo: "https://logo.clearbit.com/aws.amazon.com"
    },
    {
        id: 5,
        company: "Yael Group",
        role: "Head of Product",
        period: "2017 - 2019",
        description: [
            "Directed award-winning digital mortgage & credit products for Israeli banks."
        ],
        logo: "https://logo.clearbit.com/yaelgroup.com"
    },
    {
        id: 6,
        company: "Bank of Jerusalem",
        role: "Head of Product and digital marketing",
        period: "2014 - 2017",
        description: [
            "Led product & digital marketing for Israel’s innovative challenger bank."
        ],
        logo: "https://logo.clearbit.com/bankjerusalem.co.il"
    },
    {
        id: 7,
        company: "Epsilon Investment House",
        role: "Head of Data Management",
        period: "2009 - 2014",
        description: [
            "Managed Data, BI, CRM, and digital channels for a leading investment firm."
        ],
        logo: "https://logo.clearbit.com/epsilon.co.il"
    }
];