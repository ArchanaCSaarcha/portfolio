# Archana CS — Developer Portfolio

A responsive, single-page portfolio website for **Archana CS**, Aspiring MERN Stack Developer. Built with **React** and **Vite**, featuring a modern dark charcoal aesthetic with restrained sage and lime accents, semantic HTML, and accessibility considerations.

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### 1. Install Dependencies
Navigate into the `archana-portfolio` directory and install the project dependencies:
```bash
npm install
```

### 2. Run Locally in Development Mode
Start the Vite development server:
```bash
npm run dev
```
Open your browser and visit the local URL displayed in your terminal (typically `http://localhost:5173`).

### 3. Build for Production
To generate an optimized production build:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 4. Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS with custom charcoal & sage design system tokens
- **Typography**: Plus Jakarta Sans & JetBrains Mono
- **Icons**: Custom accessible SVG components
- **Motion & Accessibility**:
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
  - Skip to content link for screen readers & keyboard navigation
  - High contrast ratios with visible `:focus-visible` outlines
  - Full support for `prefers-reduced-motion`

---

## 📂 Project Structure

```text
archana-portfolio/
├── public/
│   └── images/
│       ├── cake-shop.png       # Real screenshot of Cake Shop Website
│       └── habit-tracker.png   # Real screenshot of Habit Tracker Web App
├── src/
│   ├── components/
│   │   ├── About.jsx           # Factual education, training & freelance status
│   │   ├── Contact.jsx         # Email CTA, copy button & profile links
│   │   ├── DeveloperAvatar.jsx # Custom SVG illustration
│   │   ├── Footer.jsx          # Quick navigation & social links
│   │   ├── Hero.jsx            # Welcoming header & action triggers
│   │   ├── Icons.jsx           # Reusable SVG iconography
│   │   ├── Navbar.jsx          # Sticky header with mobile drawer
│   │   ├── Projects.jsx        # Project showcases with screenshot modals
│   │   └── Skills.jsx          # Core frontend skills & MERN learning track
│   ├── App.jsx                 # Main layout root
│   ├── index.css               # Base styles & Tailwind directives
│   └── main.jsx                # React entry point
├── index.html                  # HTML entry with metadata & Google Fonts
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Setup instructions
```

---

## 👤 Profile & Links

- **Name**: Archana CS
- **Title**: Aspiring MERN Stack Developer
- **Email**: [aarcha238@gmail.com](mailto:aarcha238@gmail.com)
- **GitHub**: [https://github.com/ArchanaCSaarcha](https://github.com/ArchanaCSaarcha)
- **LinkedIn**: [https://www.linkedin.com/in/archana-cs-803884438](https://www.linkedin.com/in/archana-cs-803884438)

### Featured Projects
1. **Cake Shop Website** — HTML5 & CSS ([GitHub Repository](https://github.com/ArchanaCSaarcha/project-cakes))
2. **Habit Tracker** — HTML, CSS, JavaScript, localStorage ([GitHub Repository](https://github.com/ArchanaCSaarcha/Habit-Tracker))
