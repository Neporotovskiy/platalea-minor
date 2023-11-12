import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import { Text } from "components/text";

import { Navigation } from "features/navigation";

import styles from "./error.module.css";

export const Error = () => {
    const error = useRouteError() as Response;

    React.useEffect(() => {
        document.title = "Ошибка";
    });

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404: {
                return (
                    <>
                        <Navigation />
                        <section className={styles.error}>
                            <Text as="h2" size="medium" color="light">
                                404
                            </Text>
                            <Text as="p" size="small" color="light">
                                Страница не найдена
                            </Text>
                        </section>
                    </>
                );
            }
            default: {
                return (
                    <>
                        <Navigation />
                        <section className={styles.error}>
                            <Text as="h2" size="medium" color="light">
                                {error.status}
                            </Text>
                            <Text as="p" size="small" color="light">
                                Ошибка обработки данных
                            </Text>
                        </section>
                    </>
                );
            }
        }
    } else
        return (
            <>
                <Navigation />
                <section className={styles.error}>
                    <Text as="h2" size="medium" color="light">
                        Неизвестная ошибка
                    </Text>
                </section>
            </>
        );
};
