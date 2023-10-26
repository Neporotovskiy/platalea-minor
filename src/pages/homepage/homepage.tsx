import React from "react";
import { useLoaderData } from "react-router-dom";

import { Page } from "features/page";
import * as Article from "features/article";

import type { Article as ArticleType } from "types/article";

import styles from "./homepage.module.css";

type HomepageData = {
    main: ArticleType;
    featured: ArticleType[];
    other: ArticleType[];
};

export const Homepage = () => {
    const { main, featured, other } = useLoaderData() as HomepageData;

    return (
        <Page name="GSF - Главная">
            <Article.Large {...main} />
            <section className={styles.section}>
                {featured.map((article) => (
                    <Article.Medium {...article} />
                ))}
            </section>
            <section className={styles.section}>
                {other.map((article) => (
                    <Article.Small {...article} />
                ))}
            </section>
        </Page>
    );
};
