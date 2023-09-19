import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import type { FC } from "react";

import { Widget } from "components/widget";
import { Tag } from "components/tag";
import { Button } from "components/button";

import styles from "./navigation.module.css";

type Link = {
    url: string;
    name: string;
    updated: boolean;
};

type Props = {
    children: Link[];
};

export const Navigation: FC<Props> = ({ children }) => (
    <Widget as="nav" size="large" className={styles.container}>
        {children.map(({ url, name, updated }) => (
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
