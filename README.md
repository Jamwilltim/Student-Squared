# Student Squared

> **⚠️ Decommissioned:** Student Squared is no longer an active tutoring service. This repository is preserved for archival/portfolio purposes only — the contact form and business are not operational.

A front-end marketing website for Student Squared, a student tutoring company. The single-page site presents the company's teaching style, pricing, tutor profiles, FAQs, and a contact form, with animated section transitions.

## Features

- Single-page layout with animated (GSAP-powered) transitions between Home, About Us, Our Tutors, FAQ, and Contact sections
- Responsive navigation with separate desktop and mobile menus
- Tutor profile cards (name, university, subjects, grades)
- Pricing section
- Contact form (previously submitted via [FormSubmit](https://formsubmit.co/))
- "Thank you" confirmation page after form submission

## Getting Started

This is a static front-end site with no build step required to view it.

1. Clone or download this repository.
2. Open `index.html` directly in a browser, or serve the folder with any static file server.

## Project Structure

```
Student-Squared-main/
├── index.html    # Main single-page site (all sections)
├── thanks.html   # Contact form confirmation page
├── css/
│   ├── style.scss / style.css              # Main site styles
│   ├── variable-sizing.scss / .css         # Shared style variables
│   └── thanks.scss / thanks.css            # Thank-you page styles
├── js/
│   └── app.js    # Section navigation, intro animation, transitions
└── img/          # Logos, backgrounds, and tutor profile images
```

## Dependencies

Loaded via CDN, no local install required:

- [jQuery](https://jquery.com/) — DOM manipulation
- [GSAP](https://gsap.com/) — animations and section transitions
- [Ionicons](https://ionic.io/ionicons) — icon set

## Notes

- Styles are authored in SCSS (`css/*.scss`) with compiled `.css` output checked into the repo; a Sass compiler is only needed if editing the `.scss` source.
- The contact form previously posted to `enquiries@student-squared.com` via FormSubmit — this endpoint is no longer active.
