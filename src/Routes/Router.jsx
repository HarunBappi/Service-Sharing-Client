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
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element:<HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
        {
            index: true,
            element:<Home></Home>,
            loader : ()=> fetch(`${import.meta.env.VITE_API_URL}/home`)
        },
        {
            path: 'allServices',
            element:<AllServices></AllServices>,
            loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/allServices`)
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
            element:<PrivateRoute>
                <AddService></AddService>
            </PrivateRoute>
        },
        {
            path:'manageService',
            element:<PrivateRoute>
                <ManageService></ManageService>
            </PrivateRoute>
        }, 
        {
            path:'bookedService',
            element:<PrivateRoute>
                <BookedService></BookedService>
            </PrivateRoute>
        },
        {
            path:'serviceTodo',
            element:<PrivateRoute>
                <ServiceToDO></ServiceToDO>
            </PrivateRoute>
        },
        {
            path: 'details/:id',
            element: <PrivateRoute>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
        }
    ]
    }
])

export default router