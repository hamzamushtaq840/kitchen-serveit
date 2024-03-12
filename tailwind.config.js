/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { min: "0px", max: "576px" },
        sm: { min: "577px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1279px", max: "1535px" },
        "2xl": { min: "1536px", max: "2560px" },
      },
      colors: {
        primaryBg: "var(--theme-primaryBg)",
        primary: "var(--theme-primary)",
        primarySub: "var(--theme-primarySub)",
        secondary: "var(--theme-secondary)",
        focus: "var(--theme-focus)",
        ring: "var(--theme-ring)",
        grey: "var(--theme-grey)",
        greyBg: "var(--theme-greyBg)",
        button: "var(--theme-button)",
      },
      boxShadow: {
        itemOptions: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
        bottomBar: "0px -4px 11px 0px rgba(0,0,0,0.05)",
        topBar: "0px 7px 5px 0px rgba(0,0,0,0.02);",
      },
    },
  },
  plugins: [],
}
