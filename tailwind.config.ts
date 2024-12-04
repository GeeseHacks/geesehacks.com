import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "organizers-purple-shadow": "0 0 5px 5px rgba(158, 99, 234, 0.4)", // For the organizer images in the carousel
        "purple-shadow": "0 0 20px 10px rgba(158, 99, 234, 0.6)", // For About Us box
        "terminal-glow1":
          "0 0 3px 3px rgba(160, 65, 255, 0.10), 0 0 2px 1px rgba(172, 48, 249, 1)", // For Hero section terminal
        "stat-inner-shadow": "inset 0 0 5px 2px rgba(255, 255, 255, 1)",
        "stat-card-shadow":
          "inset 0 0 5px 2px rgba(255, 255, 255, 0.3), 10px 10px 30px rgba(170, 34, 156, 0.6), -15px -15px 30px rgba(50, 15, 133, 0.6)",
      },
      colors: {
        "stat-card-bg": "#131F30",
      },

      blur: {
        "4xl": "150px",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const newUtilities = {
        ".text-shadow-white-glow": {
          // For the text in the Hero section
          textShadow: "0px 0px 25px rgba(255,255,255,0.25)",
        },
        ".text-shadow-section-header-glow": {
          // For the section headers
          textShadow: "0px 0px 45px rgba(148, 165, 255,0.85)",
        },
      };
      api.addUtilities(newUtilities, {
        respectPrefix: true,
        respectImportant: true,
      });
    },
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        options?: { respectPrefix?: boolean; respectImportant?: boolean }
      ) => void;
    }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    }),
  ],
};

export default config;
