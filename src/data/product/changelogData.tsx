export interface ChangelogSchema {
  title: string;
  date: string;
  items: string[];
}

export const changelogData: ChangelogSchema[] = [
  {
    title: "Realtime collaboration arrives 🚀",
    date: "2025-09-20",
    items: [
      "Introduced CRDT-powered realtime editing (Yjs).",
      "Presence cursors now show collaborator names and colors.",
      "Offline-first: edits sync when you reconnect.",
      "Added per-block history with undo/redo.",
      "Initial load time reduced by 25% thanks to streaming SSR.",
    ],
  },
  {
    title: "AI Answers beta",
    date: "2025-09-10",
    items: [
      "Launched Ask Atlas: semantic search + grounded answers with citations.",
      "Support for summarizing whole documents or selections.",
      "Tone rewrite suggestions (formal, casual, concise).",
      "Added citation enforcement to prevent hallucinations.",
      "Improved fallback to keyword search if no embeddings found.",
      "Usage analytics to monitor most common queries.",
    ],
  },
  {
    title: "New block types & editor polish",
    date: "2025-08-28",
    items: [
      "Added table, checklist, and callout blocks.",
      "Support for drag-and-drop image and file uploads.",
      "Slash command menu redesigned with keyboard-first UX.",
      "Markdown paste support (headers, bold, code).",
      "Improved copy/paste fidelity from Notion and Google Docs.",
      "Block-level comments now available.",
    ],
  },
  {
    title: "Workspace roles & sharing",
    date: "2025-08-15",
    items: [
      "Introduced role-based access control (Owner, Admin, Editor, Viewer).",
      "Public share links with optional expiry and password.",
      "Audit log for workspace-level actions.",
      "Per-page permissions with invite flows.",
      "Improved error states when removing last workspace owner.",
    ],
  },
  {
    title: "Billing & subscriptions live",
    date: "2025-07-25",
    items: [
      "Stripe integration for per-seat billing.",
      "New subscription tiers: Free, Pro, Enterprise.",
      "Billing dashboard shows active users and invoices.",
      "Added email receipts and invoice PDF download.",
      "Webhook support for subscription events.",
      "Trial management with upgrade prompts.",
    ],
  },
  {
    title: "Mobile experience upgrade",
    date: "2025-07-10",
    items: [
      "Responsive design overhaul for phones and tablets.",
      "Bottom nav for quick doc switching.",
      "Optimized tap targets for slash commands.",
      "Offline-first improvements for mobile Safari.",
      "Reduced bundle size by 18% for faster cold starts.",
    ],
  },
  {
    title: "Search overhaul 🔎",
    date: "2025-06-30",
    items: [
      "Hybrid search (Postgres full-text + pgvector embeddings).",
      "Fuzzy matching for typos and near matches.",
      "Added filters by workspace, user, and date.",
      "Search results highlight matched blocks.",
      "Performance improvements: average query latency < 150ms.",
    ],
  },
  {
    title: "Analytics & usage insights",
    date: "2025-06-12",
    items: [
      "Workspace analytics dashboard shows most viewed pages.",
      "Search queries without results tracked to guide content creation.",
      "Seat usage and activity breakdown.",
      "Admin-only export for compliance reporting.",
      "Visual charts built with Recharts.",
    ],
  },
  {
    title: "Infrastructure & security hardening",
    date: "2025-05-25",
    items: [
      "CSP (Content Security Policy) with nonces enforced.",
      "Same-site cookies for better CSRF protection.",
      "Rate limiting on sensitive endpoints.",
      "Background job queue with Upstash Redis.",
      "Better error boundaries and retry logic.",
      "OpenTelemetry tracing added for API calls.",
      "Improved Postgres backups and monitoring.",
    ],
  },
  {
    title: "Launch! 🎉",
    date: "2025-05-01",
    items: [
      "AtlasNote beta goes live to first 200 teams.",
      "Collaborative editor MVP with text + headings + code blocks.",
      "Initial AI integration: page summarization.",
      "Auth.js login with Google and GitHub.",
      "Postgres + Drizzle ORM foundation with migrations.",
      "Neon database + Supabase storage integrations.",
      "First production deploy on Vercel with preview branches.",
    ],
  },
];
