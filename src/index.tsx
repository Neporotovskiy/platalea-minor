import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Articles } from "pages/articles";
import { Article } from "pages/article";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        loader: () => [
            {
                type: "article",
                size: "large",
                color: "semi-dark",
                cover: "/about-cover.jpg",
                header: {
                    tags: [{ name: "Об игре" }],
                },
                content: {
                    title: "Ground Branch",
                    description:
                        "В GROUND BRANCH вы работаете на Центр специальных операций / Специальную оперативную группу ЦРУ (SAC/SOG) и решаете различные задачи в составе парамилитарного подразделения",
                },
                link: {
                    href: "/articles/about-game",
                    title: "Подробнее",
                },
            },
            {
                type: "navigation",
                links: [
                    {
                        url: "/articles/codex",
                        name: "Кодекс",
                        updated: false,
                    },
                    {
                        url: "/articles?tags=0,1,2",
                        name: "Инструкции",
                        updated: true,
                    },
                    {
                        url: "/articles",
                        name: "Статьи",
                        updated: true,
                    },
                    {
                        url: "/articles?tags=3,4,5",
                        name: "Видео",
                        updated: false,
                    },
                    {
                        url: "/articles?tags=6,7,8",
                        name: "Скриншоты",
                        updated: false,
                    },
                ],
            },
            {
                type: "article",
                size: "medium",
                color: "semi-dark",
                cover: "/article-cover.jpg",
                header: {
                    tags: [
                        { id: 0, name: "Тактика" },
                        { id: 1, name: "Коммуникация" },
                        { id: 2, name: "Основы" },
                    ],
                },
                content: {
                    title: "Алгоритм разбежки на карте Run Down",
                },
                link: {
                    href: "/articles/htr-rd",
                    title: "Читать",
                },
            },
            {
                type: "article",
                size: "medium",
                color: "semi-dark",
                cover: "/article-cover.jpg",
                header: {},
                content: {
                    title: "Наш Discord сервер",
                },
                link: {
                    href: "https://discord.gg/MUw6cB6xpX",
                    target: "_blank",
                    title: "Присоединиться",
                },
            },
        ],
    },
    {
        path: "/articles",
        element: <Articles />,
    },
    {
        path: "/articles/:slug",
        element: <Article />,
    },
]);

const root = ReactDOM.createRoot(window.main);

root.render(<RouterProvider router={router} />);
