import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import caseSantanderLight from "../public/caseevolucao/case-santander.png";
import caseEvolucaoLight from "../public/casesantander/case-evolucao-do-treino.png";
import plataformaLight from "../public/lieadiamond/case-like-a-diamond-plataforma.jpg";
import mobileLight from "../public/lieadiamond/case-like-a-diamond-posts.png";
import FormularioOrcamento from "./formulario";
import ResponsiveAppBarSec from "./navbarsecondary";
const LikeaDiamond: NextPage = () => {
  const theme = useTheme();
  return (
    <div>
      <ResponsiveAppBarSec />
      <Box
        sx={{
          height: { xs: "400px", lg: "100vh" },
          width: "100%",
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/lieadiamond/like-a-diamond-topo.jpg)"
              : "url(/lieadiamond/like-a-diamond-topo.jpg)",
          backgroundSize: "cover",
          backgroundRepeater: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: { xs: "5%", lg: "10%" },
        }}
      >
        <Box>
          <Typography
            className="colorwhite"
            variant="h2"
            sx={{ textAlign: "left" }}
          >
            <strong>CONTEÚDO E ARTE</strong>
          </Typography>
          <Typography className="colorwhite" variant="h6">
            Planejamento mensal de todo o conteúdo e arte.
          </Typography>
        </Box>
      </Box>

      <Box className="paddingM homeBgCinzaEscuro">
        <Box className="containerpuro displayflexwrap">
          <Box sx={{ margin: { xs: "auto", lg: "0" } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                textAlign: { xs: "center", lg: "left" },
                color: "#ffffff",
              }}
            >
              CRIAÇÃO DA
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", lg: "left" }, color: "#ffffff" }}
            >
              IDENTIDADE VISUAL
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Image
              src="/caseevolucao/seta.png"
              alt="Logo evolução do treino"
              width={106}
              height={54}
            />
          </Box>
          <Box sx={{ margin: { xs: "auto", lg: "0" } }}>
            <Image
              src="/lieadiamond/logo-like-a-diamond.png"
              alt="Logo like a diamond"
              width={320}
              height={112}
            />
          </Box>
        </Box>
      </Box>

      <Box className="containerpuro displayflexwrap paddingTopM paddingBottomM">
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 4 }}>
            CAMPANHAS QUE IMPACTAM E GERAM RESULTADOS!
          </Typography>
          <Typography variant="body1">
            Os nossos anúncios de cadastros são direcionados para vários
            clusters diferentes, focamos em buscas por interesse, look alike,
            semelhantes e remarketing. Dessa forma conseguimos atingir o mercado
            num total e aumentar a entrega qualificada de leads para o cliente.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: { xs: "auto", lg: "0" },
            width: { xs: "100%", lg: "50%" },
            textAlign: "center",
          }}
        >
          <Image
            src={mobileLight}
            className="mobileEvolucao"
            alt="Posts evolução do treino"
          />
        </Box>
      </Box>

      <Box className="homeBgCinza">
        <Box className="containerpuro paddingTopM paddingBottomM">
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}
          >
            CONTEÚDO QUE ATRAI E CONVERTE
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
            Nós criamos conteúdo que cativa e convence, transformando visitantes
            em clientes leais para sua marca.
            <br />
            Descubra como agora!
          </Typography>
          <Grid container spacing={3} className="paddingTopM">
            <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center", p: 2 }}>
              <Image
                src="/lieadiamond/case-diamond_01.jpg"
                alt="Case post Like a Diamond"
                width={320}
                height={320}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center", p: 2 }}>
              <Image
                src="/lieadiamond/case-diamond_02.jpg"
                alt="Case post Like a Diamond"
                width={320}
                height={320}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center", p: 2 }}>
              <Image
                src="/lieadiamond/case-diamond_03.jpg"
                alt="Case post Like a Diamond"
                width={320}
                height={320}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center", p: 2 }}>
              <Image
                src="/lieadiamond/case-diamond_04.jpg"
                alt="Case post Like a Diamond"
                width={320}
                height={320}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center", p: 2 }}>
              <Image
                src="/lieadiamond/case-diamond_05.jpg"
                alt="Case post Like a Diamond"
                width={320}
                height={320}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center", p: 2 }}>
              <Image
                src="/lieadiamond/case-diamond_06.jpg"
                alt="Case post Like a Diamond"
                width={320}
                height={320}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          background: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
          backgroundImage: "url(/caseevolucao/bg-plataforma.png)",
          backgroundRepeat: "repeat-x",
        }}
        className="paddingTopG paddingBottomG"
      >
        <Typography
          variant="h3"
          className="colorwhite"
          sx={{ fontWeight: 700, mb: 4 }}
        >
          PLATAFORMAS QUE VENDEM E IMPACTAM
        </Typography>
        <Image
          src={plataformaLight}
          className="plataformaEvolucao"
          alt="Plataforma evolução do treino"
        />
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#1e1e1e" : "#f1f1f1",
        }}
      >
        <Box className="containerpuro paddingG">
          <Typography
            variant="h3"
            className="corverde"
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
                  background: "#c37fb6",
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
                <Link href="/santander" rel="noopener noreferrer">
                  <Image
                    src={caseSantanderLight}
                    className="casesInt"
                    alt="Case Santander"
                  />
                </Link>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                SANTANDER
              </Typography>
              <Typography variant="body1">
                Temos uma equipe de designers, programadores e conteúdo digital
                qualificadas para criar o produto digital que precisa.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", lg: "45%" },
              }}
            >
              <Box
                sx={{
                  background: "#9cc480",
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
                    className="mobileEvolucao"
                    alt="Case importados"
                  />
                </Link>
              </Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 1, textDecoration: "none" }}
              >
                EVOLUÇÃO DO TREINO
              </Typography>
              <Typography variant="body1">Mais 500% em vendas!</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="marginTopG" id="orcamento">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="primary">
            <strong>SOLICITE UM ORÇAMENTO</strong>
          </Typography>
        </Box>
        <FormularioOrcamento />
      </Box>

      <Box sx={{ py: 2 }} className="copyright">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6} className="txtCopyRight">
            <Typography variant="body2" color="secondary">
              <strong>
                Todos os direitos reservados 2020 © BlackFish | Agência de
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
                  Desenvolvido com técnologia
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
    </div>
  );
};

export default LikeaDiamond;
