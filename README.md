<div align="center">

<img src="assets/logo.png" alt="Clinic logo" width="96" />

# Dr. Yaghmaei Cardiology Clinic

### کلینیک قلب دکتر بهنام یغمایی · Clinic OS UI showcase

Public site · Jalali booking · patient files · queue · finance views · admin KPI  
**Production source is private.** This repo is landing + static UI demo only.

<br/>

[![Live Landing](https://img.shields.io/badge/Live-Landing-B91C1C?style=for-the-badge&labelColor=1c0a0a)](https://askarniroomand.github.io/dr-yaghmaei-clinic-showcase/)
[![UI Demo](https://img.shields.io/badge/UI-Demo-7F1D1D?style=for-the-badge&labelColor=1c0a0a)](https://askarniroomand.github.io/dr-yaghmaei-clinic-showcase/demo/)
[![Source](https://img.shields.io/badge/Source-Private-111111?style=for-the-badge)](https://github.com/askarniroomand)
[![License](https://img.shields.io/badge/License-Proprietary-6B7280?style=for-the-badge)](LICENSE)
[![Stack](https://img.shields.io/badge/Production-PHP_MVC_MySQL-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://github.com/askarniroomand)

</div>

---

## Professional description

This showcase presents the user experience of a **cardiology clinic operations system**: public marketing pages, Jalali appointment booking UX, patient list views, waiting queue, and admin dashboards.

The production system is implemented as a **PHP MVC** application with **MySQL** and **JWT-authenticated APIs**. Private source and real medical data are **not** published here.

---

## Features (production product)

| Area | Capability |
|:-----|:-----------|
| Public web | Services, about, contact, trust-oriented medical UI |
| Booking | Jalali appointment request flows |
| Patients | File list / record-oriented admin views |
| Queue | Waiting-room operational UI |
| Finance | KPI / revenue-oriented admin widgets |
| API | REST boundaries with JWT (private source) |
| UX | Full RTL · Vazirmatn · responsive · dark mode support in demo |

---

## Tech stack

| Layer | Technology |
|:------|:-----------|
| Backend | PHP MVC · MySQL · JWT |
| Frontend (prod) | Server-rendered + modern CSS (private) |
| Showcase | Static HTML/CSS · GitHub Pages |

---

## Architecture

```text
Public pages ──► PHP MVC ──► MySQL
Admin panel  ──►    │
                    ├─ Booking
                    ├─ Patients
                    ├─ Queue
                    └─ Finance / KPI
```

Healthcare data stays in private deployments. Showcase uses fictional sample content only.

---

## Live demo

| Page | Link |
|:-----|:-----|
| Landing | https://askarniroomand.github.io/dr-yaghmaei-clinic-showcase/ |
| UI home | https://askarniroomand.github.io/dr-yaghmaei-clinic-showcase/demo/ |
| Booking | `demo/appointment.html` |
| Admin | `demo/admin.html` |
| Patients | `demo/patients.html` |
| Queue | `demo/queue.html` |

---

## Screenshots

Add real captures under `assets/screenshots/` (no patient PII).

| Home | Booking | Admin |
|:----:|:-------:|:-----:|
| placeholder | placeholder | placeholder |

---

## Installation

```bash
git clone https://github.com/askarniroomand/dr-yaghmaei-clinic-showcase.git
cd dr-yaghmaei-clinic-showcase
python3 -m http.server 8080
```

No production backend is included.

---

## Requirements

Modern browser only (showcase).

---

## Usage

Browse landing → open demo → review admin screens as **UI reference**, not a live clinic system.

---

## Configuration

None.

---

## Project structure

```text
dr-yaghmaei-clinic-showcase/
├── index.html
├── demo/
├── assets/
├── docs/
├── LICENSE
├── SECURITY.md
└── README.md
```

---

## Roadmap

Public copy/a11y/screenshot improvements only.

---

## Known issues

- Forms are non-persistent
- Admin charts use sample data
- No authentication in static demo (by design)

---

## FAQ

<details>
<summary><b>Is patient data included?</b></summary>

No. Never commit PHI. Samples are fictional.
</details>

<details>
<summary><b>Can hospitals buy this?</b></summary>

Contact for commercial discussion and private demos.
</details>

---

## Contributing

Docs/UI PRs welcome. No proprietary source uploads.

---

## License

Proprietary — see [LICENSE](LICENSE).

---

## Contact

- [github.com/askarniroomand](https://github.com/askarniroomand)
- Telegram: [t.me/MRROBOT_DT](https://t.me/MRROBOT_DT)
