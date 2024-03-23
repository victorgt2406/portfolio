import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Cv from "./Cv";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/cv",
        element: <Cv />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
