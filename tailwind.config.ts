import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050711",
        midnight: "#08111f",
        graphite: "#0d1324",
        violet: "#8b5cf6",
        cyan: "#22d3ee",
        frost: "rgba(255,255,255,0.08)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(34, 211, 238, 0.18)",
        violet: "0 0 100px rgba(139, 92, 246, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
