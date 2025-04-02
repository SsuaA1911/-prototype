
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import User from "./pages/User";


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
        }
       ]
    }
])
export default function App(){
    return <RouterProvider router={router}/>;
    
}
