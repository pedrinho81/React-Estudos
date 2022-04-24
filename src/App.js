import React, {useState, useEffect} from "react"
import PlanetList from "./components/planets"
import {Fragment} from "react"
import Planet from "./components/planets/planet"
import GrayImg from "./components/shared/gray-img"
import ScreenRoutes from "./routes"

function App() {
  return (
    <div>
      <ScreenRoutes/>
    </div>
  );
}

export default App;
