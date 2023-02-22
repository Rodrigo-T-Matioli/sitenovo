import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "glider-js/glider.min.css";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Glider from "react-glider";
import profilePic from "../public/funil-de-vendas.jpg";
import mapaBlabkDark from "../public/mapa-blackfishdigital-dark.png";
import mapaBlabk from "../public/mapa-blackfishdigital.jpg";
import SantanderCase from "../public/santander-home-blackfishdigital.png";
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
          <Link href="#orcamento" rel="noopener noreferrer">
            <Button
              variant="contained"
              size="large"
              className="btnbranco"
              sx={{ mt: 3 }}
            >
              Orçamento
            </Button>
          </Link>
          <Box>
            <Link href="#solucoes" rel="noopener noreferrer">
              <IconButton color="primary" sx={{ mt: 4 }}>
                <KeyboardArrowDownIcon
                  sx={{ fontSize: 60 }}
                  className="colorwhite"
                />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box className="bgroxo" sx={{ height: "30px" }}></Box>

      <Box className="containerpuro paddingTopG" id="solucoes">
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
              backgroundImage: "url(/bg-cases-home.jpg)",
              backgroundSize: "cover",
            }}
            className="homeEvolucao"
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
                <strong>+ 500% EM VENDAS</strong>
              </Typography>
              <Typography variant="body1">
                Veja como a consultória bateu seu record de vendas e faturou
                mais de 500% em vendas, só com marketing digital:
              </Typography>
              <Link href="/evolucaodotreino" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  size="large"
                  className="btnpadrao"
                  sx={{ mt: 3 }}
                >
                  Ver case
                </Button>
              </Link>
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
            sx={{
              display: { xs: "block", md: "none" },
              textAlign: "center",
              position: "relative",
              backgroundImage: "url(/bg-cases-home.jpg)",
              backgroundSize: "cover",
            }}
            className="homeEvolucao"
          >
            <Image
              src={SantanderCase}
              alt="Santander e Black Fish Digital"
              className="homeImgCase"
            />
          </Grid>
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
              <Link href="/santander" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  size="large"
                  className="btnpadrao"
                  sx={{ mt: 3 }}
                >
                  Ver case
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
              textAlign: "center",
              position: "relative",
              backgroundImage: "url(/bg-cases-home.jpg)",
              backgroundSize: "cover",
            }}
            className="homeEvolucao"
          >
            <Image
              src={SantanderCase}
              alt="Santander e Black Fish Digital"
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
          <Link
            href="https://wa.me/5511969203819?text=Olá,%20quero%20estruturar%20o%20processo%20de%20vendas%20da%20minha%20empresa!"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              variant="contained"
              size="large"
              className="btnpadrao"
              sx={{ mt: 3 }}
            >
              Fale conosco
            </Button>
          </Link>
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
                  src="/italodomenico-depoimento.png"
                  alt="Depoimento Italo Domenico"
                  width={134}
                  height={134}
                  className="radius bordaDepoimento"
                />
                <Typography variant="body1">
                  Estamos com a Black fish digital desde o começo, fizeram o
                  desenvolvimento da marca e toda linha critiva para nossa
                  comunicação, desde como fariamos os coteúdos até os anuncios,
                  tenho muito cuidado com o conteúdo que faço, o Rodrigo pensou
                  junto comigo a melhor forma de disponibilizar e vender, qual
                  seria o melhor fluxo de venda, esta parceria só faz crescer
                  nosso faturamento. Muito obrigado a Back Fish Digital.
                </Typography>
                <Typography variant="body1" color="primary" sx={{ mt: 3 }}>
                  <strong>Italo Domenico</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  EOLUÇÃO DO TREINO
                </Typography>
              </div>
              <div>
                <Image
                  src="/ricardo-pacheco-depoimento.png"
                  alt="Depoimento Ricardo Pacheco"
                  width={134}
                  height={134}
                  className="radius bordaDepoimento"
                />
                <Typography variant="body1">
                  Comecei com a Black Fish Digital fazendo só o planejamento de
                  conteúdo, arte e texto para cada post do instagram, hoje faço
                  a parte de instagram ads e esta dando muito certo, nos
                  primeiros 3 meses já vi uma diferença grande nas vendas,
                  criamos até um produto novo juntos. Estou muito feliz.
                </Typography>
                <Typography variant="body1" color="primary" sx={{ mt: 3 }}>
                  <strong>Ricardo Pacheco</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  PACHECO PERSONAL FIGHT
                </Typography>
              </div>
              <div>
                <Image
                  src="/rafa-depoimento.png"
                  alt="Depoimento Rafa"
                  width={134}
                  height={134}
                  className="radius bordaDepoimento"
                />
                <Typography variant="body1">
                  Comecei a trabalhar com a Black fish digital para fazer a
                  reformulação da minha marca, quando vi a marca gostei tanto
                  que pedi para criarem todas as embalagens dos produtos,
                  catalogo de venda impresso e digital, nossa parceiria hoje é
                  também no intagram, planejando, criando textos e artes que nos
                  ajudam muito a vender, é muito bom no incio de cada mês ter
                  todos os Posts e Stories já prontos.
                </Typography>
                <Typography variant="body1" color="primary" sx={{ mt: 3 }}>
                  <strong>RAFAELA DIAMOND</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  LIKE A DIAMOND
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
