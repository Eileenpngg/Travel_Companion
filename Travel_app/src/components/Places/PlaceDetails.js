import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab";

import useStyles from "../Map/styles";

const PlaceDetails = (props) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          props.place.photo ? (
            props.place.photo.images.large.url
          ) : (
            <h1>Image Not Available</h1>
          )
        }
        title={props.place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.place.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
