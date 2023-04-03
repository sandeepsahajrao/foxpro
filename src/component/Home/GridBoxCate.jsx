import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";

import battries from '../image/batteries.jpg'
import wallmount from '../image/wall-mounts.jpg'
import speaker from '../image/speaker-wires.jpg'
import middleCharger from '../image/mibile-charger.jpg'
import powerStrip from '../image/power-stripes.jpg'
import trolies from '../image/trolies.jpg'
import tspeaker from '../image/tweeter.jpg'
import Bspeaker from '../image/bluetooth-speaker.jpg'
import "./gridboxcat.css"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const gridData = [
  {
    name: "Batteries",
    image: battries,
  },
  {
    name: "Wall Mounts",
    image: wallmount,
  },
  {
    name: "Speaker Wires",
    image: speaker,
  },
  {
    name: "Mobile Charger",
    image: middleCharger,
  },
  {
    name: "Power Stripes",
    image: powerStrip,
  },
  {
    name: "Trolies",
    image: trolies,
  },
  {
    name: "Tweeter",
    image: tspeaker,
  },
  {
    name: "Bluetooth Speaker",
    image: Bspeaker,
  },
];

export const GridBoxCate = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        item
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 1, sm: 6, md: 12 }}
        rows={{ xs: 3, md: 1 }}

      >
        {gridData.map((item, index) => (
          <Grid
          className="cardgirdMain1"
          xs={12}
          sm={6}
          item
          md={4}
            key={index}
            sx={{ padding: "20px" }}
          >
            <Card
              className="cardgird1"
              sx={{ minWidth: "80px", lineHeight: "40px" }}
            >
              <CardContent>
                <Box sx={{ display: "flex",flexDirection:'column',justifyContent:'center',alignItems:'center', gap: "30px" }}>
                  <Box className="boxicon1 cardgird1img" sx={{display: "flex",flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100'}}>
                    <img src={item.image} alt={item.name} style={{width:'80%'}} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: "normal",
                        marginBottom: "5px",
                      }}
                      color="black"
                    >
                      Product Name
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                      color="black"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
