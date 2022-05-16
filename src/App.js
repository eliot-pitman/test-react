import React from "react";
import { useEffect } from "react";
// 26600242

const API_URL = "http://www.omdbapi.com/?apikey=26600242&";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Blade Runner");
  }, []);

  return <h1> hello </h1>;
};

export default App;
