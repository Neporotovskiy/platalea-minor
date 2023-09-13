import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "pages/homepage";
import { Articles } from "pages/articles";
import { Article } from "pages/article";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/articles",
        element: <Articles />,
    },
    {
        path: "/articles/:id",
        element: <Article />,
    },
]);

const root = ReactDOM.createRoot(window.main);

root.render(<RouterProvider router={router} />);
