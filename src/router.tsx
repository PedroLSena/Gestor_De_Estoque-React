import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ItemsLayout from "./pages/Items/Layout";
import ListItem from "./pages/Items/ListItem";
import CreateItem from "./pages/Items/CreateItem";
import ShowItem from "./pages/Items/ShowItem";
import UpdateItem from "./pages/Items/UpdateItem";
import RouterLayout from "./pages/RouterLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterLayout/>,
        children:[
            {index: true,element: <Home/>},
            {
                path: "items",
                element: <ItemsLayout/>,
                children:[
                    {index: true,element: <ListItem/>},
                    {path:"new",element: <CreateItem/>},
                    {path:":id",element: <ShowItem/>},
                    {path:":id/update",element: <UpdateItem/>},  
                ]
            }
        ]
    }
]);

export default router;