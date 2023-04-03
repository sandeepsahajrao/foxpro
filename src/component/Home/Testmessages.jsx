import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimg from "../image/secondcor/testi.jpg";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./testmessage.css";

// import "./banner.css";
export const Testmessages = () => {
  const gridData = [
    {
      Timag: testimg,
      name: "Andue Mic",
      masg: "FOXPRO products comes with great built quality. We are desling in FOXPRo products and we are really happy with the organisation.",
    },
    {
      Timag: testimg,
      name: "Bill John",
      masg: "FOXPRO products comes with great built quality. We are desling in FOXPRo products and we are really happy with the organisation.",
    },
    {
      Timag: testimg,
      name: "Mickly Mcik",
      masg: "FOXPRO products comes with great built quality. We are desling in FOXPRo products and we are really happy with the organisation.",
    },
    {
      Timag: testimg,
      name: "Tonny Tom",
      masg: "FOXPRO products comes with great built quality. We are desling in FOXPRo products and we are really happy with the organisation.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Box
          component='span'
          sx={{ textAlign: "center", fontSize: "2rem", fontWeight: "700" }}
        >
          OUR &nbsp;
        </Box>
        <Box
          component='span'
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "700",
            color: "orange",
          }}
        >
          TESTIMONIALS
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box className='horizontal-line'></Box>
        </Box>
      </Box>

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        removeArrowOnDeviceType={[
          "mobile",
          "desktop",
          "tablet",
          "superLargeDesktop",
        ]}
      >
        {gridData.map((data, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "300px",
                alignItems: "center",
                padding: "50px",
                // border: "1px solid red",
                margin: "30px 0px",
              }}
            >
              <Box sx={{ margin: "0px 0px 20px 0px" }}>
                <img
                  className='testbannerimg'
                  src={data.Timag}
                  key={index}
                  style={{
                    objectFit: "cover",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundRepeat: "no-repeat",
                  }}
                  alt={`Banner ${index + 1}`}
                />
              </Box>
              <Box sx={{ width: "100%", wordSpacing: "10px" }}>
                <em sx={{ mt: 1.5 }} variant='body1' component='div'>
                  &nbsp;{`${data.masg}&nbsp;`} &nbsp;
                </em>
              </Box>
              <Box className='TestIcon1'>
                <FormatQuoteIcon />
              </Box>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 600, color: "orange" }}
              >
                {data.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
