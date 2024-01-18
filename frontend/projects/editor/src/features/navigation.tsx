import React from "react";
import ReactDOM from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

import { Text } from "shared/build/components/text";

import styles from "./navigation.module.css";

export const Navigation = () => {
    const { pathname } = useLocation();

    return ReactDOM.createPortal(
        <>
            {[
                {
                    name: "Создать статью",
                    url: "/article",
                },
            ].map(({ url, name }) => (
                <Text
                    as={NavLink}
                    key={name}
                    to={url}
                    color="light"
                    size="small"
                    className={clsx(styles.link, {
                        [styles.selected]: url === pathname,
                    })}
                >
                    {name}
                </Text>
            ))}
        </>,
        window.nav,
    );
};
