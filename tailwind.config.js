/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src folder
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
    },
  },
  plugins: [],
};
