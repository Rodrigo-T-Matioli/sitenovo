import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Glider from "react-glider";
import FormularioOrcamento from "./formulario";
import ResponsiveAppBar from "./navbar";

const Planos: NextPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
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
          <strong>PLANOS</strong>
        </Typography>
        <Typography color="primary" variant="h6">
          para todos os tamanho de negócios
        </Typography>
      </Box>

      <Box className="containerpuro" sx={{ mt: "-60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGoogle">
              <Typography className="colorwhite" variant="h5">
                <strong>GOOGLE ADS</strong>
              </Typography>
              <img
                src="icon-google-ads.png"
                alt="Icone Google Ads"
                width={104}
                height={104}
              />
              <Typography className="colorwhite" variant="body1">
                Ideal para Profissionais Liberais e Pequenas Empresas com
                orçamento limitado
              </Typography>
              <Button
                fullWidth
                variant="contained"
                size="large"
                className="btnGoogle"
                sx={{ mt: 3 }}
              >
                SELECIONAR PLANO
              </Button>
            </Box>
            <Box
              className="boxPlanos"
              sx={{
                display: "grid",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Gestão da conta de anúncios Google Ads
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Campanhas Google Shopping
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Campanhas de remarketing
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Campanhas em redes de display
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Copywriting para anúncios
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Criação das artes para anúncios de display
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Reuniões de alinhamento estratégico
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Atendimento e Sucesso do cliente
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogle" />
                <Typography color="secondary" variant="body2">
                  Envio de relatórios estratégicos mensais
                </Typography>
              </Box>
            </Box>
            <Box className="planoGoogleRodape"></Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoSocial">
              <Typography className="colorwhite" variant="h5">
                <strong>SOCIAL ADS</strong>
              </Typography>
              <img
                src="icon-social-ads.png"
                alt="Icone Social Ads"
                width={104}
                height={104}
              />
              <Typography className="colorwhite" variant="body1">
                Ideal para Empresas que entenderam que a Internet é um grande
                canal de divulgação e querem gerar resultados
              </Typography>
              <Button
                fullWidth
                variant="contained"
                size="large"
                className="btnSocial"
                sx={{ mt: 3 }}
              >
                SELECIONAR PLANO
              </Button>
            </Box>
            <Box
              className="boxPlanos"
              sx={{
                display: "grid",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Gestão de anúncios Facebook / Instagram
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Criação das artes para veiculação dos anúncios
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Criação de copywriting para anúncios
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Campanhas de remarketing
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Atração de novos seguidores
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Envio de relatórios estratégicos mensais
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Reuniões mensais de alinhamento estratégico
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Atendimento e Sucesso do cliente
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Gestão de investimentos e, mídia
                </Typography>
              </Box>
            </Box>
            <Box className="planoSocialRodape"></Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGoogleSocial">
              <Typography className="colorwhite" variant="h5">
                <strong>GOOGLE E SOCIAL ADS</strong>
              </Typography>
              <img
                src="icon-social-google-ads.png"
                alt="Icone Social e Google Ads"
                width={202}
                height={104}
              />
              <Typography className="colorwhite" variant="body1">
                Ideal para Empresas que entenderam que a Internet é um grande
                canal de divulgação e querem gerar resultados
              </Typography>
              <Button
                fullWidth
                variant="contained"
                size="large"
                className="btnGoogleSocial"
                sx={{ mt: 3 }}
              >
                SELECIONAR PLANO
              </Button>
            </Box>
            <Box
              className="boxPlanos"
              sx={{
                display: "grid",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Gestão de anúncios Facebook / Instagram
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Gestão da conta de anúncios Google Ads
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Campanhas Google Shopping
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Campanhas de remarketing
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Campanhas do google display
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Criação das artes para veiculação dos anúncios
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Criação de copywriting para anúncios
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Atração de novos seguidores
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Envio de relatórios estratégicos mensais
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Reuniões mensais de alinhamento estratégico
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Atendimento e Sucesso do cliente
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorGoogleSocial" />
                <Typography color="secondary" variant="body2">
                  Gestão de investimentos e, mídia
                </Typography>
              </Box>
            </Box>
            <Box className="planoGoogleSocialRodape"></Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/linha-topo-blackfish-dark-2.jpg)"
              : "url(/linha-cinza-topo-blackfish.jpg)",
          height: "34px",
        }}
        className="bgLinhaPosicao"
      ></Box>
      <Box className="homeBgCinza paddingBottomG" sx={{ textAlign: "center" }}>
        <Typography variant="h4" color="primary" className="paddingG">
          <strong>OUTROS SERVIÇOS</strong>
        </Typography>
        <Box className="containerpuro">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-google-ads-planos-dark.png"
                  alt="Google Ads"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-google-ads-planos.png"
                  alt="Google Ads"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>GOOGLE ADS</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Seja encontrado por quem realmente está buscando pelo seus
                  produtos ou serviços.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-facebook-instagram-ads-dark.png"
                  alt="Instagram Ads"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-facebook-instagram-ads.png"
                  alt="Instagram Ads"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>FACEBOOK / INSTAGRAM ADS</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Promova seus posts. Conquiste mais fãs. Alcance milhares de
                  potenciais clientes!
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-linkedin-ads-dark.png"
                  alt="Linkedin Ads"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-linkedin-ads.png"
                  alt="Linkedin Ads"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>LINKEDIN ADS</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Tráfego super qualificado para falar com quem realmente
                  decide.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-websites-personalizados-dark.png"
                  alt="Websites personalizados"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-websites-personalizados.png"
                  alt="Websites personalizados"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>WEBSITES PERSONALIZADOS</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Sua empresa merece um site profissional. E que converta
                  visitantes em vendas.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-landing-page-dark.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-landing-page.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>LANDING PAGE</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Crie páginas específicas para um determinado produto ou
                  serviço, com foco em conversão.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-criacao-blog-dark.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-criacao-blog.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>CRIAÇÃO DE BLOG</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Criamos blogs pessoais ou profissionais para empreendedores
                  que desejam gerar conteúdo para a internet.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-gestao-instagram-dark.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-gestao-instagram.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>GESTÃO DE INSTAGRAM</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Utilize as postagens no Instagram para trazer resultados
                  incríveis para sua empresa.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-gestao-facebook-dark.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-gestao-facebook.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>GESTÃO DE FACEBOOK</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Que tal usar o Facebook para trazer resultados impressionantes
                  para sua empresa?
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="displayflex"
              sx={{ textAlign: "left" }}
            >
              {theme.palette.mode === "dark" ? (
                <Image
                  src="/icon-info-produtores-dark.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              ) : (
                <Image
                  src="/icon-info-produtores.png"
                  alt="Landing page"
                  width={74}
                  height={74}
                />
              )}
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6" color="primary">
                  <strong>INFO PRODUTORES</strong>
                </Typography>
                <Typography variant="body2" color="primary">
                  Te ajudamos com o tráfego de clientes para o lançamento dos
                  seus produtos digitais.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/linha-topo-blackfish-dark-2-bot.jpg)"
              : "url(/linha-cinza-topo-blackfish-bot.jpg)",
          height: "34px",
        }}
        className="bgLinhaPosicao"
      ></Box>

      <Box className="containerpuro">
        <Typography
          variant="h4"
          color="primary"
          sx={{ textAlign: "center" }}
          className="paddingM"
        >
          <strong>DÚVIDAS FREQUENTES</strong>
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#121212" : "#f1f1f1",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography color="primary">
              <strong>Qual é o tempo mínimo de contrato?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#121212" : "#f1f1f1",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography color="primary">
              <strong>Quanto devo investir inicialmente em anúncios?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#121212" : "#f1f1f1",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography color="primary">
              <strong>Quando vou começar a ver resultado?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#121212" : "#f1f1f1",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography color="primary">
              <strong>Como funciona o acompanhamento da agência?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
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

      <Box className="marginTopG">
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
                <Image
                  src="/logo-reactjs.jpg"
                  alt="Logo ReactJS copyright"
                  width={56}
                  height={56}
                />
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

export default Planos;
