
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import User from "./pages/User";
import Admin from "./pages/Admin";


const router = createBrowserRouter([
    {path:"/",
        element:<Layout/>,
       children:[
        {path:"/",
        element:<Home/>,
        },
        {
          path:"/owner",
          element:<Owner/>,
        },
        {
          path:"/user",
          element:<User/>
        },
        {
          path:"/admin",
          element:<Admin/>
        }
       ]
    }
])
export default function App(){
    return <RouterProvider router={router}/>;
    
}
