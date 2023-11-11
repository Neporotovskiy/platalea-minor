import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { Tag } from "components/tag";
import { Text } from "components/text";
import { Image } from "components/image";

import type { Article as ArticleType } from "types/article";

import styles from "./article.module.css";

export const Article = ({
    id,
    tags,
    cover,
    title,
    description,
    size,
}: ArticleType & Record<"size", "medium" | "large">) => (
    <article data-id={id} className={clsx(styles.article, styles[size])}>
        <Image src={cover} alt={title} />
        <div className={styles.overlay}>
            <header className={styles.header}>
                {tags.map(({ id, name }) => (
                    <Tag
                        key={id}
                        as={NavLink}
                        to={"/articles?tag=" + id}
                        color="dark"
                    >
                        {name}
                    </Tag>
                ))}
            </header>
            <section className={styles.content}>
                <NavLink to={"/articles/" + id}>
                    <Text
                        as="h2"
                        size={size === "large" ? "x-large" : "large"}
                        color="light"
                        className={styles.title}
                    >
                        {title}
                    </Text>
                </NavLink>
                <Text
                    as="p"
                    size="medium"
                    color="light"
                    className={styles.description}
                >
                    {description}
                </Text>
            </section>
        </div>
    </article>
);
