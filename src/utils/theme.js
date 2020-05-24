import { extendDefaultTheme } from "grommet"

const theme = {
  global: {
    colors: {
      icon: {
        "0": "#",
        "1": "2",
        "2": "e",
        "3": "2",
        "4": "e",
        "5": "2",
        "6": "e",
        dark: "#f8f8f8",
        light: "#2e2e2e",
      },
      text: {
        dark: "#f8f8f8",
        light: "#2e2e2e",
      },
      dark: "#2e2e2e",
      brand: "#33538A",
      focus: "#6A8CC2",
    },
    font: {
      family: '"Poppins", sans-serif',
      size: "16px",
    },
    breakpoints: {
      medium: {
        value: 1200,
      },
      small: {
        value: 812,
      },
    },
    focus: {
      border: {
        color: "brand",
      },
      outline: {
        color: "brand",
      },
    },
  },
  accordion: {
    border: {
      side: "bottom",
      color: "f8f8f8",
    },
  },
  heading: {
    font: {
      family: '"Heebo", sans-serif',
    },
  },
  formField: {
    border: {
      side: "all",
    },
  },
}

extendDefaultTheme(theme)

const globalStyle = `
body {
  margin: 72px 0px 0px 0px;
  background-color: #F8F8F8
}
`

export { theme, globalStyle }
