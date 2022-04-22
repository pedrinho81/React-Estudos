import React, {useState, useEffect} from "react"
import PlanetList from "./components/planets"
import {Fragment} from "react"
import Planet from "./components/planets/planet"
import GrayImg from "./components/shared/gray-img"


function App() {
  return (
    <div>
      <PlanetList/>
  
    </div>
  );
}

export default App;
