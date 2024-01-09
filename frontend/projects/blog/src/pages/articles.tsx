import React from "react";
import { useSearchParams } from "react-router-dom";

import { Article } from "features/article";

import { Search } from "shared/build/components/search";
import { MultiSelect, Select } from "shared/build/components/select";
import { Skeleton } from "shared/build/components/skeleton";
import { Text } from "shared/build/components/text";
import { Error } from "shared/build/components/error";

import type { Article as ArticleType, Tag as TagType } from "types/article";

import styles from "./articles.module.css";

const TagsSelect = ({ values, onChange }: any) => {
    const [[response, loading, error], setState] = React.useState<
        [TagType[] | null, boolean, boolean]
    >([null, true, false]);

    React.useEffect(() => {
        const controller = new AbortController();

        fetch("/api/tags", { signal: controller.signal })
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

    if (loading) return <Skeleton width="350px" height="44px" />;

    if (error) return <Skeleton width="350px" height="44px" />;

    return (
        <MultiSelect
            values={values}
            onChange={onChange}
            placeholder="Поиск по метке"
        >
            {(response as TagType[]).map(({ id, name }) => ({
                value: id,
                label: name,
            }))}
        </MultiSelect>
    );
};

const Filters = () => {
    const [search, setSearch] = useSearchParams(window.location.search);
    const getStringParam = (key: string): string => search.get(key) ?? "";

    const setStringParam =
        (key: string) =>
        (value: string): void => {
            setSearch((search) => {
                if (value === "") {
                    search.delete(key);
                } else {
                    search.set(key, value);
                }
                return search;
            });
        };

    const getArrayParam = (key: string): string[] => {
        const unique = new Set<string>(search.getAll(key));
        return Array.from(unique);
    };

    const setArrayParam =
        (key: string) =>
        (values: string[]): void => {
            setSearch((search) => {
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

    return (
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
                <TagsSelect
                    values={getArrayParam("tag")}
                    onChange={setArrayParam("tag")}
                />
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
    );
};

export const Articles = () => {
    const [search] = useSearchParams(window.location.search);

    const [[response, loading, error], setState] = React.useState<
        [ArticleType[] | null, boolean, boolean]
    >([null, true, false]);

    React.useEffect(() => {
        const controller = new AbortController();

        setState([null, true, false]);

        fetch("/api/articles?" + search, { signal: controller.signal })
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
    }, [search]);

    return (
        <>
            <Filters />

            <section className={styles.articles}>
                {loading && (
                    <>
                        <Skeleton width="350px" height="350px" />
                        <Skeleton width="350px" height="350px" />
                        <Skeleton width="350px" height="350px" />
                    </>
                )}
                {error && (
                    <Error
                        message="REQ_ERR"
                        description="Данные страницы недоступны"
                    />
                )}
                {response &&
                    (response.length > 0 ? (
                        response.map((article) => (
                            <Article
                                key={article.id}
                                size="medium"
                                {...article}
                            />
                        ))
                    ) : (
                        <div className={styles.empty}>
                            <Text as="h2" size="medium" color="light">
                                Ничего не найдено
                            </Text>
                            <Text as="p" size="small" color="light">
                                Измените параметры поиска
                            </Text>
                        </div>
                    ))}
            </section>
        </>
    );
};
