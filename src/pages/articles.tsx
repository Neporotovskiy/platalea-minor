import React from "react";
import { useLoaderData } from "react-router-dom";

import {
    Article,
    Header,
    Content,
    Tags,
    Title,
    Description,
    Link,
} from "features/article";
import { Navigation } from "features/navigation";
import { Breadcrumbs } from "features/breadcrumbs";
import { Filters } from "features/filters";

import { DocumentTitle } from "components/document-title";

import type { Article as ArticleType, Tag as TagType } from "types/article";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

export const Articles = () => {
    const { tags, articles } = useLoaderData() as ArticlesData;
    return (
        <>
            <DocumentTitle>GSF - Статьи</DocumentTitle>
            <Breadcrumbs>
                {[
                    {
                        href: "/",
                        title: "Главная",
                    },
                    {
                        title: "Статьи",
                    },
                ]}
            </Breadcrumbs>
            <Filters tags={tags} />
            <Article size="medium" color="semi-dark">
                <Header>
                    <Tags>{[{ id: "5", name: "Развитие сообщества" }]}</Tags>
                </Header>
                <Content>
                    <Title>
                        Напиши статью - внеси свой вклад в развитие сообщества
                    </Title>
                </Content>
                <Link href="/articles/10">Читать</Link>
            </Article>
            <Navigation />
            {articles.map(({ id, cover, tags, title, description }) => (
                <Article key={id} size="medium" cover={cover} color="semi-dark">
                    <Header>
                        <Tags>{tags}</Tags>
                    </Header>
                    <Content>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </Content>
                    <Link href={"/articles/" + id}>Читать</Link>
                </Article>
            ))}
        </>
    );
};
