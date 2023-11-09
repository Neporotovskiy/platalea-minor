import React from "react";
import { useLoaderData } from "react-router-dom";

import { Image } from "components/image";
import { Text } from "components/text";

import { Article as ArticleType } from "types/article";
import { Content as ContentType } from "types/article";

import { Navigation } from "features/navigation";
import { renderer } from "features/blocks";

import styles from "./article.module.css";

type ArticleData = ArticleType & { content: ContentType[] };

export const Article = () => {
    const article = useLoaderData() as ArticleData;

    React.useEffect(() => {
        document.title = article.title;
    });

    return (
        <>
            <Navigation />
            <article className={styles.article}>
                <section className={styles.header}>
                    <Image
                        src={article.cover}
                        alt={article.description}
                        className={styles.cover}
                    />
                    <div className={styles.overlay}>
                        <section className={styles.info}>
                            <Text as="h1" color="light" size="large" uppercase>
                                {article.title}
                            </Text>
                            <Text as="h2" color="light" size="medium">
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
