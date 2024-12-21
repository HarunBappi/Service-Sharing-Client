import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


export default function HomeLayout() {
  return (
    <div>
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Outlet */}
        <Outlet></Outlet>
        {/* Footer */}
        <Footer></Footer>
    </div>
  )
}
