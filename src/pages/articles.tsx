import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

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

import { Button } from "components/button";
import { Tag } from "components/tag";
import { Search } from "components/search";
import { Select } from "components/select";

import type { Article as ArticleType, Tag as TagType } from "types/article";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
    params: {
        search: string;
        tag: string;
        order: string;
    };
};

export const Articles = () => {
    const data = useLoaderData() as ArticlesData;
    const [search, setSearch] = React.useState<string>(data.params.search);
    const [tag, setTag] = React.useState<string>(data.params.tag);
    const [order, setOrder] = React.useState<string>(data.params.order);
    const navigate = useNavigate();

    const applyFilters = () => {
        const query = new URLSearchParams();
        if (search !== "") query.set("search", search);
        if (tag !== "") query.set("tag", tag);
        if (order !== "") query.set("order", order);
        const url = query.toString();
        navigate("?" + url);
    };

    return (
        <>
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
            <Article size="medium" color="semi-dark">
                <Header>
                    <Tag color="light">Параметры поиска</Tag>
                </Header>
                <Content>
                    <Search
                        type="text"
                        value={search}
                        onChange={setSearch}
                        placeholder="Поиск по названию"
                    />
                    <Select
                        value={tag}
                        onChange={setTag}
                        placeholder="Поиск по метке"
                    >
                        {data.tags.map(({ id, name }) => ({
                            value: id,
                            label: name,
                        }))}
                    </Select>
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
                </Content>
                <Button color="light" onClick={applyFilters}>
                    Применить
                </Button>
            </Article>
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
            {data.articles.map(({ id, cover, tags, title, description }) => (
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
