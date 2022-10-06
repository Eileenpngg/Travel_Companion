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
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  //gets the user coordinates when the app is first launched
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  //Gets the current position of the user on mount
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
    getRestaurants(bounds, type).then((data) => {
      setIsLoading(false);
      setPlaces(data);
      setFilteredPlaces([])
    });
  }, [coordinates, bounds, type]);

  //filters the place by returning places with a rating above the selected value
  useEffect(() => {
    const filterPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filterPlaces);
  }, [rating]);

  return (
    <>
      <CssBaseline />
      <Search />
      <Grid
        container
        spacing={3}
        style={{ width: "100%", overflowY: "unset" }}
        direction="row"
      >
        {/* shows full width on mobile devices and 4 spaces in medium and larger devices*/}
        <Grid item xs={12} md={12}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places} //use a ternary operator so that only when the user selects a rating, the filtered places will show, otherwise, it will show the places
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
