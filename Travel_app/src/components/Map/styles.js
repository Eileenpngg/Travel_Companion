import { makeStyles } from "@material-ui/core/styles";

//makestyles function includes a callback function, retunring an object with the desired styles of the respective classNames
//makeStyles include a theme object with different paddings and colors
const useStyles = makeStyles((theme) => ({
  title: {
    display: "block",
  },

  search: {
    position: "relative",
  },
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
}));

export default useStyles;
