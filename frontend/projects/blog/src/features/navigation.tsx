import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { Text } from "shared/build/components/text";

import styles from "./navigation.module.css";

export const Navigation = () => {
    return ReactDOM.createPortal(
        <>
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
                    name: "О проекте",
                    url: "/about",
                },
            ].map(({ url, name }) => (
                <Text
                    as={NavLink}
                    key={name}
                    to={url}
                    color="light"
                    size="small"
                    className={clsx(styles.link, {
                        [styles.selected]: url === window.location.pathname,
                    })}
                >
                    {name}
                </Text>
            ))}
        </>,
        window.nav,
    );
};
