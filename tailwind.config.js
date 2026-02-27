/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        cascade: "cascade 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 10px rgba(168,85,247,0.5))" },
          "100%": {
            filter:
              "drop-shadow(0 0 25px rgba(168,85,247,0.9)) drop-shadow(0 0 45px rgba(168,85,247,0.6))",
          },
        },
        cascade: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "20%, 80%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};
