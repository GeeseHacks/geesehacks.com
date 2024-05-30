import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
        'purple-shadow': '0 0 20px 5px rgba(158, 99, 234, 0.6)', // For About Us box
      }
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const newUtilities = {
        '.text-shadow-white-glow': {
          textShadow: '0px 0px 25px rgba(255,255,255,0.65)',
        },
      };
      api.addUtilities(newUtilities, { respectPrefix: true, respectImportant: true });
    },
  ],
};

export default config;
