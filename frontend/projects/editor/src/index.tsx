import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Error } from "shared/build/components/error";

import { Navigation } from "features/navigation";

import { Editor } from "pages/editor";

import "shared/styles/variables.css";
import "shared/styles/fonts.css";

import "./index.css";

window.history.scrollRestoration = "manual";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navigation />
                <Outlet />
            </>
        ),
        children: [
            {
                path: "article",
                element: <Editor />,
                errorElement: (
                    <Error
                        message="ROUTE_ERR"
                        description="Страница недоступна"
                    />
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(window.app);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
