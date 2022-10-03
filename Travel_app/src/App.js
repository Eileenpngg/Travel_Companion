import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Search from "./components/Search";
import List from "./components/List";
import Map from "./components/Map";

import getRestaurants from "./API/getRestaurants";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState(null);

  //gets the user coordinates when the app is first launched
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //gets the data of the restaurants when the map moves
  useEffect(() => {
    console.log(bounds);
    getRestaurants(bounds).then((data) => {
      console.log(data);
      setRestaurants(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Search />
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* shows full width on mobile devices and 4 spaces in medium and larger devices*/}
        <Grid item xs={12} md={4}>
          <List restaurants={restaurants}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
