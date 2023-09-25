import { createBrowserRouter } from "react-router-dom";
import MainLAyOuts from "../LayOuts/MainLayOuts/MainLAyOuts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonetInfo from "../Pages/DonetInfo/DonetInfo";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLAyOuts></MainLAyOuts>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')

            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donations/:id',
                element: <DonetInfo></DonetInfo>,
                loader: ()=> fetch('/data.json')
            }


        ]
      
    }
])
export default myCreatedRoute;