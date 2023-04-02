import { Box } from '@mui/material'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from '../image/banner-1.jpg'
import banner2 from '../image/banner-2.jpg'
import banner3 from '../image/banner-3.jpg'
import banner4 from '../image/banner-4.png'
import banner5 from '../image/banner-5.jpg'
import './banner.css'
const Banner = () => {
  const bannerImg = [banner1, banner2, banner3, banner4, banner5];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    },
  };

  return (
    <>
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
      >
        {bannerImg.map((data, index) => (
          <img
            className='bannerimg'
            src={data}
            key={index}
            style={{ objectFit:'cover', width: "100%", height: '450px',backgroundRepeat:'no-repeat',margin:'0px,20px' }}
            alt={`Banner ${index + 1}`}
          />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
