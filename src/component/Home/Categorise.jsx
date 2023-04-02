import { Typography, Box } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import "./spec.css";
import { GridBoxCate } from "./GridBoxCate";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Categorise = () => {
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
          <Box
            className='boxtitle1'
            sx={{ marginBottom: "30px", textAlign: "center" }}
          >
            <Box
              className='boxtitle2'
              sx={{ color: "black", fontSize: "1rem", fontWeight: "600",marginBottom:'10px' }}
            >
              SEE OUR TOP CATEGORIES
            </Box>
            <Box
              className='boxtitle2'
              component='span'
              sx={{  fontSize: "2rem", fontWeight: "700" }}
            >
              PRODUCT&nbsp;
            </Box>
            <Box
              className='boxtitle2'
              component='span'
              sx={{ color: "orange", fontSize: "2rem", fontWeight: "bold" }}
            >
              CATEGORIES
            </Box>
          </Box>
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
          <GridBoxCate></GridBoxCate>
        </Box>
      </Box>
    </>
  );
};
