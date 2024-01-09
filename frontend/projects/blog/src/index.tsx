import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Articles } from "pages/articles";
import { Article } from "pages/article";
import { About } from "pages/about";

import { Page } from "features/page";

import { Error } from "shared/build/components/error";

import "shared/styles/variables.css";
import "shared/styles/fonts.css";

import "./index.css";

window.history.scrollRestoration = "manual";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Page name="Главная">
                <Homepage />
            </Page>
        ),
        errorElement: (
            <Page name="Страница недоступна">
                <Error message="ROUTE_ERR" description="Страница недоступна" />
            </Page>
        ),
    },
    {
        path: "/articles",
        element: (
            <Page name="Все статьи">
                <Articles />
            </Page>
        ),
        errorElement: (
            <Page name="Страница недоступна">
                <Error message="ROUTE_ERR" description="Страница недоступна" />
            </Page>
        ),
    },
    {
        path: "/articles/:id",
        element: (
            <Page name="Загрузка...">
                <Article />
            </Page>
        ),
        errorElement: (
            <Page name="Страница недоступна">
                <Error message="ROUTE_ERR" description="Страница недоступна" />
            </Page>
        ),
    },
    {
        path: "/about",
        element: (
            <Page name="О проекте">
                <About />
            </Page>
        ),
        errorElement: (
            <Page name="Страница недоступна">
                <Error message="ROUTE_ERR" description="Страница недоступна" />
            </Page>
        ),
    },
]);

const root = ReactDOM.createRoot(window.app);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
