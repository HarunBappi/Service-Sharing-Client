import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
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
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
    ]
    }
])

export default router