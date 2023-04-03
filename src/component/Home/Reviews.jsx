import { Typography, Box, Button } from "@mui/material";
import React from "react";
import './review.css'
export const Reviews = () => {
  return (
    <>
      <Box
      className="reviewBox"
        sx={{
          textAlign: "center",
          background: "black",
          color: "white",
          padding: "100px",
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Typography className="Reviewpara1" sx={{fontSize:'2rem'}}>
          MAKE YOUR LIFESTYLE EASIER WITH SUPERIOR ELECTRONIC PRODUCTS
        </Typography>
        <Typography className="Reviewpara2" sx={{fontSize:'1.3rem',margin:'10px 0px 0px 0px'}}>
          AFTER SALES SUPPORT &amp; CUSTOMIZATION AVAILABLE.
        </Typography>

        <Typography className="Reviewpara3" sx={{fontSize:'1rem',margin:'10px 0px 0px 0px'}}>
          Enhance your lifestyle with our superior quality electronic products
          i.e Bluetooth Speakers, Dry Cell Batteries, Wall Mount Stands, Audio
          Video cable and Mobile Chargers.
        </Typography>
        <Button variant='contained' sx={{ margin: "40px 0px 0px 0px",background:'orange',padding:'8px 10px' }}>
          Get In touch
        </Button>
      </Box>
    </>
  );
};
