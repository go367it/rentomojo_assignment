import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";
import Grid from "@mui/material/Grid";
import { Paper, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`,
      method: "get",
    };
    axios(config)
      .then((res) => {
        console.log(res.data.slice(1, res.data.length));
        setData(res.data.slice(1, res.data.length));
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
      <Grid container spacing={2}>
        {data.length > 0 ? (
          data.map((j) => {
            return (
              <Grid key={j.id} item xs={4}>
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
