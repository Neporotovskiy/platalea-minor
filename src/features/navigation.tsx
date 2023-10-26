import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "components/button";

import styles from "./navigation.module.css";

export const Navigation = () => {
    const current = window.location.pathname + window.location.search;
    return (
        <nav className={styles.navigation}>
            {[
                {
                    name: "Главная",
                    url: "/",
                },
                {
                    name: "Все статьи",
                    url: "/articles",
                },
                {
                    name: "Инструкции",
                    url: "/articles?t=0",
                },
                {
                    name: "Медиа",
                    url: "/articles?t=1",
                },
                {
                    name: "Магазин",
                    url: "/articles?t=2",
                },
            ].map(({ url, name }) => (
                <Button
                    as={NavLink}
                    key={name}
                    to={url}
                    color={url === current ? "light" : "semi-dark"}
                >
                    {name}
                </Button>
            ))}
        </nav>
    );
};
