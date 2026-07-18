# Case study: Dr. Yaghmaei Cardiology Clinic OS

| Field | Value |
|:------|:------|
| Product | Clinic management system |
| Domain | Healthcare operations (cardiology) |
| Role | Full-stack PHP engineer |
| Stack | PHP MVC · MySQL · JWT · Jalali booking · admin ops |
| Source | Private (`dr-yaghmaei-clinic`) |
| Public UI | https://askarniroomand.github.io/dr-yaghmaei-clinic-showcase/ |

## Problem

Clinics need unified public site + appointment booking + patient file workflows + queue + finance visibility without juggling disconnected tools.

## Goals

- Jalali appointment booking UX
- Admin KPI dashboard
- Patient records list workflows
- Waiting queue management
- REST API boundaries with JWT

## Architecture

```text
Public site  →  PHP MVC API  →  MySQL
Admin panel  →       │
                     ├─ Booking
                     ├─ Patients
                     ├─ Queue
                     └─ Finance views
```

## Engineering highlights

1. **MVC modularization** — clearer ownership of domains vs single spaghetti PHP.
2. **JWT auth for APIs** — mobile/admin clients can share backend.
3. **RTL medical UI system** — trust-oriented visual design for patients.
4. **Showcase split** — protect PHI by never publishing production code/data.

## Security & privacy

- No real patient data in public showcase
- Source private
- Production must enforce HTTPS, strong secrets, access control, backups
- Healthcare data minimization principles

## Public proof

- https://github.com/askarniroomand/dr-yaghmaei-clinic-showcase
- Demo admin UI (static): `/demo/admin.html`

## Next improvements

- Audit log export
- Stronger automated tests for booking conflicts
- Role matrix documentation for staff accounts
