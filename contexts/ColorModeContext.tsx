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
                    h2: {
                      ["@media (max-width:900px)"]: {
                        fontSize: "50px !important",
                      },
                      ["@media (max-width:600px)"]: {
                        fontSize: "30px !important",
                      },
                    },
                    h3: {
                      ["@media (max-width:900px)"]: {
                        fontSize: "35px !important",
                      },
                      ["@media (max-width:600px)"]: {
                        fontSize: "24px !important",
                      },
                    },
                    h4: {
                      ["@media (max-width:900px)"]: {
                        fontSize: "30px !important",
                      },
                      ["@media (max-width:600px)"]: {
                        fontSize: "20px !important",
                      },
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
                    ".btnbrancoverde": {
                      backgroundColor: "#ffffff !important",
                      color: "#9cc480 !important",
                      borderRadius: "100px !important",
                    },
                    ".btnbrancoazul": {
                      backgroundColor: "#ffffff !important",
                      color: "#79c7e1 !important",
                      borderRadius: "100px !important",
                    },
                    ".btnbrancovermelho": {
                      backgroundColor: "#ffffff !important",
                      color: "#f48385 !important",
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
                    ".paddingBottomXG": {
                      paddingBottom: "130px",
                    },
                    ".paddingBottomG": {
                      paddingBottom: "50px",
                    },
                    ".paddingBottomM": {
                      paddingBottom: "25px",
                    },
                    ".paddingBottomP": {
                      paddingBottom: "10px",
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
                    ".homeEvolucao": {
                      ["@media (max-width:900px)"]: {
                        height: "285px",
                        padding: "0px !important",
                      },
                    },
                    ".homeImgCase": {
                      position: "absolute",
                      bottom: 0,
                      left: "30%",
                      ["@media (max-width:1200px)"]: {
                        left: "5%",
                      },
                      ["@media (max-width:900px)"]: {
                        position: "relative",
                        bottom: "auto",
                        left: "auto",
                        margin: "auto",
                        height: "285px",
                        width: "300px",
                      },
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
                        width: "90%",
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
                    ".displayflexwrap": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    },
                    ".displayflexright": {
                      display: "flex",
                      alignItems: "right",
                      justifyContent: "right",
                    },
                    ".esqCol": {
                      width: "50%",
                      paddingRight: "50px",
                      ["@media (max-width:1200px)"]: {
                        width: "100%",
                        paddingRight: "10px",
                        padding: "10px",
                      },
                    },
                    ".homeEstrutura": {
                      display: "flex",
                      alignItems: "center",
                      ["@media (max-width:1200px)"]: {
                        display: "grid",
                      },
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
                        width: "90%",
                      },
                      margin: "auto",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      display: "flex",
                    },
                    ".imgFunil": {
                      ["@media (max-width:1300px)"]: {
                        transform: "scale(0.7)",
                      },
                    },
                    ".funilHome": {
                      ["@media (max-width:720px)"]: {
                        width: "100%",
                        height: "auto",
                      },
                    },
                    ".planoGeral": {
                      backgroundColor: "#3d1241",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnGeral": {
                      backgroundColor: "#771181 !important",
                    },
                    ".planoGeralRodape": {
                      backgroundColor: "#3d1241",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".planoGoogle": {
                      backgroundColor: "#79c7e1",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnGoogle": {
                      backgroundColor: "#69b8d3 !important",
                    },
                    ".boxPlanos": {
                      backgroundColor: "#f6f6f6",
                      textAling: "center !important",
                      width: "100%",
                    },
                    ".planoGoogleRodape": {
                      backgroundColor: "#79c7e1",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".colorGoogle": {
                      color: "#79c7e1",
                    },
                    ".planoSocial": {
                      backgroundColor: "#c480b6",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnSocial": {
                      backgroundColor: "#ab689d !important",
                    },
                    ".planoSocialRodape": {
                      backgroundColor: "#c480b6",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".colorSocial": {
                      color: "#c480b6",
                    },
                    ".planoGoogleSocial": {
                      backgroundColor: "#9cc480",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnGoogleSocial": {
                      backgroundColor: "#86ac6c !important",
                    },
                    ".planoGoogleSocialRodape": {
                      backgroundColor: "#9cc480",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".planoConteudoArte": {
                      backgroundColor: "#e1897b",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnConteudoArte": {
                      backgroundColor: "#c97466 !important",
                    },
                    ".planoConteudoArteRodape": {
                      backgroundColor: "#e1897b",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".colorGoogleSocial": {
                      color: "#9cc480",
                    },
                    ".bgLinhaPosicao": {
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    },
                    ".logoReactAlign": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "right",
                      ["@media (max-width:900px)"]: {
                        display: "grid",
                        justifyContent: "center",
                      },
                    },
                    ".txtCopyRight": {
                      textAlign: "left",
                      ["@media (max-width:900px)"]: {
                        textAlign: "center",
                      },
                    },
                    ".casesEvolucao": {
                      position: "absolute",
                      bottom: "-122px",
                      right: "0px",
                    },
                    ".casesImportados": {
                      position: "absolute",
                      bottom: "-72px",
                      left: "calc(100% - 70%)",
                    },
                    ".case-home-txt": {
                      width: "590px",
                    },
                    ".home-case2": {
                      padding: "16px !important",
                    },
                    ".corverde": {
                      color: "#5bb74c",
                    },
                    ".corrosa": {
                      color: "#c37fb6",
                    },
                    ".positionRelative": {
                      position: "relative",
                    },
                    ".metricaTopEsq": {
                      position: "absolute",
                      top: 50,
                      left: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        top: "auto",
                        left: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".metricaTopDir": {
                      position: "absolute",
                      top: 50,
                      right: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        top: "auto",
                        right: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".metricaBottomEsq": {
                      position: "absolute",
                      bottom: 100,
                      left: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        bottom: "auto",
                        left: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".metricaBottomDir": {
                      position: "absolute",
                      bottom: 100,
                      right: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        bottom: "auto",
                        right: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".plataformaEvolucao": {
                      ["@media (max-width:900px)"]: {
                        width: "100%",
                        height: "auto",
                      },
                    },
                    ".metricasEvolucao": {
                      ["@media (max-width:1050px)"]: {
                        width: "80%",
                        height: "auto",
                      },
                    },
                    ".mobileEvolucao": {
                      ["@media (max-width:900px)"]: {
                        width: "80%",
                        margin: "auto",
                      },
                    },
                    ".casesInt": {
                      ["@media (max-width:740px)"]: {
                        width: "100%",
                        height: "auto",
                        margin: "auto",
                      },
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
                    h2: {
                      ["@media (max-width:900px)"]: {
                        fontSize: "50px !important",
                      },
                      ["@media (max-width:600px)"]: {
                        fontSize: "30px !important",
                      },
                    },
                    h3: {
                      ["@media (max-width:900px)"]: {
                        fontSize: "35px !important",
                      },
                      ["@media (max-width:600px)"]: {
                        fontSize: "24px !important",
                      },
                    },
                    h4: {
                      ["@media (max-width:900px)"]: {
                        fontSize: "30px !important",
                      },
                      ["@media (max-width:600px)"]: {
                        fontSize: "20px !important",
                      },
                    },
                    "h1, h2, h3, h4, h5, h6, p": {
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
                    ".btnbrancoverde": {
                      backgroundColor: "#ffffff !important",
                      color: "#1e1e1e !important",
                      borderRadius: "100px !important",
                    },
                    ".btnbrancoazul": {
                      backgroundColor: "#ffffff !important",
                      color: "#1e1e1e !important",
                      borderRadius: "100px !important",
                    },
                    ".btnbrancovermelho": {
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
                    ".paddingBottomXG": {
                      paddingBottom: "130px",
                    },
                    ".paddingBottomG": {
                      paddingBottom: "50px",
                    },
                    ".paddingBottomM": {
                      paddingBottom: "25px",
                    },
                    ".paddingBottomP": {
                      paddingBottom: "10px",
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
                    ".homeEvolucao": {
                      ["@media (max-width:900px)"]: {
                        height: "285px",
                        padding: "0px !important",
                      },
                    },
                    ".homeImgCase": {
                      position: "absolute",
                      bottom: 0,
                      left: "30%",
                      ["@media (max-width:1200px)"]: {
                        left: "5%",
                      },
                      ["@media (max-width:900px)"]: {
                        position: "relative",
                        bottom: "auto",
                        left: "auto",
                        margin: "auto",
                        height: "285px",
                        width: "300px",
                      },
                    },
                    ".btnpadrao": {
                      borderRadius: "100px !important",
                      background: "#ffffff !important",
                      color: "#000000 !important",
                    },
                    ".radius": {
                      borderRadius: "500px !important",
                    },
                    ".bordaDepoimento": {
                      border: "10px solid #000000",
                    },
                    ".areaOrcamento": {
                      width: "1400px",
                      ["@media (max-width:1400px)"]: {
                        width: "90%",
                      },
                      margin: "auto",
                      background: "#1e1e1e",
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
                    ".displayflexwrap": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    },
                    ".displayflexright": {
                      display: "flex",
                      alignItems: "right",
                      justifyContent: "right",
                    },
                    ".esqCol": {
                      width: "50%",
                      paddingRight: "50px",
                      ["@media (max-width:1200px)"]: {
                        width: "100%",
                        paddingRight: "10px",
                        padding: "10px",
                      },
                    },
                    ".homeEstrutura": {
                      display: "flex",
                      alignItems: "center",
                      ["@media (max-width:1200px)"]: {
                        display: "grid",
                      },
                    },
                    ".btnenviar": {
                      backgroundColor: "#000000 !important",
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
                        width: "90%",
                      },
                      margin: "auto",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      display: "flex",
                    },
                    ".imgFunil": {
                      ["@media (max-width:1300px)"]: {
                        transform: "scale(0.7)",
                      },
                    },
                    ".funilHome": {
                      ["@media (max-width:720px)"]: {
                        width: "100%",
                        height: "auto",
                      },
                    },
                    ".planoGeral": {
                      backgroundColor: "#3f3f3f",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnGeral": {
                      backgroundColor: "#363636 !important",
                    },
                    ".planoGeralRodape": {
                      backgroundColor: "#3f3f3f",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".planoGoogle": {
                      backgroundColor: "#3f3f3f",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnGoogle": {
                      backgroundColor: "#363636 !important",
                    },
                    ".boxPlanos": {
                      backgroundColor: "#4e4e4e",
                      textAling: "center !important",
                      width: "100%",
                    },
                    ".planoGoogleRodape": {
                      backgroundColor: "#3f3f3f",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".colorGoogle": {
                      color: "#f1f1f1",
                    },
                    ".planoSocial": {
                      backgroundColor: "#3f3f3f",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnSocial": {
                      backgroundColor: "#363636 !important",
                    },
                    ".planoSocialRodape": {
                      backgroundColor: "#3f3f3f",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".colorSocial": {
                      color: "#f1f1f1",
                    },
                    ".planoGoogleSocial": {
                      backgroundColor: "#3f3f3f",
                      textAlign: "center",
                      padding: "20px",
                      borderTopLeftRadius: "30px",
                      borderTopRightRadius: "30px",
                    },
                    ".btnGoogleSocial": {
                      backgroundColor: "#363636 !important",
                    },
                    ".planoGoogleSocialRodape": {
                      backgroundColor: "#3f3f3f",
                      padding: "10px",
                      borderBottomLeftRadius: "30px",
                      borderBottomRightRadius: "30px",
                    },
                    ".colorGoogleSocial": {
                      color: "#f1f1f1",
                    },
                    ".bgLinhaPosicao": {
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    },
                    ".logoReactAlign": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "right",
                      ["@media (max-width:900px)"]: {
                        display: "grid",
                        justifyContent: "center",
                      },
                    },
                    ".txtCopyRight": {
                      textAlign: "left",
                      ["@media (max-width:900px)"]: {
                        textAlign: "center",
                      },
                    },
                    ".casesEvolucao": {
                      position: "absolute",
                      bottom: "-122px",
                      right: "0px",
                    },
                    ".casesImportados": {
                      position: "absolute",
                      bottom: "-72px",
                      left: "calc(100% - 70%)",
                    },
                    ".case-home-txt": {
                      width: "590px",
                    },
                    ".home-case2": {
                      padding: "16px !important",
                    },
                    ".corverde": {
                      color: "#ffffff",
                    },
                    ".corrosa": {
                      color: "#ffffff",
                    },
                    ".positionRelative": {
                      position: "relative",
                    },
                    ".metricaTopEsq": {
                      position: "absolute",
                      top: 50,
                      left: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        top: "auto",
                        left: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".metricaTopDir": {
                      position: "absolute",
                      top: 50,
                      right: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        top: "auto",
                        right: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".metricaBottomEsq": {
                      position: "absolute",
                      bottom: 100,
                      left: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        bottom: "auto",
                        left: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".metricaBottomDir": {
                      position: "absolute",
                      bottom: 100,
                      right: 0,
                      ["@media (max-width:1050px)"]: {
                        position: "relative",
                        bottom: "auto",
                        right: "auto",
                        width: "50%",
                        float: "left",
                      },
                    },
                    ".plataformaEvolucao": {
                      ["@media (max-width:900px)"]: {
                        width: "100%",
                        height: "auto",
                      },
                    },
                    ".metricasEvolucao": {
                      ["@media (max-width:1050px)"]: {
                        width: "80%",
                        height: "auto",
                      },
                    },
                    ".mobileEvolucao": {
                      ["@media (max-width:900px)"]: {
                        width: "80%",
                        margin: "auto",
                      },
                    },
                    ".casesInt": {
                      ["@media (max-width:740px)"]: {
                        width: "100%",
                        height: "auto",
                        margin: "auto",
                      },
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
