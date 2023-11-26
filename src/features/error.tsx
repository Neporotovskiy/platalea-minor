import React from "react";
import {
    useRouteError,
    isRouteErrorResponse,
    useAsyncError,
} from "react-router-dom";

import { Text } from "components/text";

import { Navigation } from "features/navigation";

import styles from "./error.module.css";

export const RouteError = () => {
    const error = useRouteError() as Response;

    React.useEffect(() => {
        document.title = "Ошибка";
    }, []);

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    if (isRouteErrorResponse(error))
        return (
            <>
                <Navigation />
                <section className={styles.error}>
                    <Text as="h2" size="medium" color="light">
                        {error.status}
                    </Text>
                    <Text as="p" size="small" color="light">
                        Ошибка загрузки данных
                    </Text>
                </section>
            </>
        );
    else
        return (
            <>
                <Navigation />
                <section className={styles.error}>
                    <Text as="h2" size="medium" color="light">
                        FE_ERR
                    </Text>
                    <Text as="p" size="small" color="light">
                        Неизвестная ошибка
                    </Text>
                </section>
            </>
        );
};

export const AsyncError = () => {
    const error = useAsyncError() as Response;

    React.useEffect(() => {
        document.title = "Ошибка";
    }, []);

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <section className={styles.error}>
                <Text as="h2" size="medium" color="light">
                    {error.status}
                </Text>
                <Text as="p" size="small" color="light">
                    Ошибка загрузки данных
                </Text>
            </section>
        </>
    );
};
