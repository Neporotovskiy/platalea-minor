import React from "react";
import type { FC } from "react";
import { useSearchParams } from "react-router-dom";

import { Article, Content, Header } from "features/article";

import { Tag } from "components/tag";
import { Search } from "components/search";
import { Select } from "components/select";
import { Button } from "components/button";

import type { Tag as TagType } from "types/article";

type Props = {
    tags: TagType[];
};

type Params = {
    q?: string;
    t?: string;
    o?: string;
};

const get = (searchParams: URLSearchParams, name: string) =>
    searchParams.get(name) ?? "";

export const Filters: FC<Props> = ({ tags }) => {
    const [params, setParams] = useSearchParams(document.location.search);
    const [query, setQuery] = React.useState<string>(get(params, "q"));
    const [tag, setTag] = React.useState<string>(get(params, "t"));
    const [order, setOrder] = React.useState<string>(get(params, "o"));

    const applyFilters = () => {
        const result: Params = {};
        if (query) result["q"] = query;
        if (tag) result["t"] = tag;
        if (order) result["o"] = order;
        setParams(result);
    };

    React.useEffect(() => {
        setQuery(get(params, "q"));
        setTag(get(params, "t"));
        setOrder(get(params, "o"));
    }, [params]);

    return (
        <Article size="medium" color="semi-dark">
            <Header>
                <Tag color="light">Параметры поиска</Tag>
            </Header>
            <Content>
                <Search
                    type="text"
                    value={query}
                    onChange={setQuery}
                    placeholder="Поиск по названию"
                />
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
    );
};
