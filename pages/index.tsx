import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "glider-js/glider.min.css";
import type { NextPage } from "next";
import Image from "next/image";
import Glider from "react-glider";
import ResponsiveAppBar from "./navbar";

const Home: NextPage = () => {
  const theme = useTheme();
  const bgImageLight = 'url("banner-blackfishdigital.jpg")';
  const bgImageDark = 'url("banner-blackfishdigital-dark.jpg")';
  return (
    <div>
      <ResponsiveAppBar />
      <Box
        sx={{
          width: "100%",
          height: 500,
          backgroundImage:
            theme.palette.mode === "dark" ? bgImageDark : bgImageLight,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography color="secondary.light" variant="h2">
            <strong>MARKETING DIGITAL</strong>
          </Typography>
          <Typography color="secondary.light" variant="h2">
            COM FOCO EM VENDAS.
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="btnbranco"
            sx={{ mt: 3 }}
          >
            Orçamento
          </Button>
          <Box>
            <IconButton color="primary" sx={{ mt: 4 }}>
              <KeyboardArrowDownIcon
                sx={{ fontSize: 60 }}
                className="colorwhite"
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box className="bgroxo" sx={{ height: "30px" }}></Box>

      <Box className="containerpuro paddingTopG">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography color="primary" variant="h3">
              <strong>A MELHOR SOLUÇÃO EM MKT DIGITAL PARA PME{"'"}S</strong>
            </Typography>
            <Grid container spacing={3} className="paddingTopM">
              <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 2 }}>
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/icon-google-ads-blackfishdigital-dark.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/icon-google-ads-blackfishdigital.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                )}
                <Typography variant="body1">
                  <strong>GOOGLE ADS</strong>
                </Typography>
                <Typography variant="body2">
                  Os clientes que você procura, te encontram no Google! Aumente
                  suas vendas, receba mais orçamentos e ligações de clientes.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 2 }}>
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/icon-google-ads-blackfishdigital-dark.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/icon-google-ads-blackfishdigital.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                )}
                <Typography variant="body1">
                  <strong>FACEBOOK / INSTAGRAM ADS</strong>
                </Typography>
                <Typography variant="body2">
                  Alcance milhares de clientes potenciais, capte leads
                  qualificados e aumente as vendas da sua empresa de forma
                  contínua!
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 2 }}>
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/icon-google-ads-blackfishdigital-dark.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/icon-google-ads-blackfishdigital.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                )}
                <Typography variant="body1">
                  <strong>INBOUND MARKETING</strong>
                </Typography>
                <Typography variant="body2">
                  Acompanhe a jornada de consumo de todos os seus leads e
                  converta-os em clientes na hora certa, com um custo por
                  aquisição até 3x menor do que um anúncio direto.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 2 }}>
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/icon-google-ads-blackfishdigital-dark.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/icon-google-ads-blackfishdigital.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                )}
                <Typography variant="body1">
                  <strong>SEO</strong>
                </Typography>
                <Typography variant="body2">
                  Otimize o seu site e apareça na primeira página do Google 24
                  horas por dia, 7 dias por semana, sem pagar por anúncios.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            {theme.palette.mode === "dark" ? (
              <Image
                src="/mapa-blackfishdigital-dark.png"
                alt="Mapa Black Fish Digital"
                width={580}
                height={596}
              />
            ) : (
              <Image
                src="/mapa-blackfishdigital.jpg"
                alt="Mapa Black Fish Digital"
                width={580}
                height={596}
              />
            )}
          </Grid>
        </Grid>
      </Box>

      <Box className="paddingTopXG">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              background: "#9cc580",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Image
              src="/evolucao-do-treino-home-blackfishdigital.png"
              alt="Evolução do treino e Black Fish Digital"
              width={425}
              height={404}
              className="homeImgCase"
            />
          </Grid>
          <Grid item xs={12} md={6} className="homeBgCinza paddingG">
            <Typography variant="h6">
              CONHEÇA O CASE <strong>EVOLUÇÃO DO TREINO</strong>
            </Typography>
            <Typography variant="h4" sx={{ color: "#688e4d" }}>
              <strong>+ DE R$ 1MIL EM CONSULTORIA</strong>
            </Typography>
            <Typography variant="body1">
              Veja como rede de escolas bateu seu record de matrículas e faturou
              mais de R$ 7mi em vendas, só com marketing digital:
            </Typography>
            <Button
              variant="contained"
              size="large"
              className="btnCaseEvol"
              sx={{ mt: 3 }}
            >
              Ver case
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box className="containerpuro paddingTopG">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h4">
                <strong>
                  ESTRUTURAMOS O PROCESSO DE VENDAS DA SUA EMPRESA
                </strong>
              </Typography>
              <Typography variant="body1" className="paddingTopM">
                Se vender é a essência do nosso trabalho, a forma como o seu
                comercial atua também é nossa preocupação. Te ajudamos com a
                implementação de um CRM e na criação de um funil de vendas
                personalizado, na automatização de processos comerciais e na
                criação de dashboards estratégicos. <br />
                <br />
                Sua empresa deve ser guiada por dados e não por “achismo” e nós
                te ajudaremos com isso!
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="btnpadrao"
                sx={{ mt: 3 }}
              >
                Ver case
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/funil-de-vendas.jpg"
              alt="Funil de vendas Black Fish Digital"
              width={654}
              height={584}
            />
          </Grid>
        </Grid>
      </Box>

      <Box className="homeBgCinza paddingG">
        <Box className="containerpuro" sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="primary">
            <strong>QUEM CONFIA, RECOMENDA!</strong>
          </Typography>
          <Box className="marginTopM">
            <Glider
              className="glider-container"
              draggable
              hasArrows
              hasDots
              slidesToShow={1}
              slidesToScroll={1}
            >
              <div>
                <Image
                  src="/tabatamaffini-depoimento.jpg"
                  alt="Funil de vendas Black Fish Digital"
                  width={134}
                  height={134}
                  className="radius bordaDepoimento"
                />
                <Typography variant="body1">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage.
                </Typography>
              </div>
              <div>
                <Image
                  src="/tabatamaffini-depoimento.jpg"
                  alt="Funil de vendas Black Fish Digital"
                  width={134}
                  height={134}
                  className="radius bordaDepoimento"
                />
                <Typography variant="body1">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage.
                </Typography>
              </div>
              <div>
                <Image
                  src="/tabatamaffini-depoimento.jpg"
                  alt="Funil de vendas Black Fish Digital"
                  width={134}
                  height={134}
                  className="radius bordaDepoimento"
                />
                <Typography variant="body1">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage.
                </Typography>
              </div>
            </Glider>
          </Box>
        </Box>
      </Box>

      <Box className="marginTopG">
        <Typography variant="h4" color="primary">
          <strong>SOLICITE UM ORÇAMENTO</strong>
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
