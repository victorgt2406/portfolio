import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const router = createBrowserRouter([
    {
        path: `${process.env.NODE_ENV !== "production" ? "/" : "/portfolio"}`,
        element: <Home />,
    },
    {
        path: `${process.env.NODE_ENV !== "production" ? "/contact" : "/portfolio/contact"}`,
        element: <Contact />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
