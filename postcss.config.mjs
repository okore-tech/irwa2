// Tailwind v4 uses the PostCSS plugin package "@tailwindcss/postcss".
// Next.js expects PostCSS plugins to be provided as an object map (or valid plugin tuples).
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
