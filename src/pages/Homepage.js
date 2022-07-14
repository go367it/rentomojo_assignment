import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

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
        {data.map((j) => {
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
        })}
      </Grid>
    </Paper>
  );
};

export default Homepage;
