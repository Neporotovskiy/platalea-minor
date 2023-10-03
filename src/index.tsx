import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Articles } from "pages/articles";
import { Article } from "pages/article";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        loader: () => ({
            featured: {
                id: "0",
                title: "Ground Branch",
                description: "",
                content: "",
                cover: "/about-cover.jpg",
                tags: [{ id: "0", name: "Об игре" }],
            },
            articles: [
                {
                    id: "1",
                    title: "Алгоритм разбежки на карте Run Down",
                    description: "",
                    content: "",
                    cover: "/article-cover.jpg",
                    tags: [
                        { id: "1", name: "Тактика" },
                        { id: "2", name: "Коммуникация" },
                        { id: "3", name: "Основы" },
                    ],
                },
                {
                    id: "2",
                    title: "Discord-сервер",
                    description: "",
                    content: "",
                    cover: "",
                    tags: [{ id: "4", name: "Чат" }],
                },
            ],
        }),
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
                tags: [
                    { id: "0", name: "Об игре" },
                    { id: "1", name: "Тактика" },
                    { id: "2", name: "Коммуникация" },
                    { id: "3", name: "Основы" },
                    { id: "4", name: "Чат" },
                    { id: "5", name: "Развитие сообщества" },
                ],
                articles: [
                    {
                        id: "3",
                        title: "Основы коммуникации и взаимодействия в составе тактической единицы",
                        description: "",
                        content: "",
                        cover: "/article-cover.jpg",
                        tags: [{ id: "3", name: "Основы" }],
                    },
                    {
                        id: "4",
                        title: "Особенности поведения противника в темное время суток",
                        description: "",
                        content: "",
                        cover: "/article-cover.jpg",
                        tags: [{ id: "3", name: "Основы" }],
                    },
                    {
                        id: "5",
                        title: "Алгоритм разбежки из гаража на карте Run Down",
                        description: "",
                        content: "",
                        cover: "/article-cover.jpg",
                        tags: [{ id: "3", name: "Основы" }],
                    },
                    {
                        id: "6",
                        title: "Развед.сводка №017",
                        description: "Август 2023",
                        content: "",
                        cover: "/article-cover.jpg",
                        tags: [{ id: "3", name: "Основы" }],
                    },
                ],
            };
        },
    },
    {
        path: "/articles/:slug",
        element: <Article />,
    },
]);

const root = ReactDOM.createRoot(window.main);

root.render(<RouterProvider router={router} />);
