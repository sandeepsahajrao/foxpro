import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../image/logo.png";
import { useState } from "react";
import "./header2.css";

export const Header2 = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:599px)");
  const matches1 = useMediaQuery(theme.breakpoints.down("sm"));
  const topPadding = matches ? "63px" : "126px";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        //  className="header2Menuname"
        position='fixed'
        sx={{ top: topPadding, background: "white", color: "black" }}
      >
        <Toolbar>
          <Box
            className={menuOpen ? "header2MenunameMobileR" : "header2Menuname"}
            sx={{
              margin: "0px",
              [theme.breakpoints.up("sm")]: {
                margin: "0px 50px",
              },
              [theme.breakpoints.up("md")]: {
                margin: "0px 80px",
              },
              [theme.breakpoints.up("lg")]: {
                margin: "0px 130px",
              },
              [theme.breakpoints.between("xs", "md")]: {
                margin: "0px 0px",
              },
              height: "88px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <img
                src={logo}
                alt='logo'
                style={{ width: "75px", height: "65px" }}
              />
            </Box>

            <Box
              className={
                menuOpen ? "header2MenunameMobileR" : "header2Menuname"
              }
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Button
                color='inherit'
                sx={{
                  padding: "5px 15px",
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "&.active": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  },
                }}
              >
                Home
              </Button>
              <Button
                color='inherit'
                sx={{
                  padding: "5px 10px",
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "&.active": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  },
                }}
              >
                About US
              </Button>
              <Button
                color='inherit'
                sx={{
                  padding: "5px 10px",
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "&.active": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  },
                }}
              >
                Products
              </Button>
              <Button
                color='inherit'
                sx={{
                  padding: "5px 10px",
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "&.active": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  },
                }}
              >
                Brochure
              </Button>
              <Button
                color='inherit'
                sx={{
                  padding: "5px 10px",
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "&.active": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                  },
                }}
              >
                Contact US
              </Button>
            </Box>
          </Box>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            className={menuOpen ? "header2menuIcon2" : "header2menuIcon"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
