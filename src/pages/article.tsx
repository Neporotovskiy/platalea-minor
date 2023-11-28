import React from "react";
import { NavLink, useAsyncValue } from "react-router-dom";
import clsx from "clsx";

import { renderer } from "features/blocks";

import { Image } from "components/image";
import { Text } from "components/text";
import { Tag } from "components/tag";
import { Skeleton } from "components/skeleton";

import { Article as ArticleType } from "types/article";
import { Content as ContentType } from "types/article";

import styles from "./article.module.css";

export type Data = ArticleType & {
    content: ContentType[];
    TOC: ContentType[];
};

const getHash = () => decodeURI(window.location.hash);

export const Article = () => {
    const article = useAsyncValue() as Data;

    React.useEffect(() => {
        document.title = article.title;
    }, [article.title]);

    React.useEffect(() => {
        if (window.location.hash) {
            const id = getHash().slice(1);
            const element = document.getElementById(id);
            element?.scrollIntoView(true);
        } else {
            window.scroll({
                top: 0,
            });
        }
    }, [article.id]);

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className={styles.tags}>
                    {article.tags.map(({ id, name }) => (
                        <Tag
                            key={id}
                            as={NavLink}
                            to={"/articles?tag=" + id}
                            color="semi-dark"
                        >
                            {name}
                        </Tag>
                    ))}
                </div>
                <Text
                    as="h1"
                    color="light"
                    size="large"
                    className={styles.title}
                >
                    {article.title}
                </Text>
                <Text
                    as="h2"
                    color="light"
                    size="small"
                    className={styles.description}
                >
                    {article.description}
                </Text>
                <Image
                    width="1070"
                    height="602"
                    src={article.cover}
                    alt={article.description}
                    className={styles.cover}
                />
            </header>
            <div className={styles.layout}>
                <section className={styles.content}>
                    {article.content.map(renderer)}
                </section>
                <section className={clsx(styles.TOC, "scrollable")}>
                    {article.TOC.map((element) => {
                        const href = "#" + element.properties.id;
                        return (
                            <Text
                                as="a"
                                color="light"
                                size="small"
                                key={element.id}
                                href={href}
                                className={clsx(styles.link, {
                                    [styles.selected]: href === getHash(),
                                })}
                            >
                                {element.children[0] as string}
                            </Text>
                        );
                    })}
                </section>
            </div>
        </article>
    );
};

Article.Skeleton = () => (
    <article className={styles.article}>
        <header className={styles.header}>
            <div className={styles.tags}>
                <Skeleton width="80px" height="24px" />
                <Skeleton width="80px" height="24px" />
            </div>
            <Skeleton width="500px" height="50px" />
            <Skeleton width="300px" height="24px" />
            <Skeleton width="1070px" height="602px" className={styles.cover} />
        </header>
    </article>
);
