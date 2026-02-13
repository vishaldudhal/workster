# Agency Suite PRD (v1)

## Vision
Affordable all-in-one business suite for small agencies (10-20 members).

## Core Modules
1. Project Management (tasks, kanban, time tracking, templates)
2. Client Onboarding + Client Portal (project/payment visibility)
3. Quotations / Proposals / Contracts
4. Invoices
5. Inbox & Messages
6. Space (file management per project)

## Primary Personas
- Agency Owner
- Project Manager
- Team Member
- Client (portal user)

## v1 Outcomes
- Set up workspace + team in < 10 min
- Create client, project, and first task in < 5 min
- Create and send invoice/proposal in < 5 min
- Client can view project/payment status via portal

## Tech
- Next.js (App Router, TypeScript)
- Supabase (Postgres, Auth, Storage, RLS)

## Non-functional
- Multi-tenant by design
- Role-based access control
- Audit-friendly activity fields (created_by, updated_by)
- Mobile-friendly UI
