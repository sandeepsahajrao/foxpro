import React from "react";
import Banner from "./Banner";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Banner2 from "./Banner2";
import { Speciality } from "./Speciality";
import { Categorise } from "./Categorise";

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
      </Box>
    </>
  );
};

export default MainC;
