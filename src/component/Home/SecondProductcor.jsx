import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../image/secondcor/batteries (1).jpg";
import banner2 from "../image/secondcor/fp-002.jpg";
import banner3 from "../image/secondcor/fp-083.jpg";
import banner4 from "../image/secondcor/fp-18.jpg";
import banner5 from "../image/secondcor/fp-312.jpg";
import banner6 from "../image/secondcor/fp-528.jpg";

import "./secondP.css";
import { height } from "@mui/system";

export const SecondProductcor = () => {
  // const bannerImg = [banner1, banner2, banner3, banner4, banner5, banner6];

  const bannerImg = [
    {
      bimg: banner1,
      bname: "Model No. FP-011",
    },
    {
      bimg: banner2,
      bname: "Model No. FP-012",
    },
    {
      bimg: banner3,
      bname: "Model No. FP-018",
    },
    {
      bimg: banner4,
      bname: "Model No. FP-052",
    },
    {
      bimg: banner5,
      bname: "Model No. FP-083",
    },
    {
      bimg: banner6,
      bname: "Model No. FP-052",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 765 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 760, min: 500 },
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
    <>
      <Box>
        <Box sx={{ textAlign: "center", margin: "50px 0px", fontWeight: 500 }}>
          <Typography sx={{ fontSize: "1rem", marginBottom: "20px" }}>
            EXPLORE OUR WORK
          </Typography>
          <Box component='span' sx={{ fontSize: "2rem", fontWeight: 700 }}>
            MOST RUNNING
          </Box>
          <Box
            component='span'
            sx={{ fontSize: "2rem", fontWeight: 700, color: "orange" }}
          >
            &nbsp;PRODUCTS
          </Box>
        </Box>

        <Box className='secondGridBox' sx={{ margin: "0px 100px" }}>
          <Carousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition='all .3'
            transitionDuration={500}
            containerClass='carousel-container'
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px'
          >
            {bannerImg.map((data, index) => (
              <Box
                key={index}
                className='maingrid'
                sx={{
                  width: "240px",
                  // border: "1px solid red",
                  margin: "20px 20px",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className='bannerimg'
                  src={data.bimg}
                  key={index}
                  style={{
                    objectFit: "cover",
                    // border:'1px solid blue',
                    width: "100%",
                    height: "300px",
                    backgroundRepeat: "no-repeat",
                    margin: "0px,20px",
                    padding: "20px",
                  }}
                  alt={`Banner ${index + 1}`}
                />
                <Box
                  className='secProductName'
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  <Typography sx={{ paddingLeft: "10px" }}>
                    Product Name
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      paddingLeft: "10px",
                    }}
                  >
                    {data.bname}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};
