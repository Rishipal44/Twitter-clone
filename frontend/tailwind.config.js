import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      {
        customblack: {
          primary: "rgb(29, 155, 240)",
          secondary: "rgb(24, 24, 24)",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1a1a1a",
          "base-content": "#ffffff",
          // Add more as needed
        },
      },
    ],
  },
};
