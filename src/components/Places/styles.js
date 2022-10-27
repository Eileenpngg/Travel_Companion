import { makeStyles } from "@material-ui/core/styles";

//makestyles function includes a callback function, retunring an object with the desired styles of the respective classNames
//makeStyles include a theme object with different paddings and colors
const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "5px 5px 5px 0",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default useStyles;
