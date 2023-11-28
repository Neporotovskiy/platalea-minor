import React from "react";
import { NavLink, useAsyncValue } from "react-router-dom";

import { Article } from "features/article";

import { Text } from "components/text";
import { Skeleton } from "components/skeleton";

import type { Article as ArticleType } from "types/article";

import styles from "./homepage.module.css";

export type Data = {
    featured: {
        main: ArticleType;
        other: ArticleType[];
    };
    sections: Array<{
        name: string;
        link: {
            url: string;
            title: string;
        };
        articles: ArticleType[];
    }>;
};

export const Homepage = () => {
    const { featured, sections } = useAsyncValue() as Data;

    React.useEffect(() => {
        document.title = "Главная";
    }, []);

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <section className={styles.articles}>
                <Article size="large" {...featured.main} />
                {featured.other.map((article) => (
                    <Article key={article.id} size="medium" {...article} />
                ))}
            </section>
            {sections.map(({ name, link, articles }) => (
                <section key={name} className={styles.section}>
                    <header className={styles.header}>
                        <Text as="h2" size="large" color="light">
                            {name}
                        </Text>
                        <Text
                            as={NavLink}
                            to={link.url}
                            size="small"
                            color="light"
                        >
                            {link.title}
                        </Text>
                    </header>
                    <div className={styles.articles}>
                        {articles.map((article) => (
                            <Article
                                key={article.id}
                                size="medium"
                                {...article}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
};

Homepage.Skeleton = () => (
    <section className={styles.articles}>
        <Skeleton width="1070px" height="460px" />
        <Skeleton width="350px" height="350px" />
        <Skeleton width="350px" height="350px" />
        <Skeleton width="350px" height="350px" />
    </section>
);
