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
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const LinkMenu = (link: string) => {
    router.push(`${link}`);
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
        <Typography color="primary" variant="h4" sx={{ mt: 3 }}>
          <strong>PLANOS DE PUBLICIDADE</strong>
        </Typography>
      </Box>

      <Box className="containerpuro" sx={{ mt: "-60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGeral">
              <Typography className="colorwhite" variant="h5">
                <strong>GOOGLE ADS</strong>
              </Typography>
              <img
                src="icon-google-ads.png"
                alt="Icone Google Ads"
                width={104}
                height={104}
              />
              <Typography className="colorwhite" variant="h3" sx={{ mb: 2 }}>
                R$ 650,00
              </Typography>
              <Typography className="colorwhite" variant="body1">
                Ideal para Profissionais Liberais e Pequenas Empresas com
                orçamento limitado
              </Typography>
              <Link
                href="https://wa.me/5511969203819?text=Olá,%20quero%20contratar%20ou%20saber%20mais%20sobre%20o%20plano%20GOOGLE%20ADS!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  className="btnGeral"
                  sx={{ mt: 3 }}
                >
                  SELECIONAR PLANO
                </Button>
              </Link>
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
                  Gestão da conta de anúncios Google Ads
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Campanhas Google Shopping
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
                  Campanhas em redes de display
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Copywriting para anúncios
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Criação das artes para anúncios de display
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Reuniões de alinhamento estratégico
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
                  Envio de relatórios estratégicos mensais
                </Typography>
              </Box>
            </Box>
            <Box className="planoGeralRodape"></Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGeral">
              <Typography className="colorwhite" variant="h5">
                <strong>SOCIAL ADS</strong>
              </Typography>
              <img
                src="icon-social-ads.png"
                alt="Icone Social Ads"
                width={104}
                height={104}
              />
              <Typography className="colorwhite" variant="h3" sx={{ mb: 2 }}>
                R$ 980,00
              </Typography>
              <Typography className="colorwhite" variant="body1">
                Ideal para Empresas que entenderam que a Internet é um grande
                canal de divulgação e querem gerar resultados
              </Typography>
              <Link
                href="https://wa.me/5511969203819?text=Olá,%20quero%20contratar%20ou%20saber%20mais%20sobre%20o%20plano%20SOCIAL%20ADS!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  className="btnGeral"
                  sx={{ mt: 3 }}
                >
                  SELECIONAR PLANO
                </Button>
              </Link>
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
            <Box className="planoGeralRodape"></Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGeral">
              <Typography className="colorwhite" variant="h5">
                <strong>GOOGLE E SOCIAL ADS</strong>
              </Typography>
              <img
                src="icon-social-google-ads.png"
                alt="Icone Social e Google Ads"
                width={202}
                height={104}
              />
              <Typography className="colorwhite" variant="h3" sx={{ mb: 2 }}>
                R$ 1.480,00
              </Typography>
              <Typography className="colorwhite" variant="body1">
                Ideal para Empresas que entenderam que a Internet é um grande
                canal de divulgação e querem gerar resultados
              </Typography>
              <Link
                href="https://wa.me/5511969203819?text=Olá,%20quero%20contratar%20ou%20saber%20mais%20sobre%20o%20plano%20GOOGLE%20E%20SOCIAL%20ADS!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  className="btnGeral"
                  sx={{ mt: 3 }}
                >
                  SELECIONAR PLANO
                </Button>
              </Link>
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
                  Gestão da conta de anúncios Google Ads
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Campanhas Google Shopping
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
                  Campanhas do google display
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
            <Box className="planoGeralRodape"></Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: 350,
          background: theme.palette.mode === "dark" ? "#1e1e1e" : "#f1f1f1",
          mt: "-150px",
        }}
      ></Box>

      <Box sx={{ textAlign: "center", paddingBottom: "90px", mt: "-150px" }}>
        <Typography color="primary" variant="h4">
          <strong>PLANOS DE CONTEÚDO PARA INSTAGRAM</strong>
        </Typography>
      </Box>

      <Box className="containerpuro" sx={{ mt: "-60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGeral">
              <Typography className="colorwhite" variant="h5">
                <strong>ARTE</strong>
              </Typography>
              <img
                src="icon-instagram-artes.png"
                alt="Icone instagram artes"
                width={104}
                height={104}
              />
              <Typography className="colorwhite" variant="h3" sx={{ mb: 2 }}>
                R$ 430,00
              </Typography>
              <Typography className="colorwhite" variant="body1">
                Ideal para Profissionais Liberais e Pequenas Empresas que façam
                o planejamento de conteúdo.
              </Typography>
              <Link
                href="https://wa.me/5511969203819?text=Olá,%20quero%20contratar%20ou%20saber%20mais%20sobre%20o%20plano%20INSTAGRAM%20ARTE!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  className="btnGeral"
                  sx={{ mt: 3 }}
                >
                  SELECIONAR PLANO
                </Button>
              </Link>
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
                  10 Posts / mês
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  10 Storie do mesmo post / mês
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Apenas arte
                </Typography>
              </Box>
            </Box>
            <Box className="planoGeralRodape"></Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGeral">
              <Typography className="colorwhite" variant="h5">
                <strong>ARTE E CONTEÚDO</strong>
              </Typography>
              <img
                src="icon-instagram-artes-copy.png"
                alt="Icone Social Ads"
                width={104}
                height={104}
              />
              <Typography className="colorwhite" variant="h3" sx={{ mb: 2 }}>
                R$ 580,00
              </Typography>
              <Typography className="colorwhite" variant="body1">
                Ideal para Empresas que precisam de um planejamento mensal de
                todo o conteúdo e arte.
              </Typography>
              <Link
                href="https://wa.me/5511969203819?text=Olá,%20quero%20contratar%20ou%20saber%20mais%20sobre%20o%20plano%20ARTE%20E%20CONTEÚDO!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  className="btnGeral"
                  sx={{ mt: 3 }}
                >
                  SELECIONAR PLANO
                </Button>
              </Link>
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
                  10 post / mês
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  10 Storie do mesmo post / mês
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Planejamento + arte + Conteúdo
                </Typography>
              </Box>
            </Box>
            <Box className="planoGeralRodape"></Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="planoGeral">
              <Typography className="colorwhite" variant="h5">
                <strong>ARTE E CONTEÚDO MAX</strong>
              </Typography>
              <img
                src="icon-instagram-artes-copy-max.png"
                alt="Icone Social e Google Ads"
                width={104}
                height={104}
              />
              <Typography className="colorwhite" variant="h3" sx={{ mb: 2 }}>
                R$ 810,00
              </Typography>
              <Typography className="colorwhite" variant="body1">
                Ideal para Empresas que precisam de um volume maior de postagens
              </Typography>
              <Link
                href="https://wa.me/5511969203819?text=Olá,%20quero%20contratar%20ou%20saber%20mais%20sobre%20o%20plano%20ARTE%20E%20CONTEÚDO%20MAX!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  className="btnGeral"
                  sx={{ mt: 3 }}
                >
                  SELECIONAR PLANO
                </Button>
              </Link>
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
                  16 post / mês
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  16 Storie do mesmo post / mês
                </Typography>
              </Box>
              <Box sx={{ margin: "auto", display: "flex", p: 0.5 }}>
                <CheckIcon className="colorSocial" />
                <Typography color="secondary" variant="body2">
                  Planejamento + arte + Conteúdo
                </Typography>
              </Box>
            </Box>
            <Box className="planoGeralRodape"></Box>
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
                <Typography variant="body2">
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
              Em geral, é recomendável que uma campanha de Google Ads seja
              mantida por pelo menos 3 a 6 meses para dar tempo suficiente para
              otimizar e ajustar a estratégia de acordo com os dados de
              desempenho. No entanto, algumas empresas podem ver resultados
              significativos em menos tempo, enquanto outras podem precisar de
              mais tempo.
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
              Depende de vários fatores, como o objetivo da campanha, o tamanho
              do público-alvo, a concorrência no mercado e o orçamento
              disponível. Algumas empresas podem começar com um orçamento mensal
              de US$ 100 a US$ 500, enquanto outras podem investir muito mais. É
              importante estabelecer um orçamento realista e ajustá-lo ao longo
              do tempo, com base nos resultados da campanha.
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
              A eficácia da sua campanha de publicidade depende de muitos
              fatores, incluindo o seu mercado-alvo, a concorrência, a qualidade
              de sua campanha e a otimização contínua. Em geral, é recomendável
              esperar pelo menos 4 a 6 semanas para começar a ver resultados
              concretos e continuar a ajustar sua estratégia com base nos dados
              de desempenho. No entanto, algumas empresas podem ver resultados
              mais rapidamente, enquanto outras podem levar mais tempo.
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
              {"1) "}Configuramos e monitoramos as métricas de desempenho, como
              cliques, impressões, taxas de conversão e retorno sobre o
              investimento {"(ROI)"}.
              <br />
              <br />
              {"2) "}Analisamos essas métricas para avaliar o sucesso da
              campanha e identificar oportunidades de otimização.
              <br />
              <br />
              {"3) "}Fazemos ajustes estratégicos baseados nas análises de
              desempenho, incluindo ajustes no orçamento, na segmentação de
              público-alvo e nas criações de anúncios.
              <br />
              <br />
              {"4) "}Compartilhamos os relatórios mensalmente com os clientes,
              fornecendo uma visão geral do desempenho da campanha e discutindo
              as estratégias futuras.
              <br />
              <br />
              {"4) "}Fazemos testes A/B para avaliar diferentes versões de
              anúncios e caminhos de conversão para determinar a abordagem mais
              eficaz.
              <br />
              <br />É importante ter uma abordagem precisa e continuar a
              otimizar e ajustar as estratégias de acordo com os resultados.
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
