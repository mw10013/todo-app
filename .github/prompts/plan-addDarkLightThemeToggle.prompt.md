## Plan: Add Dark/Light Theme Toggle

Implement a theme toggle button that switches between light and dark modes, persisting the user's choice via localStorage. Use CSS custom properties for easy theme switching without disrupting existing styles.

### Steps

1. Update [styles.css](styles.css) to define CSS variables in `:root` for colors and add a `.dark` class with dark theme overrides.
2. Modify [index.html](index.html) to add a theme toggle button in the container with an ID like `theme-toggle`.
3. Enhance [script.js](script.js) to check localStorage on load for theme preference, toggle the `dark` class on body via button click, and save preference.
4. Test theme switching and persistence across page reloads.

### Further Considerations

1. Choose dark theme colors (e.g., dark backgrounds, light text) for good contrast.
2. Add smooth transitions in CSS for theme changes.
3. Handle default light theme if no localStorage preference exists.
