import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import ReservationPage from "./ReservationPage";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

const Main = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/#about-section" element={<About/>}></Route>
            <Route path="menu" element={<Menu/>}></Route>
            <Route path="reservation-page" element={<ReservationPage/>}></Route>
            <Route path="order-online" element={<OrderOnline/>}></Route>
            <Route path="login" element={<Login/>}></Route>
        </Routes>
    )
}

export default Main;