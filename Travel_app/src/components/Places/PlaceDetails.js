import React, { useEffect, useState } from "react";
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
import { Rating } from "@material-ui/lab";

import useStyles from "../Map/styles";

//Modals
import Web from "../Modals/Web";

const PlaceDetails = (props) => {
  const classes = useStyles();
  const [openWeb, setOpenWeb] = useState(false);

  const handleClick = () => {
    setOpenWeb(false);
  };
  useEffect(() => {
    if (props.selected) {
      props.refProp?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [props.selected]);

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          props.place.photo ? (
            props.place.photo.images.large.url
          ) : (
            null
          )
        }
        title={props.place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(props.place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {props.place.num_reviews} reviews
          </Typography>
        </Box>

        {props.place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {props.place.address}
          </Typography>
        )}
        {props.place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon /> {props.place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => setOpenWeb(true)}>
            Find out more
          </Button>
        </CardActions>
      </CardContent>
      {openWeb && <Web website={props.place.web_url} onClick={handleClick} />}
    </Card>
  );
};

export default PlaceDetails;
