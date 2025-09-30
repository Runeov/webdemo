A scalable, modern company website for WebDev Co., showcasing expertise in UX/UI design and React development. Built with React, Vite, Tailwind CSS v4, and React Router, this project emphasizes clean, user-centered design and maintainable code following the DRY principle.

Features





Responsive Design: Utilizes Tailwind CSS v4 container queries and responsive utilities for seamless UX across devices.



Dark Mode: Toggleable dark/light mode for enhanced accessibility.



Modular Structure: Organized into components and pages for scalability.



Routing: Client-side navigation with React Router.



Tailwind CSS v4: Leverages CSS-first configuration with custom utilities and theme variables.



Code Quality: Includes ESLint and Prettier for consistent, error-free code.

Project Structure

webdev-co/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── postcss.config.js
└── README.md

Prerequisites





Node.js (v18 or higher)



npm (v9 or higher)

Setup Instructions





Clone the Repository:

git clone <repository-url>
cd webdev-co



Install Dependencies:

npm install



Configure PostCSS: Ensure postcss.config.js is set up to process Tailwind CSS v4:

export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};



Run the Development Server:

npm run dev

Open http://localhost:5173 to view the site.



Build for Production:

npm run build



Preview the Production Build:

npm run preview



Format Code:

npm run format



Lint Code:

npm run lint

Dependencies





React: ^18.2.0



React Router: ^6.26.1



Tailwind CSS v4: @tailwindcss/postcss, @tailwindcss/cli



Vite: ^5.4.8



PostCSS & Autoprefixer: For processing Tailwind CSS and ensuring browser compatibility



ESLint & Prettier: For code quality and formatting

Tailwind CSS v4 Configuration

The project uses Tailwind CSS v4 with a CSS-first approach:





Theme: Defined in src/index.css using @theme for fonts, colors, spacing, and breakpoints.



Custom Utilities: Includes container and btn utilities for DRY styling.



Variants: Supports dark mode and container queries for responsive design.



3D Transforms & Gradients: Ready to extend with Tailwind's advanced features.

Example from index.css:

@import "tailwindcss";

@theme {
  --font-sans: ui-sans-serif, system-ui, sans-serif;
  --color-primary-500: oklch(0.5 0.2 250);
  --spacing-4: 1rem;
}

Extending the Project





Portfolio: Replace placeholder divs in Portfolio.jsx with real project data or components.



Animations: Add Tailwind’s 3D transform utilities (e.g., transform-3d, rotate-x-12) for interactive UX.



Form Handling: Implement form submission logic in Contact.jsx using a backend API or service.



Testing: Add testing libraries like @testing-library/react for unit tests.

Contributing





Fork the repository.



Create a feature branch (git checkout -b feature/branch-name).



Commit changes (git commit -m "Add feature").



Push to the branch (git push origin feature/branch-name).



Open a pull request.

