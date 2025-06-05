/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-100': 'var(--color-100)',
        'primary-75': 'var(--color-75)',
        'primary-50': 'var(--color-50)',
        'primary-25': 'var(--color-25)',
        'primary-y': 'var(--color-y)',
        'primary-0': 'var(--color-0)',
        'primary-r': 'var(--color-r)',

        // Text colors referencing the primary ones or directly
        'text-black': 'var(--text-black)',
        'text-grey': 'var(--text-grey)',
        'text-white': 'var(--text-white)',
        'text-highlight1': 'var(--text-highlight1)',
        'text-highlight2': 'var(--text-highlight2)'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Set Inter as the default sans-serif
        'aglio': ['Aglio Picasso', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-intersect'),
    require('tailwindcss-motion'),
  ],
}
