import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import { Page } from "features/page";
import { Article } from "features/article";

import { Search } from "components/search";
import { Select } from "components/select";

import type { Article as ArticleType, Tag as TagType } from "types/article";

import styles from "./articles.module.css";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

type Params = {
    query?: string;
    tags?: string;
    order?: string;
};

const get = (searchParams: URLSearchParams, name: string) =>
    searchParams.get(name) ?? "";

export const Articles = () => {
    const { tags, articles } = useLoaderData() as ArticlesData;

    const [params, setParams] = useSearchParams(document.location.search);
    const [query, setQuery] = React.useState<string>(get(params, "query"));
    const [tag, setTag] = React.useState<string>(get(params, "tags"));
    const [order, setOrder] = React.useState<string>(get(params, "order"));

    React.useEffect(() => {
        const result: Params = {};
        if (query) result["query"] = query;
        if (tag) result["tags"] = tag;
        if (order) result["order"] = order;
        setParams(result);
    }, [query, tag, order, setParams]);

    React.useEffect(() => {
        setQuery(get(params, "query"));
        setTag(get(params, "tags"));
        setOrder(get(params, "order"));
    }, [params]);

    return (
        <Page name="GSF - Все статьи">
            <section className={styles.filters}>
                <div className={styles.filter}>
                    <Search
                        type="text"
                        value={query}
                        onChange={setQuery}
                        placeholder="Поиск по названию"
                    />
                </div>
                <div className={styles.filter}>
                    <Select
                        value={tag}
                        onChange={setTag}
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
                        value={order}
                        onChange={setOrder}
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
        </Page>
    );
};
