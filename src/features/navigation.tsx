import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { Widget } from "components/widget";
import { Tag } from "components/tag";
import { Button } from "components/button";

import styles from "./navigation.module.css";

type Link = {
    url: string;
    name: string;
    updated: boolean;
};

const LINKS: Link[] = [
    {
        url: "/articles/codex",
        name: "Кодекс",
        updated: false,
    },
    {
        url: "/articles?tags=0,1,2",
        name: "Инструкции",
        updated: false,
    },
    {
        url: "/articles",
        name: "Статьи",
        updated: false,
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
];

export const Navigation = () => (
    <Widget as="nav" size="large" className={styles.container}>
        {LINKS.map(({ url, name, updated }) => (
            <Button
                as={NavLink}
                to={url}
                key={name}
                color="semi-dark"
                className={clsx(styles.button, {
                    [styles.selected]:
                        url ===
                        window.location.pathname + window.location.search,
                })}
            >
                {updated && (
                    <Tag color="dark" className={styles.tag}>
                        Обновлено
                    </Tag>
                )}
                {name}
            </Button>
        ))}
    </Widget>
);
