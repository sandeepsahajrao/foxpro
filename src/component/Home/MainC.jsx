import React from "react";
import Banner from "./Banner";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Banner2 from "./Banner2";
import { Speciality } from "./Speciality";
import { Categorise } from "./Categorise";
import { SecondProductcor } from "./SecondProductcor";
import { Reviews } from "./Reviews";
import { Testmessages } from "./Testmessages";
import { Footer1 } from "./Footer1";
import Lastfootes from "./Lastfootes";
const MainC = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  let marginTop = "100px";
  if (isSmScreen) {
    marginTop = "159px";
  } else if (isMdScreen) {
    marginTop = "159px";
  } else if (isLgScreen) {
    marginTop = "99px";
  }

  return (
    <>
      <Box sx={{ with: "100%", height: "90vh", marginTop }}>
        <Banner></Banner>
        <Banner2></Banner2>
        <Speciality></Speciality>
        <Categorise></Categorise>
        <SecondProductcor></SecondProductcor>
        <Reviews></Reviews>
        <Testmessages></Testmessages>
        <Footer1></Footer1>
        <Lastfootes></Lastfootes>
      </Box>
    </>
  );
};

export default MainC;
