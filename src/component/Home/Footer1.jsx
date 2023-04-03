import React from "react";
import "./footer1.css";
import Logo from "../image/logo.png";
import { Facebook, Twitter, Instagram, WhatsApp } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@mui/material";

export const Footer1 = () => {
  return (
    <Grid className="footerGrid" container spacing={2} sx={{ background: "#231f20" }}>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ bgcolor: "#231f20", color: "gray", p: 2 }}>
          <img src={Logo} alt='Logo' style={{ background:'none',marginBottom:"20px"}} />
          <Typography variant='body1'>
            We are one of the prominent name in Electronics Business working
            since early 80's with the name OSWAL &amp; OSPRO. We launched our
            new brand FOXPRO in 2016 and since then we are achieving our targets
            continuously.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ bgcolor: "#231f20", color: "gray", p: 2 }}>
          <List>
            <ListItem className="UsefullLinkitem12">
              <ListItemText
                primary='Useful Links'
                sx={{ textTransform: "uppercase", color: "white" }}
              />
            </ListItem>
            <ListItem className="UsefullLinkitem1">
              <ListItemText
                primary='Home'
                sx={{ textTransform: "uppercase" }}
              />
            </ListItem>
            <ListItem className="UsefullLinkitem1">
              <ListItemText
                primary='About Us'
                sx={{ textTransform: "uppercase" }}
              />
            </ListItem>
            <ListItem className="UsefullLinkitem1">
              <ListItemText
                primary='Products'
                sx={{ textTransform: "uppercase" }}
              />
            </ListItem>
            <ListItem className="UsefullLinkitem1">
              <ListItemText
                primary='Brochure'
                sx={{ textTransform: "uppercase" }}
              />
            </ListItem>
            <ListItem className="UsefullLinkitem1">
              <ListItemText
                primary='Contact us'
                sx={{ textTransform: "uppercase" }}
              />
            </ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ bgcolor: "#231f20", color: "gray", p: 2 }}>
          <List>
            <ListItem>
              <ListItemText
                sx={{ marginLeft: "10px", color: "white" }}
                primary='SOCIAL LINKS'
              />
            </ListItem>

            <ListItem className="sociallinkitem1">
              <Facebook />
              <ListItemText sx={{ marginLeft: "25px" }} primary='Facebook' />
            </ListItem>
            <ListItem className="sociallinkitem1">
              <Twitter />
              <ListItemText sx={{ marginLeft: "25px" }} primary='Twitter' />
            </ListItem>
            <ListItem className="sociallinkitem1">
              <Instagram />
              <ListItemText sx={{ marginLeft: "25px" }} primary='Instagram' />
            </ListItem>
            <ListItem className="sociallinkitem1">
              <WhatsApp />
              <ListItemText sx={{ marginLeft: "25px" }} primary='WhatsApp' />
            </ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ bgcolor: "#231f20", color: "gray", p: 2 }}>
          <List>
            <ListItem >
              <ListItemText
                sx={{ marginLeft: "10px", color: "white" }}
                primary='OUR LOCTION'
              />
            </ListItem>
            <ListItem className="OurLocationitem1">
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "orange", p: 2 }} />
              </ListItemIcon>
              <ListItemText primary='New Delhi India' />
            </ListItem>
            <ListItem className="OurLocationitem1">
              <ListItemIcon>
                <PhoneIcon sx={{ color: "orange", p: 2 }} />
              </ListItemIcon>
              <ListItemText primary='+91-9891682867' />
            </ListItem>
            <ListItem className="OurLocationitem1">
              <ListItemIcon>
                <EmailIcon sx={{ color: "orange", p: 2 }} />
              </ListItemIcon>
              <ListItemText primary='oswalelectronic@gmail.com' />
            </ListItem>
            <ListItem className="OurLocationitem1">
              <ListItemIcon>
                <LanguageIcon sx={{ color: "orange", p: 2 }} />
              </ListItemIcon>
              <ListItemText primary='www.foxpro.co.in' />
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};
