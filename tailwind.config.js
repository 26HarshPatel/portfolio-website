/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inknut: [
          "var(--inknut_antiqua_23c190ab-module__HhMAJG__variable)",
          "serif",
        ],
      },
      boxShadow: {
        innerPrimary: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
