import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import './header1.css'
export const Header1 = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ background: "black" }}>
        <Toolbar>
          <Grid
            container
            justifyContent='space-between'
            alignItems='center'
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
            }}
          >
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: matches ? "column" : "row",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Typography
                  className="header1email"
                  variant='h6'
                  component='div'
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 0.1,
                    fontSize: matches ? "12px" : "14px",
                    textAlign: matches ? "center" : "left",
                    pb: matches ? "10px" : 0,
                    color:'gray',
                    fontWeight:'600'
                  }}
                >
                  <EmailIcon sx={{ mr: 1 }} />
                  oswalelectronic@gmail.com
                </Typography>

                <Typography
                className="header1email"
                  variant='h6'
                  component='div'
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 0.1,
                    fontSize: matches ? "12px" : "14px",
                    textAlign: matches ? "center" : "left",
                    pb: matches ? "10px" : 0,
                    color:'gray',
                    fontWeight:'600'
                  }}
                >
                  <PhoneIcon sx={{ mr: 1 }} />
                  9891682867
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
              className="header1icon"
                sx={{
                  display: "flex",
                  justifyContent: matches ? "center" : "flex-end",
                }}
              >
                <IconButton
                
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
                >
                  <TwitterIcon />
                </IconButton>

                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
