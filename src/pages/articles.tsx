import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import { Navigation } from "features/navigation";
import { Article } from "features/article";

import { Search } from "components/search";
import { Select } from "components/select";

import { useDebouncedValue } from "hooks/use-debounced-value";

import type { Article as ArticleType, Tag as TagType } from "types/article";

import styles from "./articles.module.css";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

type Params = {
    query?: string;
    tag?: string;
    order?: string;
};

const get = (searchParams: URLSearchParams, name: string) =>
    searchParams.get(name) ?? "";

export const Articles = () => {
    const { tags, articles } = useLoaderData() as ArticlesData;

    const [params, setParams] = useSearchParams(window.location.search);
    const [query, setQuery] = React.useState<string>(get(params, "query"));
    const [tag, setTag] = React.useState<string>(get(params, "tag"));
    const [order, setOrder] = React.useState<string>(get(params, "order"));
    const deferredQuery = React.useDeferredValue<string>(query);
    const deferredTag = React.useDeferredValue<string>(tag);
    const deferredOrder = React.useDeferredValue<string>(order);
    const debouncedQuery = useDebouncedValue<string>(deferredQuery, 500);

    React.useEffect(() => {
        const result: Params = {};
        if (deferredTag) result["tag"] = deferredTag;
        if (deferredOrder) result["order"] = deferredOrder;
        if (debouncedQuery) result["query"] = debouncedQuery;
        setParams(result);
    }, [deferredTag, deferredOrder, debouncedQuery, setParams]);

    React.useEffect(() => {
        document.title = "Все статьи";
    });

    return (
        <>
            <Navigation />
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
        </>
    );
};
