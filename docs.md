# Project Specification: Modern Developer API Documentation Portal

## 1. Executive Summary & Objective
Build a developer-first API documentation platform (inspired by Stripe, Mintlify, and LimeHub API docs) using **Next.js (App Router) + React**. The platform must feature interactive code samples (cURL, Python, Node.js, Lua, etc.), response schema inspectors, copy-to-clipboard utilities, and a clean dark/cyberpunk-minimalist aesthetic.

---

## 2. Core Tech Stack
* **Framework:** Next.js (App Router, latest version)
* **Library:** React (Functional Components + Hooks)
* **Styling:** Tailwind CSS (Dark-mode primary default, zinc/neutral slate palette)
* **Icons:** Lucide React (`lucide-react`)
* **Code Highlighting & Syntax:** `prismjs` or `shiki` / `react-syntax-highlighter`
* **Typography & Content:** Tailwind Typography plugin (`@tailwindcss/typography`) + MDX (`@next/mdx` or `next-mdx-remote`)
* **State Management:** React Context API or Zustand (for active code language tab, theme toggle, and API key memory)

---

## 3. Recommended Project Structure
```text
my-api-docs/
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Main root layout with metadata & providers
│   │   ├── page.tsx                  # Landing or redirect to default doc page
│   │   └── docs/
│   │       ├── layout.tsx            # Documentation layout (Sidebar + Main View)
│   │       └── [slug]/
│   │           └── page.tsx          # Dynamic doc page loader
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Header, search bar trigger, version tag, external links
│   │   │   ├── Sidebar.tsx           # Collapsible category tree navigation
│   │   │   └── TableOfContents.tsx   # On-this-page right-hand outline (H2/H3 anchors)
│   │   ├── docs/
│   │   │   ├── ApiEndpointHeader.tsx # HTTP method tag (GET/POST), full URL, and latency badge
│   │   │   ├── CodeBlockTabs.tsx     # Multi-language snippet switcher (cURL, Python, JS, Lua)
│   │   │   ├── ResponseViewer.tsx    # Success / Error JSON viewer with collapsible sections
│   │   │   ├── ParameterTable.tsx    # Query/Header/Body parameter definitions
│   │   │   ├── Callout.tsx           # Warning, Info, and Tip containers
│   │   │   └── ErrorCodeTable.tsx    # List of status codes, error strings & troubleshooting
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       └── CopyButton.tsx
│   ├── content/                      # Content data (MDX or JSON specs)
│   │   └── endpoints/
│   │       └── bypass-api.mdx
│   ├── lib/
│   │   ├── docs-navigation.ts        # Sidebar tree structure definition
│   │   └── utils.ts                  # Classnames merge (`clsx`, `tailwind-merge`)
│   └── styles/
│       └── globals.css
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Key UI Components & Behavioral Requirements

### A. Layout Structure (Three-Column Layout)
1. **Left Column (Sidebar Navigation):**
   * Pinned/sticky on desktop; slide-out drawer on mobile screens.
   * Grouped items: "Getting Started", "Authentication", "Endpoints", "Error Codes", "SDKs / Scripts".
   * Active link highlighting based on `pathname` and anchor hash.

2. **Center Column (Main Content Area):**
   * Endpoint overview, description, authentication details.
   * Parameter documentation:
     * **Headers** (e.g., `x-api-key: string [required]`)
     * **Query / Body Parameters** (e.g., `url: string [required]`)
   * Detailed explanation of responses, limits, latency, and reset rules.

3. **Right Column (Sticky Code Playground / Inspector & On-This-Page TOC):**
   * Multi-language code request snippets.
   * Synced tab switching (if a user picks "Python", all code widgets switch to Python).
   * Tabbed response preview: `200 OK (Success)` vs `400 / 401 / 429 (Errors)`.
   * Fast "Copy Code" button with visual feedback (`Copied!` tooltip checkmark).

---

## 5. Mandatory Features & Functional Requirements

### 1. Unified Multi-Language Code Switcher
* Support code samples in:
  * **cURL** (Bash)
  * **Python** (`requests`)
  * **Node.js** (`fetch` / `axios`)
  * **Lua** (Roblox `request` / `http_request` / `syn.request`)
* Include an interactive API Key placeholder input:
  * Allow users to paste their test key in a top bar input field.
  * Dynamically inject their key into the snippets in real time (stored in `localStorage` or React state).

### 2. Parameter & Schema Table
* Standardized table format:
  * **Field Name** (Monospace font, e.g., `url`)
  * **Type** (`string`, `number`, `boolean`)
  * **Required/Optional** badge
  * **Description & Example values**

### 3. Error Code Matrix
* Tabular or card layout documenting all custom error responses:
  * `INVALID_KEY` (401 - Key unauthorized/invalid)
  * `EXPIRED` (403 - Subscription ended)
  * `DAILY_LIMIT` (429 - Daily quota reached)
  * `RATE` (429 - Rate limit throttle)
  * `FAILED` / `PROXY` / `NO_URL` (400/500 - Target page issue)

### 4. Interactive Callout Boxes
* Support visual callouts:
  * ⚠️ **Warning:** Note about fresh URLs (e.g., "Do not open Delta URL in browser before passing to API").
  * ℹ️️ **Info:** Key validity duration (e.g., "Generated keys last for 24 hours").
  * ⏱️ **Performance:** Average response time (~7–10s).

---

## 6. Implementation Instructions for the AI Agent

1. **Step 1: Setup Next.js Project**
   * Initialize Next.js with TypeScript and Tailwind CSS.
   * Install dependencies: `lucide-react`, `clsx`, `tailwind-merge`, and a syntax highlighter (`shiki` or `prismjs`).

2. **Step 2: Base UI & Theme System**
   * Configure a dark theme with neutral zinc/slate shades (`#09090b`, `#18181b`, `#27272a`) and accent highlights with a slightly bright but soft purple (e.g., Violet or Indigo shades like `#a78bfa` or `#8b5cf6`).

3. **Step 3: Build Core Components**
   * Create `Sidebar.tsx`, `CodeBlockTabs.tsx`, `ResponseViewer.tsx`, and `ParameterTable.tsx`.
   * Ensure syntax highlighting preserves indentation and provides a clean copy button.

4. **Step 4: Seed Endpoint Content**
   * Populate `/docs/api-bypass` with full content covering:
     * Endpoint path and method
     * Request headers & query strings
     * Multi-language snippets
     * Sample 200 response JSON
     * Comprehensive error list