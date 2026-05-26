![Alt text](./image.png)

# Oxovolt Energy

A modern frontend web application built for the Oxovolt Energy product series (including Kameleo and LoopXcell). This application provides immersive product presentations, dynamic continuity modals, and a highly responsive user experience across all devices.

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Routing**: TanStack Router (File-based routing)
- **Styling**: Tailwind CSS v4 + PostCSS
- **UI Components**: HeroUI v3 & Ant Design (antd)
- **Animations**: Framer Motion
- **Icons**: Lucide React & Iconify
- **Internationalization**: i18next & react-i18next
- **State / Utils**: Lodash, usehooks-ts, Zod

## 📦 Key Features

- **Product Series Views**: Dedicated, immersive presentations for the "Kameleo" and "LoopXcell" product lines.
- **Dynamic Modals**: Fully responsive data, energy, and connectivity continuity modals.
- **Interactive UI**: Custom stacked carousels, zoomable image previews, and smooth enter/exit animations.
- **Localization Ready**: Built-in multi-language support configuration via `i18next`.
- **Memory Optimized Builds**: Custom build scripts leveraging Terser and increased heap limits to ensure stable production builds.

## 🛠️ Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed. We recommend using `npm` for dependency management.

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd oxovolt-energy

# Install dependencies
npm install
```

### Development

```bash
# Start the Vite development server
npm run dev

# Generate TanStack routes (run this when modifying route files)
npm run generate-routes
```

### Production Build

```bash
# Standard production build
npm run build

# Staging build (with increased memory limits)
npm run build:staging

# Production build (with increased memory limits)
npm run build:prod
```

## 📚 Documentation

For more detailed project guidelines, please refer to the internal documentation found in the `docs/` directory:

- [Commit Conventions](./docs/COMMIT_CONVENTIONS.md): Standardized guidelines for writing semantic commit messages (`feat`, `fix`, `chore`, etc.).
- [Release Process](./docs/HOW_RELEASE_NEW_VERSION.md): Step-by-step instructions on how to properly build, tag, and release new versions using Git.

## 💅 Code Quality & Linting

We enforce code quality and stylistic rules using ESLint and Prettier.

```bash
# Run the linter
npm run lint
```
