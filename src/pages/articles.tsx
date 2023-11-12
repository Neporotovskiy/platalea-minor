import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import { Navigation } from "features/navigation";
import { Article } from "features/article";
import { Discord } from "features/discord";

import { Search } from "components/search";
import { Select } from "components/select";

import type { Article as ArticleType, Tag as TagType } from "types/article";

import styles from "./articles.module.css";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

export const Articles = () => {
    const { tags, articles } = useLoaderData() as ArticlesData;

    const [params, setParams] = useSearchParams(window.location.search);

    const getParam = (key: string) => params.get(key) ?? "";

    const setParam = (key: string) => (value: any) => {
        setParams((applied) => {
            if (value === "") {
                applied.delete(key);
            } else {
                applied.set(key, value);
            }
            return applied;
        });
    };

    React.useEffect(() => {
        document.title = "Все статьи";
    });

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <Navigation />
            <section className={styles.filters}>
                <div className={styles.filter}>
                    <Search
                        type="text"
                        value={getParam("query")}
                        onChange={setParam("query")}
                        placeholder="Поиск по названию"
                    />
                </div>
                <div className={styles.filter}>
                    <Select
                        value={getParam("tag")}
                        onChange={setParam("tag")}
                        placeholder="Поиск по метке"
                    >
                        {tags.map(({ id, name }) => ({
                            value: id,
                            label: name,
                        }))}
                    </Select>
                </div>
                <div className={styles.filter}>
                    <Select
                        value={getParam("order")}
                        onChange={setParam("order")}
                        placeholder="Сортировка"
                    >
                        {[
                            { value: "asc", label: "Самые свежие" },
                            { value: "desc", label: "Самые старые" },
                        ]}
                    </Select>
                </div>
            </section>
            <section className={styles.articles}>
                {articles.map((article) => (
                    <Article key={article.id} size="medium" {...article} />
                ))}
            </section>
            <Discord />
        </>
    );
};
