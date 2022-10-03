import React,{useState} from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType]=useState('restaurants')
  const [rating, setRating]=useState('')

  const handleSelect=(e)=>{
    setType(e.target.value)
  }

  const handleRating=()=>{

  }
  return (
    <div className={classes.container}>
      <Typography variant="h4"> Resturants, Hotels and Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={handleSelect}>
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={handleRating}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
