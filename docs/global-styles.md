# OXOVOLT Energy - Global Styles Documentation

This document extracts the design tokens (colors, typography, and utilities) from the project's styling foundation

## 1. Typography & Fonts

**Primary Font Family:** `Google Sans`
**Fallback Fonts:** `ui-sans-serif, system-ui, sans-serif`

**Available Font Weights:**

- **Regular** (400) - Normal & Italic
- **Medium** (500) - Normal & Italic
- **Semi-Bold** (600) - Normal & Italic
- **Bold** (700) - Normal & Italic

---

## 2. Colors Palette

### Brand Colors (From Guidelines)

- **Graphite Titanium** (`#1E1F23`): Logo "OXOVOLT". Solid, premium, timeless.
- **Soft Anthracite** (`#4E525B`): Words under the logo. Refined, high-end, readable.
- **Cobalt Blue** (`#2962FF`): CTA (Buttons). Actionable, interactive, visible.
- **Premium Blue** (`#3E67D8`): Website Headings. Calm, trustworthy, professional.

### UI Tones (Neutrals)
A carefully selected scale from pure white to near-black is utilized to establish visual hierarchy, subtle structural borders, and optimal text contrast, ensuring accessibility and a clean, modern aesthetic.
- **Scale Range**: Pure White (`#FFFFFF` or `hsl(0, 0%, 100%)`) down to Near-Black (`#0F0F0F` or `hsl(0, 0%, 6%)`)

### Thematic Application (Light & Dark Modes)
The Oxovolt brand identity remains consistent and powerful across user environment preferences:

- **Light Mode (Default)**: Bright, energetic, and clean interfaces utilizing pure white backgrounds with dark, highly legible text for maximum clarity.
  - **Backgrounds**: Pure White (`hsl(0, 0%, 100%)`), Off-white (`hsl(0, 0%, 98%)`)
  - **Text**: Dark Gray/Black (`hsl(0, 0%, 15%)`)
- **Dark Mode**: Premium, sleek, and focused interfaces using deep charcoal backgrounds with crisp, light text to reduce eye strain and provide a modern tech aesthetic.
  - **Backgrounds**: Deep Charcoal (`hsl(0, 0%, 15%)`), Near-black (`hsl(0, 0%, 6%)`)
  - **Text**: Crisp Light Gray/White (`hsl(0, 0%, 94%)` to `#FFFFFF`)

---

## 3. Layout & Responsive Design

### Supported Devices (Breakpoints)
Our digital presence is fully responsive, ensuring an uncompromised, seamless user experience across all platforms:
- **Mobile Devices** (`480px`): Optimized for vertical scrolling, touch interactions, and smaller viewports.
- **Tablets** (`768px`): Fluid and adaptable interfaces bridging the gap between mobile and desktop.
- **Laptops & Desktops** (`1024px` to `64rem`): Expanded, rich layouts utilizing wider screen real estate for comprehensive data presentation.
- **Large Displays** (`1440px`): Ultra-wide formatting that scales gracefully for premium, immersive viewing.

### Content Containers
To maintain consistency and readability, content is structured within defined layout boundaries:
- **Full-Bleed Container** (`max-width: 100vw`): Extends edge-to-edge for immersive visual sections, dynamic backgrounds, and high-impact hero banners. _Padding: `10px` on mobile/tablet, `20px` on desktop._
- **Standard Content Container** (`max-width: 1550px`): Centers core information with appropriate "breathing room" (margins), ensuring readability and keeping the user's focus on key messaging and actions without overwhelming the screen. _Padding: `24px` on mobile/tablet, `40px` on desktop._
