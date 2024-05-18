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
      },
      
      boxShadow: {
        'custom': '0 10px 30px 10px rgba(220, 102, 0, 0.4), 0 5px 10px -2px rgba(220, 102, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
