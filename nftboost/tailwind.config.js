/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        title: ["var(--font-poppins)"],
        body: ["var(--font-inter)"],
      },
      colors: {
        "blue-primary": "#1D4FFE",
        "green-primary": "#4bce97",
        "gray-border-card": "#131317",
        "gray-area-favorite": "#05030A",
        "gray-hover-btn-slide": "#07050F",
      },
      maxWidth: {
        grid: "77.5rem",
        "card-nft": "17.4rem",
        "card-collector": "37rem",
        "logo-size-mob": "10rem",
        "nav-header": "48.3rem",
        "left-content-footer": "20.25rem",
        "content-desc-hero": "41.1rem",
      },
      width: {
        "card-width": "270px",
        "area-cards-mob": "43.7rem",
      },
      height: {
        "area-image-nft": "14.7rem",
        "card-height": "300px",
        "area-cards-mob": "15.3rem",
        "area-cards-desk": "26.6rem",
        "area-banner": "29.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-pattern": 'url("../assets/imgs/svgs/bg-hero.svg")',
        banner: 'url("../assets/imgs/svgs/bg-banner.svg")',
      },
    },
    screens: {
      "@tablet": "640px",

      "@laptop": "1024px",

      "@desktop": "1280px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
