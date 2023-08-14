import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

import axios from "axios";
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://randomuser.me/api/");
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, meals }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
