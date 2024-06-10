import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/heroBackground.png')",
        'wave-image': "url('/images/wave.png')",
        
      },
      boxShadow: {
        'purple-shadow': '0 0 20px 10px rgba(158, 99, 234, 0.6)', // For About Us box
        'terminal-glow1': '0 0 10px 12px rgba(160, 65, 255, 0.77), 0 0 80px 40px rgba(172, 48, 249, 1)', // For Hero section terminal
        'stat-inner-shadow': 'inset 0 0 5px 2px rgba(255, 255, 255, 0.3)',
        'stat-card-shadow': 'inset 0 0 5px 2px rgba(255, 255, 255, 0.3), 10px 10px 30px rgba(170, 34, 156, 0.6), -15px -15px 30px rgba(50, 15, 133, 0.6)',
      },
      colors: {
        'stat-card-bg': '#131F30',
      },

    },
  },
  plugins: [
    function (api: PluginAPI) {
      const newUtilities = {
        '.text-shadow-white-glow': { // For the text in the Hero section
          textShadow: '0px 0px 25px rgba(255,255,255,0.65)',
        },
        '.text-shadow-section-header-glow': { // For the section headers
          textShadow: '0px 0px 45px rgba(148, 165, 255,0.85)',
        },
      };
      api.addUtilities(newUtilities, { respectPrefix: true, respectImportant: true });
    },
  ],
};

export default config;
