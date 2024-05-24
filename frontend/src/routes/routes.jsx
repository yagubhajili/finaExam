import AddPage from "../pages/addPage/AddPage";
import AdminRoot from "../pages/admin/AdminRoot";
import Basket from "../pages/basket/Basket";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import UserRoot from "../pages/user/UserRoot";
import Wishlist from "../pages/wishlist/Wishlist";

export const routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/:id",
                element: <Detail />,

            },
            {
                path: "/basket",
                element: <Basket />,

            },
            {
                path: "/wishlist",
                element: <Wishlist />,

            },
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "/admin",
                element: <AddPage />,

            },
        ]
    },
]