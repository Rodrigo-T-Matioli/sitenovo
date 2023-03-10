import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import * as React from "react";
import useColorMode from "../../hooks/useColorMode";
import LogoBlack from "../../icons/logo";

const pages = [
  {
    url: "/",
    txt: "Inicio",
  },
  {
    url: "/cases",
    txt: "Cases",
  },
  {
    url: "/planos",
    txt: "Planos",
  },
  {
    url: "#orcamento",
    txt: "Orçamento",
  },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();
  const LinkMenu = (link: string) => {
    router.push(`${link}`);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LogoBlack sx={{ width: "60px", height: "60px" }} />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.txt} onClick={() => LinkMenu(page.url)}>
                  <Typography textAlign="center">{page.txt}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LogoBlack
            sx={{
              width: "60px",
              height: "60px",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.txt}
                onClick={() => LinkMenu(page.url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.txt}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip title="Tem sensibilidade à luz?">
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness7Icon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
