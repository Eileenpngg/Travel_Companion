import React, { useState, useEffect } from "react";

import axios from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
//gets the resturant data based on the sw, ne bounds
const getRestaurants = async (bounds) => {
  //this distructures the data and the data in the data
  //bottom left is south west, top right is ne
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        bl_latitude: bounds.sw.lat,
        tr_latitude: bounds.ne.lat,
        bl_longitude: bounds.ne.lng,
        tr_longitude: bounds.ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "bc964356ffmsha1abfbf8dda3eddp1c102djsnd90ca4ae2e8a",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRestaurants;
