import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('~/assets/heroBackground.png')",
        'wave-image': "url('~/assets/wave.png')",
        
      },
      boxShadow: {
        'purple-shadow': '0 0 20px 5px rgba(158, 99, 234, 0.6)',
        'stat-inner-shadow': 'inset 0 0 5px 2px rgba(255, 255, 255, 0.3)',
        'stat-card-shadow': 'inset 0 0 5px 2px rgba(255, 255, 255, 0.3), 10px 10px 30px rgba(170, 34, 156, 0.6), -15px -15px 30px rgba(50, 15, 133, 0.6)',
      },
      colors: {
        'stat-card-bg': '#131F30',
      },
    },
  },
  plugins: [],
};

export default config;
