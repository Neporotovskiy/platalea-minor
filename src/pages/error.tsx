import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const Error = () => {
    const error = useRouteError() as Response;

    let title;

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404: {
                title = "Страница не найдена";
                break;
            }
            default: {
                title = "Ошибка получения данных";
            }
        }
    } else title = "Ошибка отображения";

    return <>{title}</>;
};
