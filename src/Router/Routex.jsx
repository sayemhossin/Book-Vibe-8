import {
    createBrowserRouter,
} from "react-router-dom"
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import BookDetails from "../Components/Bookdetails/BookDetails";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
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
                element: <ListedBooks></ListedBooks>

            },
            {
                path: '/Page-to-read',
                element: <p>This is Page-to-read</p>
            },
        ]
    }
]);

export default router