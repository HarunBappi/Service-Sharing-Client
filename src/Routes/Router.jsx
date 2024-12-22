import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AllServices from "../Pages/AllServices";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AddService from "../Pages/Dashboard/AddService";
import BookedService from "../Pages/Dashboard/BookedService";
import ManageService from "../Pages/Dashboard/ManageService";
import ServiceToDO from "../Pages/Dashboard/ServiceToDO";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services";



const router = createBrowserRouter([
    {
        path: '/',
        element:<HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
        {
            index: true,
            element:<Home></Home>
        },
        {
            path: 'services',
            element:<Services></Services>
        }, 
        {
            path: 'allServices',
            element:<AllServices></AllServices>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'addService',
            element:<AddService></AddService>
        },
        {
            path:'manageService',
            element:<ManageService></ManageService>
        }, 
        {
            path:'bookedService',
            element:<BookedService></BookedService>
        },
        {
            path:'serviceTodo',
            element:<ServiceToDO></ServiceToDO>
        },
    ]
    }
])

export default router