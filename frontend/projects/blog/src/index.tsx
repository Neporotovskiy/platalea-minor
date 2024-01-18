import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Articles } from "pages/articles";
import { Article } from "pages/article";
import { About } from "pages/about";

import { Navigation } from "features/navigation";

import { Error } from "shared/build/components/error";

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
                index: true,
                element: <Homepage />,
                errorElement: (
                    <Error
                        message="ROUTE_ERR"
                        description="Страница недоступна"
                    />
                ),
            },
            {
                path: "/articles",
                element: <Articles />,
                errorElement: (
                    <Error
                        message="ROUTE_ERR"
                        description="Страница недоступна"
                    />
                ),
            },
            {
                path: "/articles/:id",
                element: <Article />,
                errorElement: (
                    <Error
                        message="ROUTE_ERR"
                        description="Страница недоступна"
                    />
                ),
            },
            {
                path: "/about",
                element: <About />,
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
