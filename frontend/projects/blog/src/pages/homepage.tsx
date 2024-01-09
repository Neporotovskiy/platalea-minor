import React from "react";
import { NavLink } from "react-router-dom";

import { Article } from "features/article";

import { Error } from "shared/build/components/error";
import { Text } from "shared/build/components/text";
import { Skeleton } from "shared/build/components/skeleton";

import type { Article as ArticleType } from "types/article";

import styles from "./homepage.module.css";

type Data = {
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
    const [[response, loading, error], setState] = React.useState<
        [Data | null, boolean, boolean]
    >([null, true, false]);

    React.useEffect(() => {
        const controller = new AbortController();

        fetch("/api/homepage", { signal: controller.signal })
            .then((response) => response.json())
            .then((json) => {
                setState([json, false, false]);
            })
            .catch(() => {
                setState([null, false, true]);
            });

        return () => {
            controller.abort();
        };
    }, []);

    if (loading)
        return (
            <section className={styles.articles}>
                <Skeleton width="1070px" height="460px" />
                <Skeleton width="350px" height="350px" />
                <Skeleton width="350px" height="350px" />
                <Skeleton width="350px" height="350px" />
            </section>
        );

    if (error)
        return (
            <Error message="REQ_ERR" description="Данные страницы недоступны" />
        );

    const { featured, sections } = response as Data;

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
