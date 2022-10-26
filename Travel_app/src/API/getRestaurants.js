import react from "react";

import axios from "axios";

// gets the resturant data based on the sw, ne bounds
const getRestaurants = async (bounds, type) => {
  //this distructures the data and the data in the data
  //bottom left is south west, top right is ne
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bounds.sw.lat,
          tr_latitude: bounds.ne.lat,
          bl_longitude: bounds.sw.lat,
          tr_longitude: bounds.ne.lng,
        },
        headers: {
          // "X-RapidAPI-Key":
          //   "65b819bbadmsh18d671a786277a9p17754ejsnbf4288e38dcc",
          // "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRestaurants;
