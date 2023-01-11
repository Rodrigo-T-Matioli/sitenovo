import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NextPage } from "next";
import Image from "next/image";
import evolucaoTreino from "../public/evolucao-do-treino-cases.png";
import importados from "../public/importados-cases.png";
import ResponsiveAppBar from "./navbar";
const Cases: NextPage = () => {
  const theme = useTheme();
  return (
    <div>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/linha-topo-blackfish-dark.jpg)"
              : "url(/linha-topo-blackfish.jpg)",
          height: "34px",
        }}
        className="bgLinhaPosicao"
      ></Box>

      <Box
        className="homeBgCinza"
        sx={{ textAlign: "center", paddingBottom: "90px" }}
      >
        <Typography color="primary" variant="h2">
          <strong>CASES</strong>
        </Typography>
        <Typography color="primary" variant="h6">
          para todos os tamanho de negócios
        </Typography>
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#4e4e4e" : "#9cc480",
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/linha-dark-topo-blackfish.jpg)"
              : "url(/linha-verde-topo-blackfish.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <Box className="containerpuro">
          <Grid container spacing={2} sx={{ pt: 9, pb: 16 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className="colorwhite">
                CONHEÇA O CASE <strong>EVOLUÇÃO DO TREINO</strong>
              </Typography>
              <Typography variant="h4" className="colorwhite">
                <strong>+ DE R$ 1MIL EM CONSULTORIA</strong>
              </Typography>
              <Typography variant="body1" className="colorwhite">
                Veja como rede de escolas bateu seu record de matrículas e
                faturou mais de R$ 7mi em vendas, só com marketing digital:
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="btnbrancoverde"
                sx={{ mt: 3 }}
              >
                <strong>Ver case</strong>
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Image
                src={evolucaoTreino}
                alt="Case Evolução do Treino Black Fish Digital"
                className="casesEvolucao"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/linha-dark-topo-blackfish.png)"
              : "url(/linha-azul-topo-blackfish.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          mt: "-30px",
          zIndex: "100",
          height: "34px",
          position: "relative",
        }}
      ></Box>
      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#4e4e4e" : "#79c7e1",
          zIndex: "100",
          position: "relative",
        }}
      >
        <Box className="containerpuro">
          <Grid container spacing={2} sx={{ py: 9 }}>
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Image
                src={importados}
                alt="Case Importados Black Fish Digital"
                className="casesImportados"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className="colorwhite">
                CONHEÇA O CASE <strong>EVOLUÇÃO DO TREINO</strong>
              </Typography>
              <Typography variant="h4" className="colorwhite">
                <strong>+ DE R$ 1MIL EM CONSULTORIA</strong>
              </Typography>
              <Typography variant="body1" className="colorwhite">
                Veja como rede de escolas bateu seu record de matrículas e
                faturou mais de R$ 7mi em vendas, só com marketing digital:
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="btnbrancoverde"
                sx={{ mt: 3 }}
              >
                <strong>Ver case</strong>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Cases;
