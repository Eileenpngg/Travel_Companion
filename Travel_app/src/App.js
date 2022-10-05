import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

//Different components of home page
import Search from "./components/Search/Search";
import List from "./components/List/List";
import Map from "./components/Map/Map";

//Gets Data of Places
import getRestaurants from "./API/getRestaurants";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  //gets the user coordinates when the app is first launched
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //gets the data of the restaurants when the map moves
  useEffect(() => {
    setIsLoading(true);
    getRestaurants(bounds).then((data) => {
      setIsLoading(false);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Search />
      <Grid container spacing={3} style={{ width: "100%", overflowY: 'unset', }}>
        {/* shows full width on mobile devices and 4 spaces in medium and larger devices*/}
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
