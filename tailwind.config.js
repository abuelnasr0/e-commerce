/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        first: "var(--color-indigo-first)",
        last: "var(--color-indigo-last)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        first: "var(--color-indigo-first)",
        last: "var(--color-indigo-last)",
      },
      fill: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        first: "var(--color-indigo-first)",
        last: "var(--color-indigo-last)",
        gray: "var(--color-gray)",
      },
      gradientColorStops: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      divideColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      boxShadowColor: {
        mygray: "var(--color-gray)",
      },
    },
  },
  plugins: [],
};
