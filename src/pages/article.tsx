import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import clsx from "clsx";

import { Navigation } from "features/navigation";
import { renderer } from "features/blocks";
import { Discord } from "features/discord";

import { Image } from "components/image";
import { Text } from "components/text";
import { Tag } from "components/tag";

import { Article as ArticleType } from "types/article";
import { Content as ContentType } from "types/article";

import styles from "./article.module.css";

type ArticleData = ArticleType & {
    content: ContentType[];
    TOC: ContentType[];
};

const getHash = () => decodeURI(window.location.hash);

export const Article = () => {
    const article = useLoaderData() as ArticleData;

    React.useEffect(() => {
        document.title = article.title;
    }, [article.title]);

    React.useEffect(() => {
        if (window.location.hash) {
            const id = getHash().slice(1);
            const element = document.getElementById(id);
            element?.scrollIntoView(true);
        } else {
            window.scroll({
                top: 0,
            });
        }
    }, [article.id]);

    return (
        <>
            <Navigation />
            <article className={styles.article}>
                <header className={styles.header}>
                    <div className={styles.tags}>
                        {article.tags.map(({ id, name }) => (
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
                        {article.title}
                    </Text>
                    <Text
                        as="h2"
                        color="light"
                        size="small"
                        className={styles.description}
                    >
                        {article.description}
                    </Text>
                    <Image
                        width="1070"
                        height="602"
                        src={article.cover}
                        alt={article.description}
                        className={styles.cover}
                    />
                </header>
                <div className={styles.layout}>
                    <section className={styles.content}>
                        {article.content.map(renderer)}
                    </section>
                    <section className={clsx(styles.TOC, "scrollable")}>
                        {article.TOC.map((element) => {
                            const href = "#" + element.properties.id;
                            return (
                                <Text
                                    as="a"
                                    color="light"
                                    size="small"
                                    key={element.id}
                                    href={href}
                                    className={clsx(styles.link, {
                                        [styles.selected]: href === getHash(),
                                    })}
                                >
                                    {element.children[0] as string}
                                </Text>
                            );
                        })}
                    </section>
                </div>
                <Discord />
            </article>
        </>
    );
};
