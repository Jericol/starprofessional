import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from '../layout/LayoutRoot'
import Home from '../pages/Home/Home';




export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                
            }
        ]
    },
    
])