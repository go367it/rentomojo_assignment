import React, { useEffect, useContext } from "react";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";
import Grid from "@mui/material/Grid";
import { Paper, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FilterTools from "../components/FilterTools";
// importing gamecontextand filterContext for managing global state
import GameContext from "../Context/GameContext";
import FilterContext from "../Context/FilterContext";

const Homepage = () => {
  // defining global state
  const { details, updateDetails, updateBackupDetails } = useContext(GameContext);
  const { scoreState } = useContext(FilterContext);

  // when the components on to the screen
  useEffect(() => {
    // config for axios call
    const config = {
      url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`,
      method: "get",
    };

    // calling api for data and updating the state
    axios(config)
      .then((res) => {
        console.log(res.data.slice(1, res.data.length));
        const data = res.data.slice(1, res.data.length);

        data.sort(function (a, b) {
          return a.score - b.score;
        });
        updateDetails(data); // updating the global state for game details
        updateBackupDetails(data); // updating backupDetails global state
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
      {/* Filter tools for filtering the data according to user needs  */}
      <FilterTools />

      {/* cards containing details about every game  */}
      <Grid container spacing={2}>
        {details.length > 0 ? (
          scoreState ? (
            // rendering according to ascending
            details
              .sort(function (a, b) {
                return a.score - b.score;
              })
              .map((j, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                    <DetailsCard
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
            // rendering according to descending
            details
              .sort(function (a, b) {
                return b.score - a.score;
              })
              .map((j) => {
                return (
                  <Grid key={j.id} item xs={12} sm={6} md={6} lg={4}>
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
          )
        ) : (
          // for displaying the loading state
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
