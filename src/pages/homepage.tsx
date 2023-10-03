import React from "react";
import { useLoaderData } from "react-router-dom";

import { Navigation } from "features/navigation";
import {
    Article,
    Header,
    Tags,
    Content,
    Title,
    Description,
    Link,
} from "features/article";

import { DocumentTitle } from "components/document-title";

import type { Article as ArticleType } from "types/article";

type HomepageData = {
    featured: ArticleType;
    articles: ArticleType[];
};

export const Homepage = () => {
    const { featured, articles } = useLoaderData() as HomepageData;

    return (
        <>
            <DocumentTitle>GSF - Главная</DocumentTitle>
            <Article size="large" color="semi-dark" cover={featured.cover}>
                <Header>
                    <Tags>{featured.tags}</Tags>
                </Header>
                <Content>
                    <Title>{featured.title}</Title>
                    <Description>{featured.description}</Description>
                </Content>
                <Link href={"/articles/" + featured.id}>Читать</Link>
            </Article>
            <Navigation />
            {articles.map(({ id, title, description, cover, tags }) => (
                <Article key={id} size="medium" color="semi-dark" cover={cover}>
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
