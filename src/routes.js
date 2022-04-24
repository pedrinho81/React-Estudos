import {BrowserRouter, Routes, Route} from "react-router-dom"
import PlanetsScreen from "./screens/planets"
import Planet from "./components/planets/planet"

const ScreenRoutes = () => (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<PlanetsScreen/>}/>
     </Routes>
    </BrowserRouter>
)

export default ScreenRoutes