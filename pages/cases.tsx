import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Glider from "react-glider";
import evolucaoTreino from "../public/evolucao-do-treino-cases.png";
import importados from "../public/likeadiamond-cases.png";
import santander from "../public/santander-cases-blackfishdigital.png";
import FormularioOrcamento from "./formulario";
import ResponsiveAppBar from "./navbar";
const Cases: NextPage = () => {
  const theme = useTheme();
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
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: { xs: "block", md: "none" },
                textAlign: "center",
              }}
            >
              <Image
                src={evolucaoTreino}
                alt="Case Evolução do Treino Black Fish Digital"
                className="casesEvolucao"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className="colorwhite">
                CONHEÇA O CASE <strong>EVOLUÇÃO DO TREINO</strong>
              </Typography>
              <Typography variant="h4" className="colorwhite">
                <strong>+ 500% EM VENDAS</strong>
              </Typography>
              <Typography variant="body1" className="colorwhite">
                Veja como a consultória bateu seu record de vendas e faturou
                mais de 500% em vendas, só com marketing digital:
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="btnbrancoverde"
                sx={{ mt: 3 }}
                onClick={() => LinkMenu("/evolucaodotreino")}
              >
                <strong>Ver case</strong>
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: { xs: "none", md: "block" },
              }}
            >
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
              ? "url(/linha-dark2-topo-blackfish.png)"
              : "url(/linha-vermelha-topo-blackfish.png)",
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
          background: theme.palette.mode === "dark" ? "#6a6a6a" : "#f48385",
          zIndex: "100",
          position: "relative",
        }}
      >
        <Box className="containerpuro">
          <Grid container spacing={2} sx={{ py: 9 }}>
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Image
                src={santander}
                alt="Case Satander Black Fish Digital"
                className="santaderCases"
              />
            </Grid>
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
                <Typography variant="h6" className="colorwhite">
                  CONHEÇA O CASE <strong>SANTANDER</strong>
                </Typography>
                <Typography variant="h4" className="colorwhite">
                  <strong>PLATAFORMA DE GAMEFICAÇÃO</strong>
                </Typography>
                <Typography variant="body1" className="colorwhite">
                  Temos uma equipe de designers, programadores e conteúdo
                  digital qualificadas para criar o produto digital que precisa.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  className="btnbrancovermelho"
                  sx={{ mt: 3 }}
                  onClick={() => LinkMenu("/santander")}
                >
                  <strong>Ver case</strong>
                </Button>
              </Box>
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
          background: theme.palette.mode === "dark" ? "#4e4e4e" : "#1a1a1a",
          zIndex: "100",
          position: "relative",
        }}
      >
        <Box className="containerpuro">
          <Grid container spacing={2} sx={{ py: 9 }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: { xs: "block", md: "none" },
                textAlign: "center",
              }}
            >
              <Image
                src={importados}
                alt="Case Importados Black Fish Digital"
                className="casesEvolucao"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className="colorwhite">
                CONHEÇA O CASE <strong>LIKE A DIAMOND</strong>
              </Typography>
              <Typography variant="h4" className="colorwhite">
                <strong>CONTEÚDO E ARTE</strong>
              </Typography>
              <Typography variant="body1" className="colorwhite">
                Planejamento mensal de todo o conteúdo e arte.
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="btnbrancoazul"
                sx={{ mt: 3 }}
                onClick={() => LinkMenu("/likeadiamond")}
              >
                <strong>Ver case</strong>
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: { xs: "none", md: "block" },
              }}
            >
              <Image
                src={importados}
                alt="Case Importados Black Fish Digital"
                className="casesImportados"
              />
            </Grid>
          </Grid>
        </Box>
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

export default Cases;
