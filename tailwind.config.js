/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
   ],
   theme: {
      extend: {
         colors: {
            blue: "var(--color-blue)",
            darkblue: "var(--color-darkblue)",
            gray: "var(--color-gray)",
            lightgray: "var(--color-lightgray)",
            darkgray: "var(--color-darkgray)",
            bluebadgebg: "var(--color-bluebadgebg)",
            graybadgebg: "var(--color-graybadgebg)",
            heading: "var(--color-heading)",
            content: "var(--color-content)",
            lighttext: "var(--color-lighttext)",
            smalltext: "var(--color-smalltext)",
            inputbg: "var(--color-inputbg)",
            red: "var(--color-red)",
         },
         padding: {
            10: "10px",
            13: "13px",
            20: "20px",
            30: "30px",
            40: "40px",
            50: "50px",
            60: "60px",
            70: "70px",
            80: "80px",
            90: "90px",
            100: "100px",
            110: "110px",
            120: "120px",
            130: "130px",
         },
         margin: {
            10: "10px",
            20: "20px",
            30: "30px",
            40: "40px",
            50: "50px",
            60: "60px",
            70: "70px",
            80: "80px",
            90: "90px",
            100: "100px",
            110: "110px",
            120: "120px",
            130: "130px",
         },
         gap: {
            10: "10px",
            13: "13px",
            20: "20px",
            30: "30px",
            40: "40px",
            50: "50px",
         },
      },
      borderRadius: {
         none: "0",
         sm: "2px",
         md: "5px",
         lg: "10px",
      },
      fontFamily: {
         sans: ["Montserrat", "sans-serif"],
         serif: ["Mate", "serif"],
         outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
         sm: "12px",
         base: "14px",
         lg: "16px",
         xl: "18px",
         "2xl": "20px",
         "3xl": "30px",
         "4xl": "36px",
      },
      fontWeight: {
         normal: "400",
         medium: "500",
         semibold: "600",
         bold: "800",
      },
      boxShadow: {
         "3xl": "0px 4px 4px 0px rgba(197, 197, 197, 0.15)",
         plancard: "0px 4px 30px rgba(184, 183, 183, 0.2)",
         top: "0px -4px 4px 0px #C5C5C526",
      },
      keyframes: {
         "fade-in": {
            "0%": { opacity: 0, transform: "translateY(-10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
         },
         "slide-top": {
            "0%": { opacity: 0, transform: "translateY(-10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
         },
         "arrow-translate": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(10px)" },
         },
         "slide-up": {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
         },
      },
      animation: {
         "fade-in": "fade-in 0.3s ease-in-out",
         "slide-top": "slide-top 0.3s ease-in-out",
         "arrow-translate": "arrow-translate 0.3s ease-in-out infinite",
         "slide-up": "slide-up 0.3s ease-in-out",
      },
   },
   plugins: [require("flowbite/plugin")],
};
