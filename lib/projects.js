export const projectSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const projects = [
    {
        title: 'Decisionfy',
        description: 'AI data analyst for e-commerce sellers. Upload a CSV or Excel export from Shopify or WooCommerce and ask it questions directly instead of building a dashboard yourself.',
        technologies: ['Next.js', 'Supabase', 'E2B', 'Claude API', 'Cloudflare Pages', 'Polar.sh'],
        link: 'https://decisionfy.com',
        status: 'live',
    },
    {
        title: 'Shakir Portal',
        description: 'Internal HR and payroll system for Shakir Group — employee records, payroll runs, and approvals in one place.',
        technologies: ['Next.js', 'Prisma', 'MongoDB'],
        status: 'private',
    },
    {
        title: 'Amin Energy & Cargo ERP',
        description: 'A 16-module ERP with a client portal, covering operations end to end for an energy and cargo business. Built under LamaTools.',
        technologies: ['Next.js', 'Supabase'],
        status: 'private',
    },
    {
        title: 'Shakir Group web platforms',
        description: 'Four sites for Shakir Group’s corporate presence and business units — including a vehicle fitment lookup I built for Shakir General covering years and models across the Somali market.',
        technologies: ['Next.js 15', 'Cloudflare'],
        link: 'https://shakirgroup.com',
        status: 'live',
    },
    {
        title: 'Core Locum',
        description: 'Site for a UK healthcare recruitment agency.',
        technologies: ['Next.js', 'Framer Motion'],
        status: 'live',
    },
];
