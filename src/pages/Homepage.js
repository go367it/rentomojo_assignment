import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsCard from "../components/DetailsCard";

const Homepage = () => {
  useEffect(() => {
    const config = {
      url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`,
      method: "get",
    };
    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <DetailsCard />
    </div>
  );
};

export default Homepage;
