import React, { useEffect, useContext } from "react";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";
import Grid from "@mui/material/Grid";
import { Paper, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FilterTools from "../components/FilterTools";
// importing context
import GameContext from "../Context/GameContext";

const Homepage = () => {

  const {details, updateDetails} = useContext(GameContext)

  useEffect(() => {
    const config = {
      url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`,
      method: "get",
    };
    axios(config)
      .then((res) => {
        console.log(res.data.slice(1, res.data.length));
        updateDetails(res.data.slice(1, res.data.length))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Paper
      variant="outlined"
      sx={{
        padding: "10px",
      }}
    >
      <FilterTools />
      <Grid container spacing={2}>
        {details.length > 0 ? (
          details.map((j) => {
            return (
              <Grid key={j.id} item xs={12} md={6} lg={4}>
                <DetailsCard
                  key={j.id}
                  title={j.title}
                  platform={j.platform}
                  genre={j.genre}
                  score={j.score}
                  editors_choice={j.editors_choice}
                />
              </Grid>
            );
          })
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Box>
              <CircularProgress color="secondary" />
              Loading ...
            </Box>
          </Box>
        )}
      </Grid>
    </Paper>
  );
};

export default Homepage;
