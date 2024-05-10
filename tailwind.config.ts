import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        yellow: { sgpharma: '#ffcd00' },
        blue: {
          100: '#1655c6',
          200: '#124196',
          '200-transparent': '#12419695',
          300: '#071f4c',
          400: '#031432',
        },
        gray: {
          100: '#e9eef4',
          200: '#54545f',
        },
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      revue: ['Revue', 'sans-serif'],
      qkMarisa: ['QK Marisa', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
