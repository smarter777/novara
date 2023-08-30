module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: {max: "1024px"}, md: { max: "768px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_a2: "#ffffffa2", A700: "#ffffff" },
        gray: {
          50: "#f4f7fe",
          200: "#eaeaea",
          700: "#5f5b5b",
          "700_7f": "#5f5b5b7f",
        },
        black: {
          900: "#000000",
          "900_8c": "#0000008c",
          "900_00": "#00000000",
          "900_99": "#00000099",
        },
        red: { 600: "#de3232" },
        blue_gray: {
          900: "#303030",
          "900_bf": "#303030bf",
          "900_14": "#18274b14",
          "900_1e": "#18274b1e",
        },
        deep_orange: { 500: "#f96221" },
      },
      fontFamily: { outfit: "Outfit", nunito: "Nunito", inter: "Inter" },
      boxShadow: {
        bs: "0px 12px  42px -4px #18274b1e",
        bs1: "0px 8px  24px -4px #18274b14",
      },
      textShadow: { ts: "0px 12px  42px #18274b1e" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
