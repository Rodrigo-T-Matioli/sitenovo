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
import profilePic from "../public/funil-de-vendas.jpg";
import mapaBlabkDark from "../public/mapa-blackfishdigital-dark.png";
import mapaBlabk from "../public/mapa-blackfishdigital.jpg";
import FormularioOrcamento from "./formulario";
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
          <Grid item xs={12} md={12} lg={6}>
            <Typography color="primary" variant="h3">
              <strong>A MELHOR SOLUÇÃO EM MKT DIGITAL PARA PME{"'"}S</strong>
            </Typography>
            <Box
              sx={{ display: { xs: "block", lg: "none", textAlign: "center" } }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src={mapaBlabkDark}
                  alt="Funil de vendas Black Fish Digital"
                  className="funilHome"
                />
              ) : (
                <Image
                  src={mapaBlabk}
                  alt="Funil de vendas Black Fish Digital"
                  className="funilHome"
                />
              )}
            </Box>
            <Grid container spacing={3} className="paddingTopM">
              <Grid
                item
                xs={12}
                md={12}
                lg={6}
                sx={{ textAlign: "center", p: 2 }}
              >
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
                <Typography variant="body1" color="primary">
                  <strong>GOOGLE ADS</strong>
                </Typography>
                <Typography variant="body2">
                  Os clientes que você procura, te encontram no Google! Aumente
                  suas vendas, receba mais orçamentos e ligações de clientes.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={6}
                sx={{ textAlign: "center", p: 2 }}
              >
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/icon-insta-facebook-ads-blackfishdigital-dark.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/icon-insta-facebook-ads-blackfishdigital.jpg"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                )}
                <Typography variant="body1" color="primary">
                  <strong>FACEBOOK / INSTAGRAM ADS</strong>
                </Typography>
                <Typography variant="body2">
                  Alcance milhares de clientes potenciais, capte leads
                  qualificados e aumente as vendas da sua empresa de forma
                  contínua!
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={6}
                sx={{ textAlign: "center", p: 2 }}
              >
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/icon-plataforma-web-blackfishdigital-dark.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/icon-plataforma-web-blackfishdigital.jpg"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                )}
                <Typography variant="body1" color="primary">
                  <strong>PLATAFORMAS WEB</strong>
                </Typography>
                <Typography variant="body2">
                  Desenvolvemos Websites Institucionais, Catálogos Virtuais,
                  Landing Pages, Lojas Online e muito mais.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={6}
                sx={{ textAlign: "center", p: 2 }}
              >
                {theme.palette.mode === "dark" ? (
                  <Image
                    src="/icon-seo-blackfishdigital-dark.png"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/icon-seo-blackfishdigital.jpg"
                    alt="Icone Google Ads Black Fish Digital"
                    width={100}
                    height={100}
                  />
                )}
                <Typography variant="body1" color="primary">
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
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
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
            </Box>
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
              textAlign: "center",
              position: "relative",
            }}
            className="bgroxo homeEvolucao"
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
            <Box className="case-home-txt">
              <Typography variant="h6">
                CONHEÇA O CASE <strong>EVOLUÇÃO DO TREINO</strong>
              </Typography>
              <Typography variant="h4" sx={{ color: "#491247" }}>
                <strong>+ DE R$ 1MIL EM CONSULTORIA</strong>
              </Typography>
              <Typography variant="body1">
                Veja como a consultória bateu seu record de vendas e faturou
                mais de R$ 500 mil em vendas, só com marketing digital:
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
        </Grid>
      </Box>

      <Box className="home-case2">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            className="homeBgCinza paddingG displayflexright"
          >
            <Box className="case-home-txt">
              <Typography variant="h6">
                CONHEÇA O CASE <strong>SANTANDER</strong>
              </Typography>
              <Typography variant="h4" sx={{ color: "#491247" }}>
                <strong>PLATAFORMA DE GAMEFICAÇÃO</strong>
              </Typography>
              <Typography variant="body1">
                Temos uma equipe de designers, programadores e conteúdo digital
                qualificadas para criar o produto digital que precisa.
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              position: "relative",
            }}
            className="bgroxo homeEvolucao"
          >
            <Image
              src="/santander-home-blackfishdigital.png"
              alt="Santander e Black Fish Digital"
              width={523}
              height={333}
              className="homeImgCase"
            />
          </Grid>
        </Grid>
      </Box>

      <Box className="containerpuro paddingTopG homeEstrutura">
        <Box sx={{ display: { xs: "block", lg: "none", textAlign: "center" } }}>
          <Image
            src={profilePic}
            alt="Funil de vendas Black Fish Digital"
            className="funilHome"
          />
        </Box>
        <Box className="esqCol">
          <Typography variant="h4" color="primary">
            <strong>ESTRUTURAMOS O PROCESSO DE VENDAS DA SUA EMPRESA</strong>
          </Typography>
          <Typography variant="body1" className="paddingTopM">
            Se vender é a essência do nosso trabalho, a forma como o seu
            comercial atua também é nossa preocupação. Te ajudamos com a
            implementação de um CRM e na criação de um funil de vendas
            personalizado, na automatização de processos comerciais e na criação
            de dashboards estratégicos. <br />
            <br />
            Sua empresa deve ser guiada por dados e não por “achismo” e nós te
            ajudaremos com isso!
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
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <Image
            src="/funil-de-vendas.jpg"
            alt="Funil de vendas Black Fish Digital"
            width={654}
            height={584}
          />
        </Box>
      </Box>

      <Box className="homeBgCinza paddingG" sx={{ mt: 4 }}>
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
                <Typography variant="body1" color="primary" sx={{ mt: 3 }}>
                  <strong>TABATA MAFFINI</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  TABATA MAFFINI ACADEMY
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
                <Typography variant="body1" color="primary" sx={{ mt: 3 }}>
                  <strong>TABATA MAFFINI</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  TABATA MAFFINI ACADEMY
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
                <Typography variant="body1" color="primary" sx={{ mt: 3 }}>
                  <strong>TABATA MAFFINI</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  TABATA MAFFINI ACADEMY
                </Typography>
              </div>
            </Glider>
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

export default Home;
