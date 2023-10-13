import React from "react";
import { NavLink } from "react-router-dom";
import type { FC, ReactNode } from "react";

import { Widget } from "components/widget";
import { Tag } from "components/tag";
import { Text } from "components/text";
import { Button } from "components/button";
import { Image } from "components/image";

import type { Tag as TagType } from "types/article";

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

export const Header: FC<{
    children: ReactNode | ReactNode[];
}> = ({ children }) => <header className={styles.header}>{children}</header>;

export const Tags: FC<{
    children: TagType[];
}> = ({ children }) => (
    <>
        {children.map(({ id, name }) => (
            <Tag key={name} color="light" as={NavLink} to={"/articles?t=" + id}>
                {name}
            </Tag>
        ))}
    </>
);

export const Content: FC<{
    children: ReactNode | ReactNode[];
}> = ({ children }) => <section className={styles.content}>{children}</section>;

export const Title: FC<{ children: ReactNode | ReactNode[] }> = ({
    children,
}) => (
    <Text as="h3" size="large" color="light" uppercase className={styles.title}>
        {children}
    </Text>
);

export const Description: FC<{ children: ReactNode | ReactNode[] }> = ({
    children,
}) => (
    <Text as="p" size="medium" color="light" className={styles.description}>
        {children}
    </Text>
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
