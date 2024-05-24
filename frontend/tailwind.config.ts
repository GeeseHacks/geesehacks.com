import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./framer/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('~/assets/heroBackground.png')",
        'wave-image': "url('~/assets/wave.png')",
      },
      
      boxShadow: {
        'orange-shadow': '0 0 20px 5px rgba(220, 102, 0, 0.6)'
      },
    },
  },
  plugins: [],
};
export default config;
