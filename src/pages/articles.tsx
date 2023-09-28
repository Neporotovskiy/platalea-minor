import React from "react";
import { useLoaderData } from "react-router-dom";

import { Article, Header, Content, Title, Link, Tags } from "features/article";
import { Navigation } from "features/navigation";
import { Breadcrumbs } from "features/breadcrumbs";

import { Button } from "components/button";
import { Tag } from "components/tag";
import { SearchField } from "components/search-field";
import { DropdownList, type Option } from "components/dropdown-list";

import type { Article as ArticleType, Tag as TagType } from "types/article";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

const DEFAULT_TAG = {
    value: "",
    label: "Поиск по метке",
};

const DEFAULT_ORDER = {
    value: "",
    label: "Сортировка",
};

export const Articles = () => {
    const data = useLoaderData() as ArticlesData;
    const [search, setSearch] = React.useState<string>("");
    const [tag, setTag] = React.useState<Option>(DEFAULT_TAG);
    const [order, setOrder] = React.useState<Option>(DEFAULT_ORDER);

    const clearSearch = () => {
        setSearch("");
    };

    const clearTag = () => {
        setTag(DEFAULT_TAG);
    };

    const clearOrder = () => {
        setOrder(DEFAULT_ORDER);
    };

    const prepareURLString = () => {
        const query = new URLSearchParams();
        if (search !== "") query.set("search", search);
        if (tag.value !== "") query.set("tags", tag.value);
        if (order.value !== "") query.set("order", order.value);
        console.log(query.toString());
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
                    <SearchField
                        type="text"
                        placeholder="Поиск по названию"
                        value={search}
                        onChange={setSearch}
                        onClear={clearSearch}
                    />
                    <DropdownList
                        selected={tag}
                        onChange={setTag}
                        onClear={clearTag}
                    >
                        {data.tags.map(({ id, name }) => ({
                            value: id,
                            label: name,
                        }))}
                    </DropdownList>
                    <DropdownList
                        selected={order}
                        onChange={setOrder}
                        onClear={clearOrder}
                    >
                        {[
                            { value: "asc", label: "Самые свежие" },
                            { value: "desc", label: "Самые старые" },
                        ]}
                    </DropdownList>
                </Content>
                <Button color="light" onClick={prepareURLString}>
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
        </>
    );
};
