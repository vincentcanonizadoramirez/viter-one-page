# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
viter-one-page
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js

```
```
viter-one-page
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ fonts
│     ├─ Poppins-Bold.woff2
│     ├─ Poppins-Medium.woff2
│     ├─ Poppins-Regular.woff2
│     └─ Poppins-SemiBold.woff2
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  ├─ components
│  │  ├─ pages
│  │  │  └─ home
│  │  │     ├─ AboutHome.jsx
│  │  │     ├─ BannerHome.jsx
│  │  │     ├─ ContactHome.jsx
│  │  │     ├─ Home.jsx
│  │  │     ├─ Services.jsx
│  │  │     └─ Testimonials.jsx
│  │  └─ partials
│  │     ├─ Footer.jsx
│  │     └─ Header.jsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js

```