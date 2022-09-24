module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      fontSize: {
        mainheading: [
          "50px",
          {
            lineHeight: "65px",
            fontWeight: 700,
          },
        ],
        heading: [
          "45px",
          {
            lineHeight: "59px",
          },
        ],
        heading2: [
          "45px",
          {
            lineHeight: "51px",
          },
        ],
        subheading: [
          "25px",
          {
            lineHeight: "33px",
          },
        ],
        subheading2: [
          "25px",
          {
            lineHeight: "28px",
          },
        ],
        miniheading: [
          "20px",
          {
            lineHeight: "29px",
          },
        ],
        para: [
          "16px",
          {
            lineHeight: "19px",
          },
        ],
        subpara: [
          "14px",
          {
            lineHeight: "17px",
          },
        ],
        subpara2: [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
      colors: {
        theme: "#1BA8B1",
        Gray: "#455A64",
        button: "#FF532D",
        tgray: "#DDDDDD",
        themetext: "#37474F",
        purple: "#7436FF",
        white: "#FFFFFF",
      },
      backgroundImage: {
        loginpage: "url('/login page.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
