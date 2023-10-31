import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, json } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Articles } from "pages/articles";
import { Article } from "pages/article";
import { Error } from "pages/error";

import { ARTICLES, TAGS } from "./fixtures";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        loader: () => ({
            featured: ARTICLES[0],
            articles: ARTICLES.slice(1),
        }),
        errorElement: <Error />,
    },
    {
        path: "/articles",
        element: <Articles />,
        loader: ({ request }) => {
            const url = new URL(request.url);
            const params = url.searchParams;
            const query = params.get("q") ?? "";
            const tag = params.get("t") ?? "";
            const order = params.get("o") ?? "";

            console.log("--------- Filters ----------");
            console.log("Search:", query || "<empty>");
            console.log("Tag:", tag || "<empty>");
            console.log("Order:", order || "<empty>");
            console.log("----------------------------");

            return {
                tags: TAGS,
                articles: ARTICLES,
            };
        },
        errorElement: <Error />,
    },
    {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
            const article = ARTICLES.find(({ id }) => id === params.id);
            if (article === undefined) throw json(null, { status: 404 });
            return {
                ...article,
                content: [
                    {
                        id: "node-1",
                        type: "paragraph",
                        properties: {},
                        children: [
                            {
                                id: "node-2",
                                type: "text",
                                properties: {},
                                children: [
                                    "Война - это путь обмана. ",
                                    {
                                        id: "node-33",
                                        type: "link",
                                        properties: {
                                            href: "/",
                                        },
                                        children: ["Поэтому"],
                                    },
                                    ", если ты и можешь что-нибудь, показывай противнику, будто не можешь; если ты и пользуешься чем-нибудь, показывай ему, будто ты этим не пользуешься; хотя бы ты и был близко, показывай, будто ты далеко; хотя бы ты и был далеко, показывай, будто ты близко; заманивай его выгодой; приведи его в расстройство и бери его; если у него все полно, будь наготове; если он силен, уклоняйся от него; вызвав в нем гнев, приведи его в состояние расстройства; приняв смиренный вид, вызови в нем самомнение; если его силы свежи, утоми его; если у него дружны воины, разъедини; нападай на него, когда он не готов; выступай, когда он не ожидает.",
                                ],
                            },
                        ],
                    },
                    {
                        id: "node-3",
                        type: "header",
                        properties: {},
                        children: [
                            "Основы коммуникации и взаимодействия в составе тактической единицы",
                        ],
                    },
                    {
                        id: "node-4",
                        type: "paragraph",
                        properties: {},
                        children: [
                            {
                                id: "node-5",
                                type: "text",
                                properties: {},
                                children: [
                                    "Война - это путь обмана. Поэтому, если ты и можешь что-нибудь, показывай противнику, будто не можешь; если ты и пользуешься чем-нибудь, показывай ему, будто ты этим не пользуешься; хотя бы ты и был близко, показывай, будто ты далеко; хотя бы ты и был далеко, показывай, будто ты близко; заманивай его выгодой; приведи его в расстройство и бери его; если у него все полно, будь наготове; если он силен, уклоняйся от него; вызвав в нем гнев, приведи его в состояние расстройства; приняв смиренный вид, вызови в нем самомнение; если его силы свежи, утоми его; если у него дружны воины, разъедини; нападай на него, когда он не готов; выступай, когда он не ожидает.",
                                ],
                            },
                        ],
                    },
                    {
                        id: "node-6",
                        type: "picture",
                        properties: {
                            src: "/article-cover.jpg",
                        },
                        children: [],
                    },
                    {
                        id: "node-7",
                        type: "paragraph",
                        properties: {},
                        children: [
                            {
                                id: "node-8",
                                type: "text",
                                properties: {},
                                children: [
                                    "Война - это путь обмана. Поэтому, если ты и можешь что-нибудь, показывай противнику, будто не можешь; если ты и пользуешься чем-нибудь, показывай ему, будто ты этим не пользуешься; хотя бы ты и был близко, показывай, будто ты далеко; хотя бы ты и был далеко, показывай, будто ты близко; заманивай его выгодой; приведи его в расстройство и бери его; если у него все полно, будь наготове; если он силен, уклоняйся от него; вызвав в нем гнев, приведи его в состояние расстройства; приняв смиренный вид, вызови в нем самомнение; если его силы свежи, утоми его; если у него дружны воины, разъедини; нападай на него, когда он не готов; выступай, когда он не ожидает.",
                                ],
                            },
                        ],
                    },
                ],
            };
        },
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(window.app);

root.render(<RouterProvider router={router} />);
