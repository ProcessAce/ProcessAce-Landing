# ProcessAce - Landing Page

[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)]()
[![Tech Stack: HTML/CSS/JS](https://img.shields.io/badge/Stack-Vanilla%20Web-blue.svg)]()
[![License: Sustainable Use](https://img.shields.io/badge/License-Sustainable%20Use-orange.svg)]()

The official landing page for [ProcessAce](https://github.com/jgleiser/processace), the AI-powered process discovery and documentation engine.

This repository contains the static front-end assets (HTML, CSS, Vanilla JS) used to showcase the application's features, architecture, and deployment instructions.

## 🚀 Technical Philosophy

As a tool designed for enterprise process management, its landing page is built to reflect our engineering standards: **fast, lightweight, and accessible**. 

- **Zero Heavy Frameworks:** Built entirely with semantic HTML5, modern CSS3 (Flexbox/Grid), and Vanilla JavaScript. No React, Vue, or heavy dependencies.
- **High Performance:** Optimized for fast First Contentful Paint (FCP) and near-instant interaction.
- **Responsive Design:** Fluid layout that adapts seamlessly across mobile, tablet, and desktop viewports.
- **Native Animations:** Scroll-triggered "fade-up" animations powered by the browser's native `IntersectionObserver` API for jank-free performance.

## 📁 Repository Structure

```text
.
├── index.html          # Main landing page entry point
├── styles/
│   └── styles.css      # Modular CSS (variables, resets, components, responsive rules)
└── assets/             # Logos, favicons, and other static imagery
    ├── favicon.ico
    ├── processace-logo-black.png
    └── processace-logo-white.png

```

## 🛠️ Local Development & Viewing

Because this project is completely static and uses no build steps or bundlers, getting it running locally is incredibly simple.

1. **Clone the repository:**
```bash
git clone https://github.com/ProcessAce/ProcessAce-Landing.git
cd ProcessAce-Landing
```


2. **Serve the files:**
You can simply double-click `index.html` to open it in your browser. However, for the best experience (and to prevent local CORS issues with future assets), it is recommended to use a local development server:
*Using Python:*
```bash
python -m http.server 8000
```


*Using Node.js (npx):*
```bash
npx serve
```


*Using VS Code:*
Right-click `index.html` and select **"Open with Live Server"**.
3. **View the site:**
Navigate to `http://localhost:8000` (or the port provided by your server).

## 🔗 Related Repositories

* **[ProcessAce Core Application](https://github.com/jgleiser/processace):** The main application repository containing the Node.js backend, SQLite/Redis architecture, and interactive frontend editor.

## 📄 License

The code in this repository is part of the ProcessAce project and is made available under the **Sustainable Use License**. It is free to use and modify for internal purposes, but cannot be offered as a multi-tenant SaaS or resold.

For full terms, see the [LICENSE.md](https://github.com/jgleiser/processace/blob/main/LICENSE.md) file in the core repository. For commercial/enterprise licensing, please contact us.
