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
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
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
                      ["@media (max-width:1300px)"]: {
                        maxWidth: "90%",
                      },
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
                    ".areaOrcamento": {
                      width: "1400px",
                      ["@media (max-width:1400px)"]: {
                        maxWidth: "90%",
                      },
                      margin: "auto",
                      background: "#451245",
                      padding: "20px",
                    },
                    ".campoBlack": {
                      border: "1px solid #ffffff !important",
                    },
                    ".campoBlack input, .campoBlack label, .campoBlack textarea":
                      {
                        color: "#ffffff !important",
                      },
                    ".campoBlack fieldset": {
                      display: "none",
                    },
                    ".displayflex": {
                      display: "flex",
                      alignItems: "center",
                    },
                    ".btnenviar": {
                      backgroundColor: "#93277c !important",
                      color: "#ffffff !important",
                      borderRadius: "100px !important",
                      fontSize: "18px !important",
                      padding: "8px",
                      width: "100%",
                      border: "none",
                      marginTop: "10px",
                    },
                    ".areaTel": {
                      border: "1px solid #ffffff",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    },
                    ".copyright": {
                      width: "1400px",
                      ["@media (max-width:1400px)"]: {
                        maxWidth: "90%",
                      },
                      margin: "auto",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      display: "flex",
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
                      ["@media (max-width:1300px)"]: {
                        maxWidth: "90%",
                      },
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
                    ".radius": {
                      borderRadius: "500px !important",
                    },
                    ".bordaDepoimento": {
                      border: "10px solid #93277c",
                    },
                    ".areaOrcamento": {
                      width: "1400px",
                      ["@media (max-width:1400px)"]: {
                        maxWidth: "90%",
                      },
                      margin: "auto",
                      background: "#451245",
                      padding: "20px",
                    },
                    ".campoBlack": {
                      border: "1px solid #ffffff !important",
                    },
                    ".campoBlack input, .campoBlack label": {
                      color: "#ffffff !important",
                    },
                    ".campoBlack fieldset": {
                      display: "none",
                    },
                    ".displayflex": {
                      display: "flex",
                      alignItems: "center",
                    },
                    ".btnenviar": {
                      backgroundColor: "#93277c !important",
                      color: "#ffffff !important",
                      borderRadius: "100px !important",
                      fontSize: "18px !important",
                      p: 2,
                      width: "100%",
                      border: "none",
                      mt: 1,
                    },
                    ".areaTel": {
                      border: "1px solid #ffffff",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    },
                    ".copyright": {
                      width: "1400px",
                      ["@media (max-width:1400px)"]: {
                        maxWidth: "90%",
                      },
                      margin: "auto",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      display: "flex",
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
