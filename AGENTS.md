# AGENTS.md — NOVANOX

This file is the operating contract for every human or AI agent contributing to this repository. Read it completely before changing code.

## 1. Project identity

- **Product name:** NOVANOX
- **Organisation:** communication and digital-creation agency
- **Repository:** `Leloucher95/novanox`
- **Primary product language:** French
- **Framework:** Next.js 16 with the App Router, React 19 and strict TypeScript
- **Database and backend services:** Firebase

NOVANOX is not a simple brochure website. It is a multi-space business platform that centralises the customer relationship and project-delivery workflow:

1. A public acquisition website.
2. A secure client portal.
3. A secure NOVANOX administration back office.

The source brief is stored in `sources/NOVAVOX_Brief_Final_Antigravity.pdf`. The agency strategy is stored in `sources/Quadra_Conseil_Plan_Strategique.pdf`. Visual references are stored in:

- `sources/logo_novanox.jpeg`
- `sources/code_couleur_1.jpeg`
- `sources/code_couleur_2.jpeg`

The brief is the functional reference. When code, assumptions and the brief disagree, document the conflict and follow the brief unless the product owner explicitly decides otherwise.

## 2. Non-negotiable product goals

Every implementation must support at least one of these goals:

- **Acquisition:** turn visitors into qualified prospects and registered clients.
- **Retention:** provide a premium, transparent client experience.
- **Productivity:** replace scattered exchanges across WhatsApp, email and Drive.
- **Operations:** give NOVANOX a real-time view of clients, briefs, projects, files, quotes and invoices.
- **Brand positioning:** present NOVANOX as a modern, reliable and technology-forward agency.

Do not add decorative complexity that does not improve one of these goals.

## 3. Product spaces and route boundaries

Use App Router route groups to keep the three experiences isolated while sharing one codebase.

### Public website

Public, indexable pages:

- `/`
- `/services`
- `/portfolio`
- `/portfolio/[slug]`
- `/a-propos`
- `/blog`
- `/blog/[slug]`
- `/contact`

### Client portal

All client pages live under `/client` and require an authenticated, verified and active account except authentication pages.

Expected routes:

- `/client/register`
- `/client/login`
- `/client/forgot-password`
- `/client/dashboard`
- `/client/brief/new`
- `/client/projects`
- `/client/projects/[id]`
- `/client/invoices`
- `/client/profile`

A client may only read or mutate resources belonging to their own account or company.

### Administration

All administration pages live under `/admin` and are invitation-only.

Expected modules:

- dashboard
- clients
- briefs
- projects
- quotes
- invoices
- services
- portfolio
- blog
- team
- settings

Roles:

- `SUPER_ADMIN`: unrestricted platform and team administration.
- `ADMIN`: clients, briefs, projects, quotes, invoices and content management.
- `EMPLOYEE`: assigned projects and permitted project actions only.
- `CLIENT`: own company data and own business resources only.

Never rely on client-side route hiding for authorisation. Every protected read and mutation must be checked server-side and enforced by Firebase Security Rules where applicable.

## 4. Approved technical direction

### Core

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Server Components by default
- Client Components only when browser state, events, animation or Firebase client SDK features require them
- Route Handlers and Server Actions for trusted server-side operations

This repository uses a recent Next.js version. Before implementing framework-specific behaviour, consult the installed documentation in `node_modules/next/dist/docs/` and current official Next.js documentation.

### Firebase

Firebase replaces the PostgreSQL/Prisma direction from the original brief.

Use:

- **Firebase Authentication** for account identity, email verification and password reset.
- **Cloud Firestore** for application data.
- **Cloud Storage for Firebase** for client assets and NOVANOX deliverables.
- **Firebase Admin SDK** only in server-only modules.
- **Firebase App Check** where supported.
- **Cloud Functions or trusted Next.js server code** for privileged workflows, email triggers, PDF generation and denormalised writes.
- **Firebase Emulator Suite** for local integration testing.

Never expose Firebase Admin credentials to the browser. Never import a server-only module from a Client Component.

## 5. Target repository architecture

```text
app/
  (public)/
  (auth)/
  (client)/
  (admin)/
  api/
components/
  ui/
  shared/
  public/
  client/
  admin/
features/
  auth/
  companies/
  services/
  briefs/
  projects/
  messaging/
  files/
  quotes/
  invoices/
  portfolio/
  blog/
  notifications/
lib/
  firebase/
  env/
  security/
  validation/
  email/
  pdf/
  seo/
  utils/
types/
config/
public/
  brand/
tests/
  unit/
  integration/
  e2e/
firebase/
  firestore.rules
  storage.rules
  firestore.indexes.json
```

### Architecture rules

- Keep route files thin. Business logic belongs in `features/` or `lib/`.
- Organise domain-specific code by feature.
- Put reusable low-level UI primitives in `components/ui`.
- Do not create a generic `helpers.ts` dumping ground.
- Prefer named exports for reusable modules.
- Avoid deep relative imports; use the `@/` alias.
- Do not import another feature's internal files directly.

## 6. Firestore domain model

Primary collections:

- `users`
- `companies`
- `services`
- `briefs`
- `projects`
- `quotes`
- `invoices`
- `portfolioItems`
- `articles`
- `notifications`
- `auditLogs`

Recommended subcollections:

- `projects/{projectId}/steps`
- `projects/{projectId}/messages`
- `projects/{projectId}/files`

Every private business document should include ownership/access fields such as `clientId`, `companyId`, `assignedUserIds`, `createdBy`, `createdAt` and `updatedAt`.

Use Firestore `Timestamp` values for persisted dates and server timestamps for authoritative creation/update times.

Store monetary amounts as integers in the smallest currency unit with a currency code. Do not store file blobs in Firestore.

## 7. Security rules

Security is a release blocker.

- Default deny in Firestore and Storage rules.
- Verify authentication, role, active status and ownership.
- Clients can access only their own company resources.
- Employees can access only assigned projects unless permission expands access.
- Admin access must use trusted custom claims or server-maintained role data.
- Public collections expose only published data.
- Storage paths are scoped by company/project.
- Privileged operations run in trusted server code.
- Critical operations are written to `auditLogs`.

Never commit service-account JSON, API secrets, private keys or production credentials.

## 8. Environment variables

Document every required variable in `.env.example` with empty placeholders.

Public Firebase web configuration uses `NEXT_PUBLIC_` variables. Server secrets never use that prefix. Centralise and validate environment access.

## 9. Design system

Core tokens:

- Background: `#0A0E1A`
- Navy surface: `#0D1426`
- Primary blue: `#1A6FD4`
- Cyan accent: `#00C8E0`
- Secondary blue: `#1565C0`
- Light background: `#E8F4FF`
- Dark text: `#1A2035`
- Muted text: `#555F7A`
- White: `#FFFFFF`
- Success: `#1B8A4E`
- Warning: `#E65C00`
- Error: `#C62828`

Typography:

- Inter for interface and content.
- JetBrains Mono only for technical content.

Brand asset:

- Source logo: `sources/logo_novanox.jpeg`
- Production derivatives belong in `public/brand/`.

UI must be mobile-first, accessible, keyboard-friendly and respectful of `prefers-reduced-motion`.

## 10. SEO and performance

Public pages are indexable. Client and admin pages are not.

Targets:

- PageSpeed mobile >= 90
- PageSpeed desktop >= 95
- LCP < 2.5s
- CLS < 0.1
- Uptime >= 99.9%

Use Metadata APIs, descriptive URLs, structured data, `sitemap.xml`, `robots.txt`, image optimisation and minimal client-side JavaScript.

## 11. Coding standards

- TypeScript strict mode.
- No casual `any`.
- Validate external input with schemas.
- Handle loading, empty, error and permission-denied states.
- User-facing copy is French.
- Code identifiers are clear English.
- Components use PascalCase; hooks use `useX`; route segments use kebab-case.
- Define canonical typed constants for statuses and roles.
- Add dependencies only for a concrete requirement.

## 12. Testing and validation

Before completion:

```bash
npm run lint
npm run typecheck
npm run build
```

When available, run relevant unit, integration, Security Rules and end-to-end tests. Never claim a check passed unless it was executed.

## 13. Git workflow

Preferred branches:

- `main`: production-ready
- `staging`: pre-production
- `develop`: integration
- `feature/<name>` or `agent/<name>`: focused work

Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`.

## 14. Agent workflow

1. Read this file and inspect the repository.
2. Read the relevant source brief pages.
3. State assumptions.
4. Make the smallest coherent change.
5. Preserve route, data and role boundaries.
6. Add validation/tests where appropriate.
7. Run available checks.
8. Report exactly what changed and what remains.

Do not fabricate business content, weaken security, expose cross-client data, hard-code secrets, add unjustified dependencies or claim production readiness with placeholders.

## 15. Definition of done

A change is done only when requested behaviour, typing, validation, security, responsive states, failure states, checks and documentation are addressed honestly.
