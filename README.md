# 🦷 The Dental Hub — Frontend Architecture (Clinical Sanctuary)

A modern, high-performance web application built with **React**, **TypeScript**, and **Tailwind CSS** for **The Dental Hub** (Galle, Sri Lanka).

---

## 🏛️ SADP Architectural Pattern

This project implements the **SADP (Software Architecture & Design Patterns)** standard adapted for scalable enterprise React applications:

```text
src/
├── assets/                    # Static brand assets, imagery, and SVGs
├── components/
│   └── ui/                    # [P] Presentation & UI Primitives (Dumb, decoupled)
│       ├── Button.tsx         # Pill-shaped button (#22B8EE + #0B0F14 contrast enforced)
│       ├── Card.tsx           # Standardized 20px radius & soft ambient elevation
│       ├── Badge.tsx          # Pill-shaped status chips & verified badges
│       ├── Input.tsx          # 52px height form inputs with cyan focus halo
│       ├── Select.tsx         # 52px dropdown selector with custom arrow
│       ├── StarRating.tsx     # Gold (#F5B301) filled stars with review score
│       ├── SectionHeader.tsx  # Dual-tier Plus Jakarta Sans & Inter heading
│       └── Modal.tsx          # Accessible dialog with backdrop blur & escape listener
│
├── constants/                 # Core clinic metadata, schedules, and nav links
│   ├── clinicInfo.ts          # Galle Fort location, phones, hours, reviews
│   └── navigation.ts          # Top nav and footer navigation menus
│
├── context/                   # Global Application State (Provider Pattern)
│   └── AppointmentModalContext.tsx # Central booking modal controller
│
├── features/                  # [D] Domain Layer (Domain-Driven / Package-by-Feature)
│   ├── hero/                  # Hero section with clinical visual & 4.9 star proof
│   ├── treatments/            # 9 clinical treatments, category filters & cards
│   ├── doctors/               # Lead clinician profile & board accreditations
│   ├── whyChooseUs/           # Deep obsidian architectural philosophy cards
│   ├── testimonials/          # Verified Google reviews with gold stars
│   ├── howItWorks/            # 3-step rapid booking walkthrough
│   ├── appointments/          # Interactive booking form card & modal
│   ├── faq/                   # 5-question responsive accordion
│   └── location/              # Galle Fort map preview & direction cards
│
├── layouts/                   # [A] App Shell & Structural Adapters
│   ├── TopContactBar.tsx      # Emergency status & triage hotline
│   ├── Navbar.tsx             # Sticky navigation header & mobile drawer
│   ├── TrustStrip.tsx         # 4 reassurance pillars below hero
│   ├── Footer.tsx             # Deep Obsidian (#0B0F14) authoritative footer
│   └── MainLayout.tsx         # Root composition shell & floating WhatsApp button
│
├── services/                  # [S] Services & State Layer (Facade & Repository)
│   ├── apiClient.ts           # Standardized Fetch facade with error handling
│   └── appointmentService.ts  # Booking request repository
│
├── types/                     # Domain contracts and TypeScript models
│   ├── appointment.ts
│   ├── common.ts
│   ├── doctor.ts
│   ├── review.ts
│   └── treatment.ts
│
├── utils/                     # Cross-cutting pure utilities
│   ├── cn.ts                  # Safe Tailwind class merging (clsx + twMerge)
│   └── formatters.ts          # Dates, currency, and phone formatters
│
├── App.tsx                    # Clean orchestrator (< 35 lines)
└── main.tsx                   # React root entry point
```

---

## 🎨 Design System: "Clinical Sanctuary"

- **Primary Accent (`#22B8EE`):** Electric oceanic cyan for high-value interactive calls-to-action.
- **Strict Contrast Rule:** Buttons filled with `#22B8EE` strictly use bold `#0B0F14` text. Pure white text is prohibited.
- **Deep Structural Dark (`#0B0F14`):** Near-black obsidian for grounded sections, headers, and footers.
- **Accessible Deep Cyan (`#0879AB`):** AAA compliant links, outlines, and category tags.
- **Utility Gold (`#F5B301`):** 5-star Google review ratings.
- **Direct Connect Green (`#25D366`):** Dedicated WhatsApp buttons.
- **Typography:** **Plus Jakarta Sans** (Headings, bold tracking) & **Inter** (Body reading comfort).
- **Geometry:** `rounded-pill` (9999px) for buttons/badges, `rounded-[20px]` for cards.

---

## 🚀 Getting Started

```bash
# Run Development Server
npm run dev

# Run Production Build
npm run build

# Preview Build Output
npm run preview
```
