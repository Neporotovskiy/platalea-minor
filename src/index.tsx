import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

import { RouteError } from "features/error";

import { Homepage } from "pages/homepage";
import { Articles } from "pages/articles";
import { Article } from "pages/article";
import { About } from "pages/about";

import { _fetch } from "./fixtures";

window.history.scrollRestoration = "manual";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        loader: ({ request: { signal } }: LoaderFunctionArgs) =>
            defer({
                promise: _fetch("/api/homepage", {
                    signal,
                }).then((response) => response.json()),
            }),
        errorElement: <RouteError />,
    },
    {
        path: "/articles",
        element: <Articles />,
        loader: ({ request: { url, signal } }: LoaderFunctionArgs) => {
            const { search } = new URL(url);
            return defer({
                promise: _fetch(`/api/articles${search}`, {
                    signal,
                }).then((response) => response.json()),
            });
        },
        errorElement: <RouteError />,
    },
    {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ request: { signal }, params: { id } }: LoaderFunctionArgs) =>
            defer({
                promise: _fetch(`/api/article/${id}`, {
                    signal,
                }).then((response) => response.json()),
            }),
        errorElement: <RouteError />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <RouteError />,
    },
]);

const root = ReactDOM.createRoot(window.app);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
