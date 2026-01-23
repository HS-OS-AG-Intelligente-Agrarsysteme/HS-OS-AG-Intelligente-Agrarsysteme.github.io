import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // HS Osnabrück Corporate Identity
        'hs-cyan': '#009EE3',
        'hs-gray1': '#5E5E5D',
        'hs-gray2': '#CBCCCC',
        'hs-gray': {
          900: '#333333',  // 80% black
          700: '#666666',  // 63% black
          500: '#999999',  // 43% black
          300: '#CCCCCC',  // 22% black
          100: '#F7F7F7',  // 5% black
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
