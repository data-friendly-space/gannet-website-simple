/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gannetGreen: '#7ad575',
        gannetLightGreen: '#d0f0c0',
        gannetBlue: '#3b82f6',
        gannetDarkBg: '#121823',
        gannetCardBg: '#1b2436',
        gannetNavBg: '#121823',
        gannetTextLight: '#e4e6eb',
        gannetAccent: {
          green: '#7ad575',
          blue: '#3b82f6',
          purple: '#a855f7',
          yellow: '#facc15',
        },
        gannetNumber: {
          1: '#7ad575', 
          2: '#3b82f6',
          3: '#a855f7',
          4: '#facc15',
          5: '#ef4444',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}; 