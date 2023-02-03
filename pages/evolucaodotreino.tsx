import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NextPage } from "next";
import Image from "next/image";
import plataformaDark from "../public/caseevolucao/case-evolucao-treino-plataforma-dark.png";
import plataformaLight from "../public/caseevolucao/case-evolucao-treino-plataforma.png";
import mobileDark from "../public/caseevolucao/case-evolucao-treino-posts-dark.png";
import mobileLight from "../public/caseevolucao/case-evolucao-treino-posts.png";
import importadosDark from "../public/caseevolucao/case-importados-dark.png";
import importadosLight from "../public/caseevolucao/case-importados.png";
import caseSantanderDark from "../public/caseevolucao/case-santander-dark.png";
import caseSantanderLight from "../public/caseevolucao/case-santander.png";
import metricasDark from "../public/caseevolucao/cases-metrica-dark.png";
import metricasLight from "../public/caseevolucao/cases-metrica.png";
import ResponsiveAppBarSec from "./navbarsecondary";
const EvolucaoTreino: NextPage = () => {
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
              ? "url(/caseevolucao/treino-em-evolucao-topo-dark.jpg)"
              : "url(/caseevolucao/treino-em-evolucao-topo.jpg)",
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
            <strong>MARKETING QUE VENDE</strong>
          </Typography>
          <Typography
            className="colorwhite"
            variant="h6"
            sx={{ textAlign: "center" }}
          >
            Mais de 600 alunos e 450 mil em receita.
          </Typography>
        </Box>
      </Box>

      <Box className="paddingM homeBgCinza">
        <Box className="containerpuro displayflexwrap">
          <Box sx={{ margin: { xs: "auto", lg: "0" } }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, textAlign: { xs: "center", lg: "left" } }}
            >
              DESDE A CRIAÇÃO
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", lg: "left" } }}
            >
              DA IDENTIDADE VISUAL
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
          {theme.palette.mode === "dark" ? (
            <Box sx={{ margin: { xs: "auto", lg: "0" } }}>
              <Image
                src="/caseevolucao/logo-evolucao-do-treino-dark.png"
                alt="Logo evolução do treino"
                width={320}
                height={112}
              />
            </Box>
          ) : (
            <Box sx={{ margin: { xs: "auto", lg: "0" } }}>
              <Image
                src="/caseevolucao/logo-evolucao-do-treino.png"
                alt="Logo evolução do treino"
                width={320}
                height={112}
              />
            </Box>
          )}
        </Box>
      </Box>

      <Box className="containerpuro displayflexwrap paddingTopM paddingBottomM">
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Typography
            variant="h2"
            className="corverde"
            sx={{ fontWeight: 700, mb: 4 }}
          >
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
          }}
        >
          {theme.palette.mode === "dark" ? (
            <Image
              src={mobileDark}
              className="mobileEvolucao"
              alt="Posts evolução do treino"
            />
          ) : (
            <Image
              src={mobileLight}
              className="mobileEvolucao"
              alt="Posts evolução do treino"
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          background: theme.palette.mode === "dark" ? "#121212" : "#f1f1f1",
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
        {theme.palette.mode === "dark" ? (
          <Image
            src={plataformaDark}
            className="plataformaEvolucao"
            alt="Plataforma evolução do treino"
          />
        ) : (
          <Image
            src={plataformaLight}
            className="plataformaEvolucao"
            alt="Plataforma evolução do treino"
          />
        )}
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#1e1e1e" : "#5ab54a",
        }}
      >
        <Box
          className="containerpuro paddingG"
          sx={{
            textAlign: "center",
          }}
        >
          <Box className="positionRelative">
            {theme.palette.mode === "dark" ? (
              <Image
                src={metricasDark}
                className="metricasEvolucao"
                alt="Metricas evolução do treino"
              />
            ) : (
              <Image
                src={metricasLight}
                className="metricasEvolucao"
                alt="Metricas evolução do treino"
              />
            )}
            <Box className="metricaTopEsq">
              <Typography
                variant="h2"
                className="colorwhite"
                sx={{ fontWeight: 700 }}
              >
                6.4K
              </Typography>
              <Typography variant="body1" className="colorwhite">
                INVESTIMENTO
              </Typography>
            </Box>
            <Box className="metricaTopDir">
              <Typography
                variant="h2"
                className="colorwhite"
                sx={{ fontWeight: 700 }}
              >
                15%
              </Typography>
              <Typography variant="body1" className="colorwhite">
                CONVERSAO MÉDIA
              </Typography>
            </Box>
            <Box className="metricaBottomEsq">
              <Typography
                variant="h2"
                className="colorwhite"
                sx={{ fontWeight: 700 }}
              >
                +450
              </Typography>
              <Typography variant="body1" className="colorwhite">
                CADASTROS (LEADS)
              </Typography>
            </Box>
            <Box className="metricaBottomDir">
              <Typography
                variant="h2"
                className="colorwhite"
                sx={{ fontWeight: 700 }}
              >
                28%
              </Typography>
              <Typography variant="body1" className="colorwhite">
                CRESCIMENTO
              </Typography>
            </Box>
          </Box>
          <Button
            fullWidth
            variant="contained"
            size="large"
            className="btnbrancoverde"
            sx={{ mt: 3, fontWeight: 700 }}
          >
            Orçamento
          </Button>
        </Box>
      </Box>

      <Box className="containerpuro paddingG">
        <Box className="displayflexwrap" sx={{ margin: "auto" }}>
          {theme.palette.mode === "dark" ? (
            <Box sx={{ margin: { xs: "auto", lg: "0" } }}>
              <Image
                src="/caseevolucao/depoimento-italo-dark.png"
                alt="Posts evolução do treino"
                width={250}
                height={250}
              />
            </Box>
          ) : (
            <Box sx={{ margin: { xs: "auto", lg: "0" } }}>
              <Image
                src="/caseevolucao/depoimento-italo.png"
                alt="Posts evolução do treino"
                width={250}
                height={250}
              />
            </Box>
          )}
          <Box sx={{ width: { xs: "100%", lg: "calc(100% - 300px)" } }}>
            <Typography
              variant="h3"
              className="corverde"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              QUEM CONFIA, RECOMENDA!
            </Typography>
            <Typography variant="body1">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web dettsigns. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Ciceros De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </Typography>
          </Box>
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
                  background:
                    theme.palette.mode === "dark" ? "#ffffff" : "#c37fb6",
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
                {theme.palette.mode === "dark" ? (
                  <Image
                    src={caseSantanderDark}
                    className="casesInt"
                    alt="Case Santander"
                  />
                ) : (
                  <Image
                    src={caseSantanderLight}
                    className="casesInt"
                    alt="Case Santander"
                  />
                )}
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
                  background:
                    theme.palette.mode === "dark" ? "#ffffff" : "#7ac7e1",
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
                {theme.palette.mode === "dark" ? (
                  <Image
                    src={importadosDark}
                    className="mobileEvolucao"
                    alt="Case importados"
                  />
                ) : (
                  <Image
                    src={importadosLight}
                    className="mobileEvolucao"
                    alt="Case importados"
                  />
                )}
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                SANTANDER
              </Typography>
              <Typography variant="body1">
                Como em 6 meses conseguimos chegar no resultado obtido apenas
                com um produto que foi sensação no mercado.
              </Typography>
            </Box>
          </Box>
        </Box>
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

export default EvolucaoTreino;
