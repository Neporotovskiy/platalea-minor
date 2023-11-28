import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    defer,
    RouterProvider,
    type LoaderFunctionArgs,
} from "react-router-dom";

import { RouteError } from "features/error";

import { Homepage, type Data as HomepageData } from "pages/homepage";
import { Articles, type Data as ArticlesData } from "pages/articles";
import { Article, type Data as ArticleData } from "pages/article";
import { About } from "pages/about";

import { Page } from "features/page";

import { _fetch } from "./fixtures";

window.history.scrollRestoration = "manual";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Page<HomepageData> skeleton={<Homepage.Skeleton />}>
                <Homepage />
            </Page>
        ),
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
        element: (
            <Page<ArticlesData> skeleton={<Articles.Skeleton />}>
                <Articles />
            </Page>
        ),
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
        element: (
            <Page<ArticleData> skeleton={<Article.Skeleton />}>
                <Article />
            </Page>
        ),
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
