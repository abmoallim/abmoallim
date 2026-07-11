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
        description: 'Internal HR and payroll system for Shakir Group: employee records, payroll runs, and approvals in one place.',
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
        description: 'Four sites for Shakir Group’s corporate presence and business units, including a vehicle fitment lookup I built for Shakir General covering years and models across the Somali market.',
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
    {
        title: 'AI Chat App',
        description: 'Real-time chat app for talking to GPT-4o, built with PydanticAI and FastAPI. Streams responses word by word and persists conversation history.',
        technologies: ['Python', 'FastAPI', 'PydanticAI', 'OpenAI API'],
        link: 'https://github.com/abmoallim/chatai',
        status: 'live',
    },
    {
        title: 'Customer Support API',
        description: 'Backend API for managing support tickets: creation, prioritization, assignment, and AI-assisted responses using Google\'s Generative AI.',
        technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'Google Generative AI'],
        link: 'https://github.com/abmoallim/customer_support_api',
        status: 'live',
    },
    {
        title: 'Web Scraper',
        description: 'A dashboard for scraping data from websites on demand. Next.js frontend with Clerk auth, backed by an Express and Playwright scraping service with MongoDB for storage.',
        technologies: ['Next.js', 'Express', 'Playwright', 'MongoDB', 'Clerk'],
        link: 'https://github.com/abmoallim/scraper',
        status: 'live',
    },
];
