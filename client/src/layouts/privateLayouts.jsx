import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";


function PrivateLayout () {
    const accessToken = localStorage.getItem("access_token");

    if(!accessToken){
        return <Navigate to="/login" />
    }
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default PrivateLayout;