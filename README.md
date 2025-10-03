# Immer Website

Official website for Immer - an AI-powered platform for industrial design and manufacturing.

## Overview

This is a modern, static Next.js website showcasing Immer's products, team, and investment opportunity. The site features a clean, professional design with AI-inspired elements.

## Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Deployment**: Static Export (can be hosted anywhere)

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── home/        # Home page sections
│   │   ├── team/        # Team page components
│   │   └── contact/     # Contact page components
│   ├── data/            # Data files (team info, etc.)
│   ├── pages/           # Next.js pages
│   │   ├── index.tsx    # Home page
│   │   ├── team.tsx     # Team page
│   │   ├── contact.tsx  # Contact page
│   │   └── 404.tsx      # Custom 404 page
│   └── styles/          # Global styles
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Pages

1. **Home** (`/`) - Main landing page featuring:
   - Hero section with funding information
   - What is Immer
   - Products (Immer AI, Design Platform, Marketplace)
   - Technology & Competitive Advantages
   - Market Opportunity
   - Call to Action

2. **Team** (`/team`) - Leadership team information:
   - Johnson Ye (Founder & CEO)
   - Yiling Chen (Co-Founder & AI Leader)
   - Andy Sun (Co-Founder & Dev Leader)

3. **Contact** (`/contact`) - Contact information:
   - Primary email: johnson@immer3d.com
   - Phone: +1 925 330 2206
   - Investment opportunity details

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Build static export
npm run build
```

The static files will be generated in the `out/` directory.

### Preview Production Build

```bash
# Serve the static export locally
npx serve out
```

## Deployment

The website is configured for static export and can be deployed to:

- **Vercel** (recommended): Simply connect your GitHub repository
- **Netlify**: Deploy the `out` directory
- **GitHub Pages**: Upload the `out` directory
- **Any static hosting**: Upload the `out` directory

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Design System

### Colors

- **Primary Navy**: `#1e3a8a`
- **Orange Accent**: `#f97316`
- **Dark Background**: `#0f172a`
- **Blue**: `#3b82f6`
- **Purple**: `#8b5cf6`
- **Cyan**: `#06b6d4`

### Typography

- **Font Family**: Inter (Google Fonts)
- Responsive font sizes
- Bold headings
- Clean, readable body text

### Components

- Gradient backgrounds
- Cards with hover effects
- Responsive navigation
- Modern button styles
- Icon integration

## Contact

For questions or support:

- **Email**: johnson@immer3d.com
- **Phone**: +1 925 330 2206

## License

Copyright © 2025 Immer. All rights reserved.
