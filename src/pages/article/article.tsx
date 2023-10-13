import React from "react";
import { useLoaderData } from "react-router-dom";

import { Breadcrumbs } from "features/breadcrumbs";
import { Tags } from "features/article";

import { DocumentTitle } from "components/document-title";
import { Image } from "components/image";
import { Text } from "components/text";

import { Article as ArticleType } from "types/article";
import { Content as ContentType } from "types/article";

import { renderer } from "./blocks";
import styles from "./article.module.css";

type ArticleData = ArticleType & { content: ContentType[] };

export const Article = () => {
    const article = useLoaderData() as ArticleData;

    return (
        <>
            <DocumentTitle>{"GSF - " + article.title}</DocumentTitle>
            <Breadcrumbs>
                {[
                    {
                        href: "/",
                        title: "Главная",
                    },
                    {
                        href: "/articles",
                        title: "Статьи",
                    },
                    {
                        title: article.title,
                    },
                ]}
            </Breadcrumbs>
            <article className={styles.article}>
                <section className={styles.header}>
                    <Image
                        src={article.cover}
                        alt={article.description}
                        className={styles.cover}
                    />
                    <div className={styles.overlay}>
                        <section className={styles.info}>
                            <div>
                                <Tags>{article.tags}</Tags>
                            </div>
                            <Text as="h1" color="light" size="large" uppercase>
                                {article.title}
                            </Text>
                            <Text as="h2" color="light">
                                {article.description}
                            </Text>
                        </section>
                    </div>
                </section>
                <section className={styles.content}>
                    {article.content.map(renderer)}
                </section>
            </article>
        </>
    );
};
