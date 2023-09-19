import React from "react";
import { NavLink } from "react-router-dom";
import type { FC, ReactNode } from "react";

import { Widget } from "components/widget";
import { Tag } from "components/tag";
import { Text } from "components/text";
import { Button } from "components/button";
import { Image } from "components/image";

import styles from "./article.module.css";

type Props = {
    cover?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Article: FC<Props> = ({ cover, children, ...other }) => (
    <Widget as="article" {...other}>
        {cover ? (
            <div className={styles.cover}>
                <Image src={cover} alt="Иллюстрация статьи" />
                <div className={styles.overlay}>{children}</div>
            </div>
        ) : (
            children
        )}
    </Widget>
);

export const Tags: FC<{
    children: Array<{ id?: number; name: string }>;
    [key: string]: unknown;
}> = ({ children }) => (
    <header className={styles.header}>
        {children.map(({ id, name }) =>
            id === undefined ? (
                <Tag key={name} color="light">
                    {name}
                </Tag>
            ) : (
                <Tag
                    key={name}
                    color="light"
                    as={NavLink}
                    to={"/articles?tags=" + id}
                >
                    {name}
                </Tag>
            ),
        )}
    </header>
);

export const Content: FC<{
    title: string;
    description?: string;
    [key: string]: unknown;
}> = ({ title, description }) => (
    <section className={styles.content}>
        <Text as="h3" size="large" color="light">
            {title}
        </Text>
        {description && (
            <Text as="p" size="medium" color="light">
                {description}
            </Text>
        )}
    </section>
);

export const Link: FC<{
    href: string;
    children?: string;
    [key: string]: unknown;
}> = ({ href, children, ...other }) => (
    <Button as={NavLink} to={href} color="light" {...other}>
        {children}
    </Button>
);
