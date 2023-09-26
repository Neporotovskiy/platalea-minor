import React from "react";
import { useLoaderData } from "react-router-dom";

import { Article, Header, Content, Title, Link, Tags } from "features/article";
import { Navigation } from "features/navigation";
import { Breadcrumbs } from "features/breadcrumbs";

import { Button } from "components/button";
import { Tag } from "components/tag";
import { SearchField } from "components/search-field";
import { DropdownList } from "components/dropdown-list";

import type { Article as ArticleType, Tag as TagType } from "types/article";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

export const Articles = () => {
    const { tags, articles } = useLoaderData() as ArticlesData;
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
                    <SearchField
                        type="text"
                        placeholder="Поиск по названию"
                        onChange={console.log}
                    />
                    <DropdownList
                        selected={{ value: "", label: "Поиск по метке" }}
                        onChange={console.log}
                    >
                        {[
                            { value: "0", label: "Об игре" },
                            { value: "1", label: "Тактика" },
                            { value: "2", label: "Коммуникация" },
                            { value: "3", label: "Основы" },
                            { value: "4", label: "Чат" },
                            { value: "5", label: "Развитие сообщества" },
                        ]}
                    </DropdownList>
                    <DropdownList
                        selected={{ value: "", label: "Сортировка" }}
                        onChange={console.log}
                    >
                        {[
                            { value: "asc", label: "Самые свежие" },
                            { value: "desc", label: "Самые старые" },
                        ]}
                    </DropdownList>
                </Content>
                <Button color="light">Применить</Button>
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
        </>
    );
};
