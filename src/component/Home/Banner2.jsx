import { Box, Button, Typography } from "@mui/material";
import React from "react";
import aboutimg from '../image/about-us-sec.png';
import './banner.css'

const Banner2 = () => {
  return (
    <>
      <Box sx={{margin:'0px 60px',padding:'60px',display:'flex'}} className="banner-container">
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%",padding:"10px" }}>
          <Typography variant='h2' className="bannerh1" component='div' sx={{fontSize:"2rem",lineHeight:'2rem',padding:'10px'}}>
            ABOUT US
          </Typography>
          <Typography variant='h1' className="bannerh1" component='div' sx={{fontSize:"2rem",fontWeight:'bold',lineHeight:'2rem',padding:'10px'}}>
            Best Electronics Product
          </Typography>
          <Typography variant='h1' className="bannerh1" component='div' sx={{fontSize:"2rem",fontWeight:'bold',lineHeight:'2rem',padding:'10px'}}>
            Wholesaler in Delhi
          </Typography>
          <Box component='span' className="Bannerpara" sx={{marginTop:'10px',padding:'10px',color:' #666666',fontWeight:'500px',lineHeight:'2rem'}}>
            We are one of the prominent name in Electronics Business working
            since early 80's with the name OSWAL & OSPRO. We launched oue new
            brand FOXPRO in 2016 and since than we are achieveing our targets
            continiously. We are offering Electronics Items i.e Batteries,Wall
            Mount Stands, Mobile Chargers, Power Strips, Tweeters,
            Trolly,Blootooth Speaker. Our raw material is sourced from best
            factories to ensure high quality standards of our products. Customer
            Satisfaction is our moto we are working for.
          </Box>
          <Button variant='contained' className="bannerbtn" sx={{width:'155px',padding:'10px,26px',background:'orange',color:'black',marginTop:'15px',marginLeft:'10px'}}>Read More ...</Button>
        </Box>
        <Box sx={{width:"50%",position:'absolute',right:'0px',display:'flex',justifyContent:'center'}}>
            <img src={aboutimg} alt="aboutimg"  style={{width:'50%',position:'relative',left:'40px'}}/>
        </Box>
      </Box>
    </>
  );
};

export default Banner2;
