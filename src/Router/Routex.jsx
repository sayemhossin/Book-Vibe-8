import {
    createBrowserRouter,
} from "react-router-dom"
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import BookDetails from "../Components/Bookdetails/BookDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
              
            },
            {
                path: "/details/:id",
                
                element: <BookDetails></BookDetails>,
              
            },
            {
                path: '/listed-books',
                element: <p>This is listed-books</p>
            },
            {
                path: '/Page-to-read',
                element: <p>This is Page-to-read</p>
            },
        ]
    }
]);

export default router