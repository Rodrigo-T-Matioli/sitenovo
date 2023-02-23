import emailjs from "@emailjs/browser";
import { Box, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "glider-js/glider.min.css";
import Link from "next/link";
import * as React from "react";

function FormularioOrcamento() {
  const [googleAds, setGoogleAds] = React.useState(false);
  const handleGoogleAds = () => {
    setGoogleAds(!googleAds);
  };
  const [inboundMarketing, setInboundMarketing] = React.useState(false);
  const handleInboundMarketing = () => {
    setInboundMarketing(!inboundMarketing);
  };
  const [sitesLandingPage, setSitesLandingPage] = React.useState(false);
  const handleSitesLandingPage = () => {
    setSitesLandingPage(!sitesLandingPage);
  };
  const [faceInstaAds, setFaceInstaAds] = React.useState(false);
  const handleFaceInstaAds = () => {
    setFaceInstaAds(!faceInstaAds);
  };
  const [seo, setSeo] = React.useState(false);
  const handleSeo = () => {
    setSeo(!seo);
  };
  const [outros, setOutros] = React.useState(false);
  const handleOutros = () => {
    setOutros(!outros);
  };

  const enviar = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      nome: { value: string };
      email: { value: string };
      telefone: { value: string };
      empresa: { value: string };
      siteempresa: { value: string };
      mensagem: { value: string };
      googleads: { value: boolean };
      inboundmarketing: { value: boolean };
      sitesLandingPage: { value: boolean };
      faceInstaAds: { value: boolean };
      seo: { value: boolean };
      outros: { value: boolean };
    };
    const nome = target.nome.value;
    const email = target.email.value;
    const telefone = target.telefone.value;
    const empresa = target.empresa.value;
    const siteempresa = target.siteempresa.value;
    const mensagem = target.mensagem.value;
    const googleads = target.googleads.value;
    const inboundmarketing = target.inboundmarketing.value;
    const sitesLandingPage = target.sitesLandingPage.value;
    const faceInstaAds = target.faceInstaAds.value;
    const seo = target.seo.value;
    const outros = target.outros.value;

    if (
      nome === "" ||
      email === "" ||
      telefone === "" ||
      empresa === "" ||
      mensagem === ""
    ) {
      alert("Nome em branco");
      return;
    }

    const templateParams = {
      from_name: nome,
      email: email,
      telefone: telefone,
      empresa: empresa,
      message: mensagem,
      siteempresa: siteempresa,
      googleads: googleads,
      inboundmarketing: inboundmarketing,
      siteslandingpage: sitesLandingPage,
      faceinstaads: faceInstaAds,
      seo: seo,
      outros: outros,
    };

    emailjs
      .send(
        "service_8xrtmkw",
        "template_2r8q9is",
        templateParams,
        "uDr-OrYXvXaCuLjPT"
      )
      .then(
        (response) => {
          console.log("Enviado", response.status, response.text);
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  };
  return (
    <form onSubmit={enviar}>
      <Box className="areaOrcamento" sx={{ mt: 3 }}>
        <Box className="areaOrcamento-col">
          <Box>
            <Grid container spacing={3} className="paddingTopM">
              <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Nome *"
                  variant="outlined"
                  className="campoBlack"
                  name="nome"
                />
                <TextField
                  fullWidth
                  placeholder="Email *"
                  variant="outlined"
                  className="campoBlack"
                  sx={{ mt: 1 }}
                  name="email"
                />
                <TextField
                  fullWidth
                  placeholder="Telefone *"
                  variant="outlined"
                  className="campoBlack"
                  sx={{ mt: 1 }}
                  name="telefone"
                />
                <TextField
                  fullWidth
                  placeholder="Empresa *"
                  variant="outlined"
                  className="campoBlack"
                  sx={{ mt: 1 }}
                  name="empresa"
                />
                <TextField
                  fullWidth
                  placeholder="Site da empresa"
                  variant="outlined"
                  className="campoBlack"
                  sx={{ mt: 1 }}
                  name="siteempresa"
                />
                <Box
                  sx={{
                    textAlign: "left",
                    border: "1px solid #ffffff",
                    p: 2,
                    mt: 1,
                  }}
                >
                  <Typography variant="h6" className="colorwhite">
                    <strong>SERVIÇOS</strong>
                  </Typography>
                  <Box>
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ textAlign: "center", p: 2 }}
                      >
                        <Box className="displayflex">
                          <Checkbox
                            sx={{
                              color: "#ffffff",
                              "&.Mui-checked": {
                                color: "#ffffff",
                              },
                            }}
                            name="googleads"
                            onChange={handleGoogleAds}
                            value={googleAds}
                          />
                          <Typography variant="body2" className="colorwhite">
                            Google Ads
                          </Typography>
                        </Box>
                        <Box className="displayflex">
                          <Checkbox
                            sx={{
                              color: "#ffffff",
                              "&.Mui-checked": {
                                color: "#ffffff",
                              },
                            }}
                            name="inboundmarketing"
                            onChange={handleInboundMarketing}
                            value={inboundMarketing}
                          />
                          <Typography variant="body2" className="colorwhite">
                            Ecommerce / Plataforma Web
                          </Typography>
                        </Box>
                        <Box className="displayflex">
                          <Checkbox
                            sx={{
                              color: "#ffffff",
                              "&.Mui-checked": {
                                color: "#ffffff",
                              },
                            }}
                            name="sitesLandingPage"
                            onChange={handleSitesLandingPage}
                            value={sitesLandingPage}
                          />
                          <Typography variant="body2" className="colorwhite">
                            Criação de sites / landing pages
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ textAlign: "center", p: 2 }}
                      >
                        <Box className="displayflex">
                          <Checkbox
                            sx={{
                              color: "#ffffff",
                              "&.Mui-checked": {
                                color: "#ffffff",
                              },
                            }}
                            name="faceInstaAds"
                            onChange={handleFaceInstaAds}
                            value={faceInstaAds}
                          />
                          <Typography variant="body2" className="colorwhite">
                            Facebook e Instagram Ads
                          </Typography>
                        </Box>
                        <Box className="displayflex">
                          <Checkbox
                            sx={{
                              color: "#ffffff",
                              "&.Mui-checked": {
                                color: "#ffffff",
                              },
                            }}
                            name="seo"
                            onChange={handleSeo}
                            value={seo}
                          />
                          <Typography variant="body2" className="colorwhite">
                            SEO
                          </Typography>
                        </Box>
                        <Box className="displayflex">
                          <Checkbox
                            sx={{
                              color: "#ffffff",
                              "&.Mui-checked": {
                                color: "#ffffff",
                              },
                            }}
                            name="outros"
                            onChange={handleOutros}
                            value={outros}
                          />
                          <Typography variant="body2" className="colorwhite">
                            Outros
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  multiline
                  rows={4}
                  placeholder="Mensagem *"
                  sx={{ mt: 1 }}
                  className="campoBlack"
                  name="mensagem"
                />
                <button type="submit" className="btnenviar">
                  ENVIAR
                </button>
                <Typography
                  variant="body2"
                  className="colorwhite"
                  sx={{ mt: 1 }}
                >
                  Prometemos não utilizar suas informações de contato para
                  enviar qualquer tipo de spam.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 2 }}>
                <Box className="areaTel">
                  <Box sx={{ margin: "auto", p: 2 }}>
                    <Link
                      href="https://wa.me/5511969203819?text=Olá."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Typography
                        variant="h3"
                        className="colorwhite txtRodape"
                        sx={{ mt: 1 }}
                      >
                        (11) 9 6920-3819
                      </Typography>
                    </Link>
                    {/* <Typography
                      variant="h6"
                      className="colorwhite txtRodape"
                      sx={{ mt: 4 }}
                    >
                      Rua José de Oliveira, 270, Sorocaba
                    </Typography> */}
                    <Typography variant="h6" className="colorwhite txtRodape">
                      <strong>rodrigo@blackfishdigital.com.br</strong>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </form>
  );
}
export default FormularioOrcamento;
