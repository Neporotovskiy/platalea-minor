import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { Tag } from "shared/build/components/tag";
import { Text } from "shared/build/components/text";
import { Image } from "shared/build/components/image";

import type { Article as ArticleType } from "types/article";

import styles from "./article.module.css";

const SIZES = {
    medium: { width: 350, height: 350 },
    large: { width: 1070, height: 460 },
};

export const Article = ({
    id,
    tags,
    cover,
    title,
    description,
    size,
}: ArticleType & Record<"size", "medium" | "large">) => (
    <article data-id={id} className={clsx(styles.article, styles[size])}>
        <Image
            width={SIZES[size].width}
            height={SIZES[size].height}
            src={cover}
            alt={title}
        />
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
                        size={size === "large" ? "large" : "medium"}
                        color="light"
                        className={styles.title}
                    >
                        {title}
                    </Text>
                </NavLink>
                <Text
                    as="p"
                    size="small"
                    color="light"
                    className={styles.description}
                >
                    {description}
                </Text>
            </section>
        </div>
    </article>
);
