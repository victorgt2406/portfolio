import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Routes/Router.tsx";
import { ContextProvider } from "./utils/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ContextProvider>
            <Router />
        </ContextProvider>
    </React.StrictMode>
);
