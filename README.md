# colour kit

Playing with themes. An early React experiment from 2021.

Three palettes — **dark**, **french**, **thirties** — applied to the same interface. A theme button changes React state; the resulting CSS class selects the colour variables used across the page.

### built with

React 17 · Material UI 4 · styled-components · Create React App 4.

### look around

- `src/App.js` — the theme state, buttons and layout.
- `src/App.css` — the palettes and shared styles.
- `src/Themes/` — the theme controls.

The original scripts are `npm start`, `npm run build` and `npm test` after installing dependencies. This is the original toolchain; installation and browser compatibility have not been revalidated for this presentation.

Theme selection lives in React state and resets on reload.

---

[more experiments](https://github.com/starbvuks)
