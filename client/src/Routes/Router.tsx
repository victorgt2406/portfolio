import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "skills",
        element: <div>Skills</div>,
    },
    {
        path: "projects",
        element: <div>Projects</div>,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
