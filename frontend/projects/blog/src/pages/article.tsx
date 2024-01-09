import React from "react";
import { useParams, NavLink } from "react-router-dom";

import { renderer } from "features/blocks";

import { Image } from "shared/build/components/image";
import { Text } from "shared/build/components/text";
import { Tag } from "shared/build/components/tag";
import { Skeleton } from "shared/build/components/skeleton";
import { Error } from "shared/build/components/error";

import { Article as ArticleType } from "types/article";
import { Content as ContentType } from "types/article";

import styles from "./article.module.css";

type Data = ArticleType & {
    content: ContentType[];
};

export const Article = () => {
    const { id } = useParams();

    const [[response, loading, error], setState] = React.useState<
        [Data | null, boolean, boolean]
    >([null, true, false]);

    React.useEffect(() => {
        const controller = new AbortController();

        setState([null, true, false]);

        fetch("/api/articles/" + id, { signal: controller.signal })
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
    }, [id]);

    React.useEffect(() => {
        if (response !== null) {
            document.title = response.title;

            const hash = window.location.hash;

            if (hash !== "")
                document.querySelector(decodeURI(hash))?.scrollIntoView(true);
        }
    }, [response]);

    if (loading)
        return (
            <article className={styles.article}>
                <header className={styles.header}>
                    <div className={styles.tags}>
                        <Skeleton width="80px" height="24px" />
                        <Skeleton width="80px" height="24px" />
                    </div>
                    <Skeleton width="500px" height="50px" />
                    <Skeleton width="300px" height="24px" />
                    <Skeleton
                        width="1070px"
                        height="602px"
                        className={styles.cover}
                    />
                </header>
            </article>
        );

    if (error)
        return (
            <Error message="REQ_ERR" description="Данные страницы недоступны" />
        );

    const { tags, title, description, cover, content } = response as Data;

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className={styles.tags}>
                    {tags.map(({ id, name }) => (
                        <Tag
                            key={id}
                            as={NavLink}
                            to={"/articles?tag=" + id}
                            color="semi-dark"
                        >
                            {name}
                        </Tag>
                    ))}
                </div>
                <Text
                    as="h1"
                    color="light"
                    size="large"
                    className={styles.title}
                >
                    {title}
                </Text>
                <Text
                    as="h2"
                    color="light"
                    size="small"
                    className={styles.description}
                >
                    {description}
                </Text>
                <Image
                    width={1070}
                    height={602}
                    src={cover}
                    alt={description}
                    className={styles.cover}
                />
            </header>
            <section className={styles.content}>
                {content.map(renderer)}
            </section>
        </article>
    );
};
