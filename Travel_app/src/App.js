import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Search from "./components/Search";
import List from "./components/List";
import Map from "./components/Map";

function App() {
  return (
    <>
      <CssBaseline />
      <Search />
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* shows full width on mobile devices and 4 spaces in medium and larger devices*/}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
