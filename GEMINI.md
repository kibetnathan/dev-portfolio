# Project Overview: Portfolio

This project is a personal portfolio website built for **Kigen** (Nathan Kibet). It is developed using the **Astro** framework, leveraging **React** for interactive components and **Tailwind CSS v4** for styling.

## Technologies

-   **Framework:** Astro 6+
-   **UI Library:** React 19 (via `@astrojs/react`)
-   **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite` and `@theme` blocks in CSS)
-   **Animations:** Framer Motion
-   **Icons:** Lucide React
-   **Fonts:** Bebas Neue, Dancing Script, and Syne (imported from Google Fonts)

## Key Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs the project dependencies.               |
| `npm run dev`     | Starts the local development server at `localhost:4321`. |
| `npm run build`   | Builds the production-ready site to `./dist/`.   |
| `npm run preview` | Previews the production build locally.           |
| `npm run astro`   | Runs Astro CLI commands (e.g., `astro add`, `astro check`). |

## Architecture & Conventions

### Directory Structure

-   `src/components/`: Contains both `.astro` (static/server-rendered) and `.tsx` (interactive React) components.
-   `src/pages/`: Contains the routes. `index.astro` is the main landing page.
-   `src/styles/`: Contains global styles, including the Tailwind CSS v4 `@theme` configuration in `global.css`.
-   `public/`: Static assets such as images (`portrait.png`), icons, and the CV PDF.

### Styling & Design

-   **Tailwind CSS v4:** Uses the new `@theme` configuration within `src/styles/global.css`. Custom colors like `primary` (#e12826) and fonts like `font-signature` are defined there.
-   **Components:** Components are styled using utility classes. Interactive elements often use Framer Motion (see `EducationRoadmap.tsx` if applicable).

### Development Guidelines

-   **Adding Components:** Prefer `.astro` components for static content and `.tsx` for client-side interactivity.
-   **Images:** Assets should be placed in the `public/` directory for simple referencing or `src/assets/` if using Astro's image optimization.
-   **Styling:** Follow the existing color palette and font choices defined in `src/styles/global.css`.
-   **TypeScript:** The project uses TypeScript. Ensure new components are properly typed.
