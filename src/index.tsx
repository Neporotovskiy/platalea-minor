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
        loader: () => ({
            tags: [],
            articles: [],
        }),
    },
    {
        path: "/articles/:slug",
        element: <Article />,
    },
]);

const root = ReactDOM.createRoot(window.main);

root.render(<RouterProvider router={router} />);
