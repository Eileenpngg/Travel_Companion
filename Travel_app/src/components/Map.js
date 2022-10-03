import React from "react";
import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";
import useStyles from "./styles";

//Paper is a div with a background color
const Map = (props) => {
  const classes = useStyles();
  const coordinates = props.coordinates;
  //const isMobile = useMediaQuery("min-width:600px");
  //Coordinates to be shown on google map
  //Defaultcenter is the center of the map
  //margin accepts an array of 4 different propoerites, top, right, bottom , left
  //function in onChildClick will run when a restaurant is clicked

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC3vsLJvjYdbgawBm8IWbwhukRiGYJuGKM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          props.setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
