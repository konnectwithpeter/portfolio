import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "@fontsource/source-code-pro"; // Defaults to weight 400
import "@fontsource/source-code-pro/400.css"; // Specify weight
import "@fontsource/source-code-pro/400-italic.css"; // Specify weight and style
import { ThemeProvider, createTheme } from "@mui/material";
import reportWebVitals from './reportWebVitals';

const theme = createTheme({

  palette: {
    primary: {
      main: '#2e7d32',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

  },
  typography: {
    fontFamily: "Source Code Pro, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Source Code Pro';
          font-style: bold;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },

    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
