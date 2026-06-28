# ClearFlow RCM — Next.js + Sanity CMS Demo

A demo site showcasing **Revenue Cycle Management (RCM) services** built with:

- **Next.js 16** (App Router, server components)
- **Sanity CMS** (headless content management via GROQ)
- **Tailwind CSS v4**
- **Lucide React** (SVG icon library)
- **TypeScript** throughout

> This is a demonstration project. All data defaults to mock values so the site works immediately without a Sanity account. Follow the steps below to connect your own Sanity project.

---

## Quick Start (mock data — no Sanity needed)

```bash
cd nextjs-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and navigate to `/rcm-services`.

---

## Connect a Real Sanity Project

### 1. Create a Sanity project

Go to [https://www.sanity.io/get-started](https://www.sanity.io/get-started) and sign up or log in.

Click **"Create new project"**, give it a name (e.g. `clearflow-rcm`), and choose the **"Clean project (no predefined schema)"** template.

Note your **Project ID** — you'll need it shortly. It looks like `abc12def`.

---

### 2. Install the Sanity Studio

In a separate folder (sibling to `nextjs-app`), scaffold a new Sanity Studio:

```bash
npm create sanity@latest -- --project <YOUR_PROJECT_ID> --dataset production --template clean
```

Or add Studio inside this repo:

```bash
npx sanity@latest init --project <YOUR_PROJECT_ID> --dataset production
```

---

### 3. Define the schemas

Inside your Studio project, create two schema files:

**`schemas/heroContent.ts`**
```ts
export default {
  name: 'heroContent',
  title: 'Hero Content',
  type: 'document',
  fields: [
    { name: 'badge',        type: 'string', title: 'Badge Text' },
    { name: 'headline',     type: 'text',   title: 'Headline (use \\n for line break)' },
    { name: 'subheadline',  type: 'text',   title: 'Subheadline' },
    { name: 'ctaText',      type: 'string', title: 'CTA Button Label' },
    {
      name: 'stats',
      type: 'array',
      title: 'Stats',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string', title: 'Value (e.g. 98.2%)' },
          { name: 'label', type: 'string', title: 'Label (e.g. Clean Claim Rate)' },
        ],
      }],
    },
  ],
}
```

**`schemas/rcmService.ts`**
```ts
export default {
  name: 'rcmService',
  title: 'RCM Service',
  type: 'document',
  fields: [
    { name: 'title',            type: 'string', title: 'Service Title' },
    {
      name: 'iconKey',
      type: 'string',
      title: 'Lucide Icon Key',
      description: 'One of: ShieldCheck, ClipboardList, Send, RefreshCw, HandshakeIcon, BarChart3',
    },
    { name: 'shortDescription', type: 'text',   title: 'Short Description' },
    { name: 'order',            type: 'number', title: 'Display Order' },
    {
      name: 'benefits',
      type: 'array',
      title: 'Benefits',
      of: [{ type: 'string' }],
    },
    {
      name: 'stat',
      type: 'object',
      title: 'Stat',
      fields: [
        { name: 'value', type: 'string', title: 'Value (e.g. 72%)' },
        { name: 'label', type: 'string', title: 'Label (e.g. Faster Turnaround)' },
      ],
    },
  ],
}
```

Register both in `schemas/index.ts`:

```ts
import heroContent from './heroContent'
import rcmService from './rcmService'

export const schemaTypes = [heroContent, rcmService]
```

---

### 4. Add API read token (for non-public datasets)

In the [Sanity dashboard](https://www.sanity.io/manage):

1. Open your project → **API** tab → **Tokens**
2. Click **"Add API token"** → name it `next-read` → role **Viewer**
3. Copy the token

---

### 5. Set environment variables

Copy `.env.local` and fill in your values:

```bash
# nextjs-app/.env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Only needed if your dataset is private (not needed for public datasets)
SANITY_API_TOKEN=your_read_token_here
```

---

### 6. Uncomment the live queries

In `lib/sanity.ts`, swap out the mock data for real GROQ queries:

```ts
export async function getRCMServices(): Promise<RCMService[]> {
  return client.fetch(`*[_type == "rcmService"] | order(order asc)`)
}

export async function getHeroContent(): Promise<HeroContent> {
  return client.fetch(`*[_type == "heroContent"][0]`)
}
```

---

### 7. Seed content in Sanity Studio

Start the Studio (`npm run dev` inside the studio folder), open [http://localhost:3333](http://localhost:3333), and create:

- One **Hero Content** document (the mock values in `lib/sanity.ts` are a good starting point)
- Six **RCM Service** documents, one per service

---

### 8. Enable Sanity CORS for your domain

In [sanity.io/manage](https://www.sanity.io/manage) → **API** → **CORS origins**, add:

- `http://localhost:3000` (for local dev)
- Your production domain when deploying

---

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Index / landing page
│   └── rcm-services/
│       └── page.tsx        # RCM services page (server component)
├── components/
│   ├── Navbar.tsx          # Fixed top nav with SVG logo
│   ├── HeroSection.tsx     # Hero with stats grid
│   ├── ServicesGrid.tsx    # 3-col card grid (Lucide icons)
│   ├── CTASection.tsx      # Email capture CTA
│   └── Footer.tsx          # Footer with SVG logo
├── lib/
│   └── sanity.ts           # Sanity client, TypeScript types, GROQ queries, mock data
└── .env.local              # Environment variables (never commit real tokens)
```

---

## Deploying to Vercel

```bash
# From the nextjs-app directory
npx vercel
```

Set the environment variables in the Vercel project settings under **Settings → Environment Variables**.

---

## Icon Reference

Service cards use [Lucide React](https://lucide.dev). The `iconKey` field in each Sanity service document maps to a Lucide component name. Current supported keys:

| iconKey        | Icon displayed            |
|----------------|---------------------------|
| `ShieldCheck`  | Shield with checkmark     |
| `ClipboardList`| Clipboard with list       |
| `Send`         | Paper plane / send        |
| `RefreshCw`    | Circular arrows           |
| `HandshakeIcon`| Handshake                 |
| `BarChart3`    | Bar chart                 |

To add more, import the icon in `components/ServicesGrid.tsx` and add it to `ICON_MAP`.
