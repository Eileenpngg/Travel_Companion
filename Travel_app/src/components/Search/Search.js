import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "../Map/styles";
// Appbar is the same as a NavBar
//Typography is every single text element
//Box is a div but you can set the display etc.
//ToolBar wraps the elements and places all the elements horizontally in the AppBar
const Search = (props) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  //get autocomplete and set it to the state
  const onLoad = (search) => {
    setAutocomplete(search);
  };

  const onChange = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    props.setCoordinates({ lat, lng });
  };
  return (
    <AppBar position="static" style={{ backgroundColor: "grey" }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Companion
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Find new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onChange}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.InputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Search;
