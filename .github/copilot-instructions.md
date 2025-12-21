# AI Coding Agent Instructions

## Project Overview

**Nalapaaka** is a vegetarian restaurant website built with React + TypeScript + Vite, featuring Radix UI components and Tailwind CSS. The codebase uses a Figma design as the source of truth (https://www.figma.com/design/EHUjtQTlnS0qwJCtCn24zs/Vegetarian-Restaurant-Website-Design).

### Tech Stack
- **Build Tool**: Vite (with React SWC plugin)
- **UI Framework**: React 18 with TypeScript
- **Component Library**: Radix UI primitives (30+ components)
- **Styling**: Tailwind CSS with custom theming
- **Form Handling**: React Hook Form
- **Icons**: lucide-react
- **Charts**: recharts
- **Utilities**: clsx + tailwind-merge for class composition

## Architecture & Key Patterns

### Single-Page Application Structure

**Entry Point**: `src/App.tsx` implements manual routing with a `currentPage` state that switches between four main pages:
- `home` → `HomePage`
- `menu` → `MenuPage`
- `about` → `AboutPage`
- `contact` → `ContactPage`

**Navigation**: `Navigation.tsx` is a sticky header component with mobile menu toggle (hidden on mobile, shown via hamburger on `md:` breakpoint).

**Key Insight**: When changing pages, `App.tsx` automatically calls `window.scrollTo(0, 0)` to reset scroll position—preserve this behavior when modifying page transitions.

### Component Architecture

Components follow a **presentational** pattern:
- **Page components** (`HomePage`, `MenuPage`, etc.) receive `onNavigate` callback props
- **UI components** (`src/components/ui/*`) are pre-built Radix UI wrappers—do not modify these
- **Custom components** like `ImageWithFallback` in `figma/` handle Figma-specific concerns (image error fallback to SVG placeholder)

### Styling Conventions

1. **Color Palette** (extracted from Navigation.tsx):
   - Gold: `#d4af37` (hover: `#e8c96f`) — branding/accents
   - Green: `#22c55e` — secondary accents
   - Dark background: `#0a0a0a`
   - Border: `#2a2a2a`

2. **Typography**:
   - Serif font stored in CSS variable: `var(--font-serif)` (applied to logo "Nalapaaka")
   - Sans font for supporting text: `var(--font-sans)`

3. **Utility Pattern**: All components use the `cn()` helper (`src/components/ui/utils.ts`) to merge Tailwind classes safely:
   ```tsx
   cn("base-class", condition && "conditional-class")
   ```
   This prevents class conflicts when combining static and dynamic styles.

### Data Structures & Content

- **Menu System** (`MenuPage.tsx`): Categorized items with bilingual support (English + Kannada)
- **Testimonials & Dishes** (`HomePage.tsx`): Hard-coded arrays of objects with `name`, `description`, `price`, `image`, `rating` fields
- **Filtering**: `MenuPage` uses `selectedCategory` state to filter displayed items—this is the pattern to follow for other filterable lists

### Figma Integration Points

- `src/components/figma/ImageWithFallback.tsx`: Handles external Unsplash image URLs with graceful fallback (renders SVG placeholder on error)
- Images use Figma-generated Unsplash URLs with specific crop/sizing parameters—preserve these URLs when editing
- `src/Attributions.md`: Credits for design/images—update if adding new external resources

## Development Workflow

### Setup & Running
```bash
npm i                # Install dependencies (includes all Radix UI packages)
npm run dev          # Start Vite dev server (typically http://localhost:5173)
```

### Build Configuration
- `vite.config.ts` contains alias mappings for all Radix UI packages (e.g., `'@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog'`)—these resolve dependency version conflicts
- Extension resolution: `.js, .jsx, .ts, .tsx, .json`
- Path alias `@` resolves to `src/` directory

### Key Build Commands
- `npm run dev` — Development server with HMR
- Package scripts beyond dev are not yet documented in README—check `package.json` for full list

## Critical Patterns & Conventions

### Class Composition
**Never** write raw Tailwind classes inline. Always use the `cn()` helper:
```tsx
// ✅ Good
className={cn("px-4 py-2", isActive && "bg-blue-500")}

// ❌ Avoid
className={`px-4 py-2 ${isActive ? "bg-blue-500" : ""}`}
```

### Page Navigation
**Always** use the `onNavigate` callback prop; never hard-code page logic:
```tsx
// ✅ Good
<button onClick={() => onNavigate("menu")}>Menu</button>

// ❌ Avoid
<button onClick={() => setCurrentPage("menu")}>Menu</button>
```

### Image Handling
**Always** use `ImageWithFallback` for external images:
```tsx
import { ImageWithFallback } from "./figma/ImageWithFallback";

<ImageWithFallback src={url} alt="Description" className="w-full" />
```

### Responsive Breakpoints
- Mobile-first design; breakpoints: `md:` (768px typical), `lg:` (1024px typical)
- Navigation example: desktop nav shown with `hidden md:flex`, mobile menu toggled with `md:hidden`

## Common Tasks

### Adding a Menu Item
1. Add object to `menuItems` array in `MenuPage.tsx` with `name`, `nameKannada`, `category` fields
2. Ensure `category` matches an existing category ID or add new category to `categories` array
3. No database/API—all data is static

### Modifying Colors
1. Update specific hex colors in component files (e.g., Navigation uses `#d4af37`)
2. Or define CSS variables in `index.css` and reference via `className` (e.g., `text-[#d4af37]`)
3. Keep accent palette consistent: gold, green, dark background, subtle borders

### Creating a New Page
1. Create new component file in `src/components/` (e.g., `NewPage.tsx`)
2. Export named export (no default) matching filename
3. Add case to `renderPage()` switch in `App.tsx`
4. Add nav item to `navItems` in `Navigation.tsx`

## Known Constraints

- **No Authentication/Backend**: All content is static; no user accounts or data persistence
- **No Testing Framework**: No test files in repo; any added tests should follow React Testing Library patterns if needed
- **Fixed Dependencies**: Radix UI and Tailwind versions are pinned; consult vite.config.ts aliases before updating
- **Figma as Source**: Design changes should reflect the original Figma file; ask about discrepancies

## Useful Files Quick Reference

- `src/App.tsx` — Entry point & routing logic
- `src/components/Navigation.tsx` — Header with mobile menu
- `src/components/ui/utils.ts` — Class composition helper
- `src/index.css` — Tailwind initialization & CSS variables
- `vite.config.ts` — Build aliases & plugin config
- `package.json` — Dependency versions & available scripts
