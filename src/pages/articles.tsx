import React, { Suspense } from "react";
import { useLoaderData, Await, useSearchParams } from "react-router-dom";

import { Navigation } from "features/navigation";
import { Article } from "features/article";
import { AsyncError } from "features/error";

import { Search } from "components/search";
import { MultiSelect, Select } from "components/select";
import { Skeleton } from "components/skeleton";
import { Text } from "components/text";

import type { Article as ArticleType, Tag as TagType } from "types/article";

import styles from "./articles.module.css";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

export const Articles = () => {
    const { promise } = useLoaderData() as LoaderData<ArticlesData>;

    const [params, setParams] = useSearchParams(window.location.search);

    const getStringParam = (key: string): string => params.get(key) ?? "";

    const setStringParam =
        (key: string) =>
        (value: string): void => {
            setParams((search) => {
                if (value === "") {
                    search.delete(key);
                } else {
                    search.set(key, value);
                }
                return search;
            });
        };

    const getArrayParam = (key: string): string[] => {
        const unique = new Set<string>(params.getAll(key));
        return Array.from(unique);
    };

    const setArrayParam =
        (key: string) =>
        (values: string[]): void => {
            setParams((search) => {
                if (values.length === 0) {
                    search.delete(key);
                } else if (values.length === 1) {
                    search.set(key, values[0]);
                } else {
                    values.forEach((value, index) => {
                        if (index === 0) {
                            search.set(key, value);
                        } else {
                            search.append(key, value);
                        }
                    });
                }
                return search;
            });
        };

    React.useEffect(() => {
        document.title = "Все статьи";
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
            <Navigation />
            <Suspense
                fallback={
                    <>
                        <section className={styles.filters}>
                            <div className={styles.filter}>
                                <Skeleton width="350px" height="44px" />
                            </div>
                            <div className={styles.filter}>
                                <Skeleton width="350px" height="44px" />
                            </div>
                            <div className={styles.filter}>
                                <Skeleton width="350px" height="44px" />
                            </div>
                        </section>
                        <section className={styles.articles}>
                            <Skeleton width="350px" height="350px" />
                            <Skeleton width="350px" height="350px" />
                            <Skeleton width="350px" height="350px" />
                            <Skeleton width="350px" height="350px" />
                            <Skeleton width="350px" height="350px" />
                            <Skeleton width="350px" height="350px" />
                        </section>
                    </>
                }
            >
                <Await resolve={promise} errorElement={<AsyncError />}>
                    {({ tags, articles }: ArticlesData) => (
                        <>
                            <section className={styles.filters}>
                                <div className={styles.filter}>
                                    <Search
                                        type="text"
                                        value={getStringParam("query")}
                                        onChange={setStringParam("query")}
                                        placeholder="Поиск по названию"
                                    />
                                </div>
                                <div className={styles.filter}>
                                    <MultiSelect
                                        values={getArrayParam("tag")}
                                        onChange={setArrayParam("tag")}
                                        placeholder="Поиск по метке"
                                    >
                                        {tags.map(({ id, name }) => ({
                                            value: id,
                                            label: name,
                                        }))}
                                    </MultiSelect>
                                </div>
                                <div className={styles.filter}>
                                    <Select
                                        value={getStringParam("order")}
                                        onChange={setStringParam("order")}
                                        placeholder="Сортировка"
                                    >
                                        {[
                                            {
                                                value: "asc",
                                                label: "Самые свежие",
                                            },
                                            {
                                                value: "desc",
                                                label: "Самые старые",
                                            },
                                        ]}
                                    </Select>
                                </div>
                            </section>
                            <section className={styles.articles}>
                                {articles.length > 0 ? (
                                    articles.map((article) => (
                                        <Article
                                            key={article.id}
                                            size="medium"
                                            {...article}
                                        />
                                    ))
                                ) : (
                                    <div className={styles.empty}>
                                        <Text
                                            as="h2"
                                            size="medium"
                                            color="light"
                                        >
                                            Ничего не найдено
                                        </Text>
                                        <Text as="p" size="small" color="light">
                                            Измените параметры поиска
                                        </Text>
                                    </div>
                                )}
                            </section>
                        </>
                    )}
                </Await>
            </Suspense>
        </>
    );
};
