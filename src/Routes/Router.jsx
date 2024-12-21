import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
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
        }
    ]
    }
])

export default router