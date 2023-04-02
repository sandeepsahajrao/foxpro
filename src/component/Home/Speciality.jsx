import { Typography, Box } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Gridbox from "./Gridbox";
import "./spec.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Speciality = () => {
  return (
    <>
      <Box
        className='specbox'
        sx={{
          margin: "50px 130px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className='boxtitle' sx={{ marginBottom: "30px" }}>
            <Box
              className='boxtitle1'
              component='span'
              sx={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}
            >
              OUR&nbsp;&nbsp;
            </Box>
            <Box
              className='boxtitle2'
              component='span'
              sx={{ color: "orange", fontSize: "2rem", fontWeight: "bold" }}
            >
              SPECIALITIES
            </Box>
          </Box>
  
          <Typography className='spcepara'>
          
              Below mentioned USP's makes us stand apart from the competition.
              We always ensure best possible quality of
          </Typography>
          <Typography className='spcepara'>
          our products to make your experince unforgetable.
          </Typography>
        </Box>
        <Box
          className='specbox2'
          sx={{
            height: "auto",
            padding: "50px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Gridbox></Gridbox>
        </Box>
      </Box>
    </>
  );
};
