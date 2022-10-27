import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import Rating from "@material-ui/lab";
import useStyles from "../List/styles";
import PlaceDetails from "../Places/PlaceDetails";

const List = (props) => {
  const classes = useStyles();
  const [elRef, setElRef] = useState([]);

  //Passes the index of current index to placeDetails
  //Everytime the places change, 
  useEffect(() => {
    if (props.places) {
      const refs = Array(props.places.length) //constructs the number of element depending on the no. of places and fill the array
        .fill()
        .map((_, i) => elRef[i] || createRef()); //Map the array and takes the index of the reference or if its not created, a ref will be created
      setElRef(refs); //put the refs in a state
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.places]);

  const handleSelect = (e) => {
    props.setType(e.target.value);
  };

  const handleRating = (e) => {
    props.setRating(e.target.value);
  };
  return (
    <div className={classes.container}>
      <Typography variant="h4"> Resturants, Hotels and Attractions</Typography>
      {props.isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={props.type} onChange={handleSelect}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={props.rating} onChange={handleRating}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid
            container
            spacing={3}
            className={classes.list}
            direction="column"
          >
        {/*  As the places are being map through, you can pass in the reference you created 
        above and access it based on the index of the element that is currently mapped through */}
            {props.places?.map((place, i) => ( 
              <Grid ref={elRef[i]} item key={i} xs={12}>
                {/* A prop of 'selected is passed through and if the child clicked's index === to the 
                index of the places mapped */}
                <PlaceDetails
                  place={place}
                  selected={Number(props.childClicked) === i}
                  refProp={elRef[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
