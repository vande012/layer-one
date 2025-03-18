 /** @type {import('tailwindcss').Config} */
 module.exports = {
   content: [
     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
     extend: {
       fontFamily: {
         orbitron: ['var(--font-orbitron)'],
         roboto: ['var(--font-roboto)'],
         geist: ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
      },
    },
   },
   safelist: [
    'screen-flicker',
    'glitch-text'
  ],
   plugins: [],
 }