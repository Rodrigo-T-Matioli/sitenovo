import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export interface ColorModeProps {
  children: React.ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProps) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            // light: will be calculated from palette.primary.main,
            main: "#461245",
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            light: "#f1f1f1",
            main: "#1e1e1e",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#ffffff",
          },
        },
        ...(mode === "light"
          ? {
              // palette values for light mode
              components: {
                MuiCssBaseline: {
                  styleOverrides: {
                    a: {
                      textDecoration: "none !important",
                    },
                    ".containerpuro": {
                      margin: "auto",
                      maxWidth: 1300,
                    },
                    ".btnbranco": {
                      backgroundColor: "#ffffff !important",
                      color: "#491247 !important",
                      borderRadius: "100px !important",
                    },
                    ".colorwhite": {
                      color: "#ffffff !important",
                    },
                    ".bgroxo": {
                      backgroundColor: "#491247 !important",
                    },
                    ".paddingG": {
                      padding: "50px !important",
                    },
                    ".paddingM": {
                      padding: "25px !important",
                    },
                    ".paddingP": {
                      padding: "10px !important",
                    },
                    ".paddingTopXG": {
                      paddingTop: "130px",
                    },
                    ".paddingTopG": {
                      paddingTop: "50px",
                    },
                    ".paddingTopM": {
                      paddingTop: "25px",
                    },
                    ".paddingTopP": {
                      paddingTop: "10px",
                    },
                    ".marginTopG": {
                      paddingTop: "50px",
                    },
                    ".marginTopM": {
                      paddingTop: "25px",
                    },
                    ".marginTopP": {
                      paddingTop: "10px",
                    },
                    ".homeBgCinza": {
                      background: "#f1f1f1",
                    },
                    ".btnCaseEvol": {
                      background: "#688e4d !important",
                      color: "#f1f1f1 !important",
                      borderRadius: "100px !important",
                    },
                    ".homeImgCase": {
                      position: "absolute",
                      bottom: 0,
                      left: "30%",
                    },
                    ".btnpadrao": {
                      borderRadius: "100px !important",
                    },
                    ".radius": {
                      borderRadius: "500px !important",
                    },
                    ".bordaDepoimento": {
                      border: "10px solid #93277c",
                    },
                  },
                },
              },
            }
          : {
              // palette values for dark mode
              components: {
                MuiCssBaseline: {
                  styleOverrides: {
                    a: {
                      textDecoration: "none !important",
                    },
                    "h1, h2, h3, h4, h5, h6": {
                      color: "#ffffff !important",
                    },
                    ".containerpuro": {
                      margin: "auto",
                      maxWidth: 1300,
                    },
                    ".btnbranco": {
                      backgroundColor: "#ffffff !important",
                      color: "#1e1e1e !important",
                      borderRadius: "100px !important",
                    },
                    ".colorwhite": {
                      color: "#ffffff !important",
                    },
                    ".bgroxo": {
                      backgroundColor: "#1e1e1e !important",
                    },
                    ".paddingG": {
                      padding: "50px !important",
                    },
                    ".paddingM": {
                      padding: "25px !important",
                    },
                    ".paddingP": {
                      padding: "10px !important",
                    },
                    ".paddingTopXG": {
                      paddingTop: "130px",
                    },
                    ".paddingTopG": {
                      paddingTop: "50px",
                    },
                    ".paddingTopM": {
                      paddingTop: "25px",
                    },
                    ".paddingTopP": {
                      paddingTop: "10px",
                    },
                    ".marginTopG": {
                      paddingTop: "50px",
                    },
                    ".marginTopM": {
                      paddingTop: "25px",
                    },
                    ".marginTopP": {
                      paddingTop: "10px",
                    },
                    ".homeBgCinza": {
                      background: "#1e1e1e",
                    },
                    ".btnCaseEvol": {
                      background: "#688e4d !important",
                      color: "#f1f1f1 !important",
                      borderRadius: "100px !important",
                    },
                    ".homeImgCase": {
                      position: "absolute",
                      bottom: 0,
                      left: "30%",
                    },
                    ".btnpadrao": {
                      borderRadius: "100px !important",
                    },
                    ".bordaDepoimento": {
                      border: "10px solid #93277c",
                    },
                  },
                },
              },
            }),
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContext;
