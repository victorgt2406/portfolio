import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const router = createHashRouter([
    {
        // path: `${process.env.NODE_ENV !== "production" ? "/" : "/portfolio"}`,
        path: "/",
        element: <Home />,
    },
    {
        // path: `${process.env.NODE_ENV !== "production" ? "/contact" : "/portfolio/contact"}`,
        path: "/contact",
        element: <Contact />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
