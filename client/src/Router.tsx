import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import MyNavBar from "./utils/MyNavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><MyNavBar/><Home/></>,
    },
    {
        path: "contact",
        element: <div>Contact</div>,
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

export default function () {
    return <RouterProvider router={router} />;
}
