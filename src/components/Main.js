import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Reservations from "./Reservations";

const Main = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/" element={<About/>}></Route>
            <Route path="/" element={<Menu/>}></Route>
            <Route path="reservations" element={<Reservations/>}></Route>
            <Route path="/" element={<OrderOnline/>}></Route>
            <Route path="/" element={<Login/>}></Route>
        </Routes>
    )
}

export default Main;