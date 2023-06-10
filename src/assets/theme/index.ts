import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
  },
  palette: {
    primary: {
      main: "#161b22",
    },
    secondary: {
      main: "#4285F4",
    },
    info: {
      main: "#00000099",
    },
    success: {
      main: "#24C76C",
    },
    warning: {
      main: "#FFBC30",
    },

    error: {
      main: "#DB0000",
      light: "#FF6161",
    },
    background: {
      default: "#F8F8F8",
    },
  },
  shape: {
    borderRadius: 2,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// @babel-ignore-comment-in-output Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default theme;
