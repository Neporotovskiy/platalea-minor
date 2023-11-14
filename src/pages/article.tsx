import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

import { Navigation } from "features/navigation";
import { renderer } from "features/blocks";
import { Discord } from "features/discord";

import { Image } from "components/image";
import { Text } from "components/text";
import { Tag } from "components/tag";

import { Article as ArticleType } from "types/article";
import { Content as ContentType } from "types/article";

import styles from "./article.module.css";

type ArticleData = ArticleType & { content: ContentType[] };

export const Article = () => {
    const article = useLoaderData() as ArticleData;

    React.useEffect(() => {
        document.title = article.title;
    }, [article.title]);

    React.useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            const element = document.getElementById(id);
            element?.scrollIntoView(true);
        } else {
            window.scroll({
                top: 0,
            });
        }
    }, [article.id]);

    return (
        <>
            <Navigation />
            <article className={styles.article}>
                <header className={styles.header}>
                    <div className={styles.content}>
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
                        <Text as="h1" color="light" size="large">
                            {article.title}
                        </Text>
                        <Text as="h2" color="light" size="small">
                            {article.description}
                        </Text>
                    </div>
                    <Image
                        src={article.cover}
                        alt={article.description}
                        width="1070"
                        height="602"
                        className={styles.cover}
                    />
                </header>
                <section className={styles.content}>
                    {article.content.map(renderer)}
                </section>
                <Discord />
            </article>
        </>
    );
};
