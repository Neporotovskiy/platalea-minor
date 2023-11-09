import React from "react";
import { useLoaderData } from "react-router-dom";

import { Navigation } from "features/navigation";
import { Article } from "features/article";

import type { Article as ArticleType } from "types/article";

import styles from "./homepage.module.css";

type HomepageData = {
    featured: ArticleType;
    articles: ArticleType[];
};

export const Homepage = () => {
    const { featured, articles } = useLoaderData() as HomepageData;

    React.useEffect(() => {
        document.title = "Главная";
    });

    return (
        <>
            <Navigation />
            <Article size="large" {...featured} />
            <section className={styles.articles}>
                {articles.map((article) => (
                    <Article key={article.id} size="medium" {...article} />
                ))}
            </section>
        </>
    );
};
