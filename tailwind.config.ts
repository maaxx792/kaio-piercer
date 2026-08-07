import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030507", // page background — near-black with a cold blue cast
          900: "#080B10",
          850: "#0B0F16",
          800: "#0F1520",
          700: "#161D2B",
          600: "#212A3B",
          500: "#33405A",
          400: "#5B6C8C",
          300: "#8896B0",
          200: "#C2CBDB",
          100: "#EDF1F8",
        },
        volt: {
          950: "#031225",
          900: "#052048",
          800: "#07306C",
          700: "#0B429A",
          600: "#1657C4",
          500: "#2C74EC", // primary electric blue
          400: "#4F97FF",
          300: "#7EBAFF",
          200: "#AFD6FF",
          100: "#E3F1FF",
        },
        cyan: {
          500: "#28E0F0", // secondary neon accent
          400: "#5CEBF7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(3,5,7,0.9) 85%), repeating-linear-gradient(0deg, rgba(79,151,255,0.06) 0px, rgba(79,151,255,0.06) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(79,151,255,0.06) 0px, rgba(79,151,255,0.06) 1px, transparent 1px, transparent 48px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(44,116,236,0.35)",
        "glow-sm": "0 0 18px rgba(44,116,236,0.3)",
        "glow-cyan": "0 0 30px rgba(40,224,240,0.25)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 18px rgba(44,116,236,0.55))" },
          "50%": { opacity: "0.75", filter: "drop-shadow(0 0 6px rgba(44,116,236,0.3))" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 3.2s ease-in-out infinite",
        scanline: "scanline 6s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
