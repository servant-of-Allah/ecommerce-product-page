/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        dBlue: "hsl(220, 13%, 13%)",
        dGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lGrayishBlue: "hsl(223, 64%, 98%)",
      },
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    screens: {
      xs: "375px",
      ss: "576px",
      sm: "800px",
      md: "1000px",
      lg: "1200px",
      xlg: "1500px",
    },
  },
  plugins: [],
};
