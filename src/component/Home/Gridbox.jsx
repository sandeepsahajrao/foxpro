import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditOffIcon from "@mui/icons-material/EditOff";
import "./gridbox.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const gridData = [
  {
    icon: <EmojiEventsIcon />,
    message: "Our Experience",
    description:
      "Our experience is what allow us to serve you better. We are serving mankind since early 80s with name OSWAL & OSPRO.",
  },
  {
    icon: <CheckCircleIcon />,
    message: "Products Quality",
    description:
      "We promise to provide high quality products. We believe in standardization and uniformity of business practices.",
  },
  {
    icon: <PhoneAndroidIcon />,
    message: "Best Technology",
    description:
      "We keep transforming our organisation with latest technology updates that enhance our product quality and delivery.",
  },
  {
    icon: <PersonIcon />,
    message: "Customer Prefrence",
    description:
      "We keep researching and developing new lifestyle products as per market trends and requirements as per your preference.",
  },
  {
    icon: <AccessTimeIcon />,
    message: "Timely Delivered",
    description:
      "We believe in timely delivery. All the orders would be delivered within stipulated time period without any hassle.",
  },
  {
    icon: <EditOffIcon />,
    message: "Customized Solution",
    description:
      "We at FOXPRO also do customized orders as per your requirements. Please feel free to connect in case of any requirement.",
  },
];

export default function Gridbox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 1, sm: 6, md: 12 }}
        rows={{ xs: 3, md: 1 }}
      >
        {gridData.map((item, index) => (
          <Grid
            className='cardgirdMain'
            xs={12}
            sm={6}
            md={6}
            key={index}
            sx={{ padding: "20px" }}
          >
            <Card
              className='cardgird'
              sx={{ minWidth: "300px", lineHeight: "40px" }}
            >
              <CardContent>
                <Box sx={{ display: "flex", gap: "20px" }}>
                  <Box
                    className='boxicon'
                    sx={{ color: "orange", fontWeight: 700 }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                      color='black'
                    >
                      {item.message}
                    </Typography>
                    <Box component='span'>{item.description}</Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
