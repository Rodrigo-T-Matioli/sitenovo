import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import PagesHead from "../components/Pages";
import caseEvolucaoLight from "../public/casesantander/case-evolucao-do-treino.png";
import likeaDiamond from "../public/casesantander/case-like-a-diamond.png";
import plataformaDark from "../public/casesantander/case-santander-plataforma-dark.png";
import plataformaLight from "../public/casesantander/case-santander-plataforma.png";
import siteExplicandoLight from "../public/casesantander/case-santander-siteexplicando-1.png";
import siteExplicandoLight2 from "../public/casesantander/case-santander-siteexplicando-2.png";
import siteExplicandoLight3 from "../public/casesantander/case-santander-siteexplicando-3.png";
import FormularioOrcamento from "./formulario";
import ResponsiveAppBarSec from "./navbarsecondary";
const Satander: NextPage = () => {
  const theme = useTheme();
  return (
    <PagesHead
      title="Case Santander - Black Fish agencia de marketing digital"
      description="Confira a plataforma que desenvolvemos para o Santander. Veja nosso case de sucesso agora mesmo!"
      path="/santander"
    >
      <ResponsiveAppBarSec />
      <Box
        sx={{
          height: { xs: "400px", lg: "100vh" },
          width: "100%",
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/casesantander/santander-topo-dark.jpg)"
              : "url(/casesantander/santander-topo.jpg)",
          backgroundSize: "cover",
          backgroundRepeater: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            className="colorwhite"
            variant="h2"
            sx={{ textAlign: "center" }}
          >
            <strong>PLATAFORMA SANTANDER</strong>
          </Typography>
          <Typography
            className="colorwhite"
            variant="h6"
            sx={{ textAlign: "center" }}
          >
            Para funcion??rios de empresas do conglomerado Santander.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          background: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/casesantander/bg-plataforma-dark.png)"
              : "url(/casesantander/bg-plataforma.png)",
          backgroundRepeat: "repeat-x",
        }}
        className="paddingTopG"
      >
        <Box className="containerpuro">
          <Typography
            variant="h3"
            className="corrosa"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            PLATAFORMAS QUE VENDEM E IMPACTAM
          </Typography>
          <Typography variant="body1" className="paddingBottomM">
            O objetivo desta campanha ?? estimular os funcion??rios das empresas
            do conglomerado Santander, titulares de cart??o de cr??dito Santander
            participante do Programa de Pontos Esfera, a indicar
            estabelecimentos comerciais Pessoa Jur??dica, tal como supermercados,
            padarias, lanchonetes, a??ougues e afins.
          </Typography>
          {theme.palette.mode === "dark" ? (
            <Image
              src={plataformaDark}
              className="plataformaEvolucao"
              alt="Plataforma evolu????o do treino"
            />
          ) : (
            <Image
              src={plataformaLight}
              className="plataformaEvolucao"
              alt="Plataforma evolu????o do treino"
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#1e1e1e" : "#c37fb6",
          pt: "120px",
          mt: "-150px",
        }}
      >
        <Box
          className="containerpuro paddingTopG paddingBottomG"
          sx={{ textAlign: "center" }}
        >
          <Typography
            variant="h3"
            className="colorwhite"
            sx={{ fontWeight: 700 }}
          >
            SITE EXPLICANDO A CAMPANHA
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={12} lg={6} sx={{ textAlign: "center" }}>
              <Image
                src={siteExplicandoLight}
                className="plataformaEvolucao"
                alt="Primeira imagem do site explicando a campanha"
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6} sx={{ textAlign: "center" }}>
              <Image
                src={siteExplicandoLight2}
                className="plataformaEvolucao"
                alt="Segunda imagem do site explicando a campanha"
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center" }}>
              <Image
                src={siteExplicandoLight3}
                className="plataformaEvolucao"
                alt="Terceira imagem do site explicando a campanha"
              />
            </Grid>
          </Grid>
          <Link href="#orcamento" rel="noopener noreferrer">
            <Button
              fullWidth
              variant="contained"
              size="large"
              className="btnbrancovermelho"
              sx={{ mt: 3, fontWeight: 700 }}
            >
              Or??amento
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#1e1e1e" : "#f1f1f1",
        }}
      >
        <Box className="containerpuro paddingG">
          <Typography
            variant="h3"
            className="corrosa"
            sx={{
              fontWeight: 700,
              mb: 3,
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            VEJA OUTROS CASES
          </Typography>
          <Box className="displayflexwrap">
            <Box
              sx={{
                width: { xs: "100%", lg: "45%" },
              }}
            >
              <Box
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#ffffff" : "#9cc480",
                  backgroundImage:
                    theme.palette.mode === "dark"
                      ? "url(/caseevolucao/bg-outros-cases-dark.png)"
                      : "url(/caseevolucao/bg-outros-cases.png)",
                  backgroundRepeat: "repeat-x",
                  textAlign: "center",
                  mb: 2,
                  p: 0,
                }}
              >
                <Link href="/evolucaodotreino" rel="noopener noreferrer">
                  <Image
                    src={caseEvolucaoLight}
                    className="casesInt"
                    alt="Case Santander"
                  />
                </Link>
              </Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 1, textDecoration: "none" }}
              >
                EVOLU????O DO TREINO
              </Typography>
              <Typography variant="body1">Mais 500% em vendas!</Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", lg: "45%" },
              }}
            >
              <Box
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                  backgroundImage:
                    theme.palette.mode === "dark"
                      ? "url(/caseevolucao/bg-outros-cases-dark.png)"
                      : "url(/caseevolucao/bg-outros-cases.png)",
                  backgroundRepeat: "repeat-x",
                  textAlign: "center",
                  mb: 2,
                  p: 0,
                }}
              >
                <Link href="/likeadiamond" rel="noopener noreferrer">
                  <Image
                    src={likeaDiamond}
                    className="mobileEvolucao"
                    alt="Case importados"
                  />
                </Link>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                LIKE A DIAMOND
              </Typography>
              <Typography variant="body1">
                Planejamento mensal de todo o conte??do e arte.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="marginTopG" id="orcamento">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="primary">
            <strong>SOLICITE UM OR??AMENTO</strong>
          </Typography>
        </Box>
        <FormularioOrcamento />
      </Box>

      <Box sx={{ py: 2 }} className="copyright">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6} className="txtCopyRight">
            <Typography variant="body2" color="secondary">
              <strong>
                Todos os direitos reservados 2020 ?? BlackFish | Ag??ncia de
                Marketing
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Box className="logoReactAlign">
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                  textAlign: { xs: "center" },
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/logo-reactjs-dark.png"
                    alt="Logo ReactJS copyright"
                    width={56}
                    height={56}
                  />
                ) : (
                  <Image
                    src="/logo-reactjs.png"
                    alt="Logo ReactJS copyright"
                    width={56}
                    height={56}
                  />
                )}
              </Box>
              <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                <Typography variant="body2" color="secondary">
                  Desenvolvido com t??cnologia
                </Typography>
                <Typography variant="body2" color="secondary">
                  <strong> ReactJS </strong>
                </Typography>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/logo-reactjs-dark.png"
                    alt="Logo ReactJS copyright"
                    width={56}
                    height={56}
                  />
                ) : (
                  <Image
                    src="/logo-reactjs.png"
                    alt="Logo ReactJS copyright"
                    width={56}
                    height={56}
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PagesHead>
  );
};

export default Satander;
