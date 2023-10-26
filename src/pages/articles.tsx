import React from "react";
import { useLoaderData } from "react-router-dom";

import { Filters } from "features/filters";

import type { Article as ArticleType, Tag as TagType } from "types/article";

type ArticlesData = {
    tags: TagType[];
    articles: ArticleType[];
};

export const Articles = () => {
    const { tags /*articles*/ } = useLoaderData() as ArticlesData;

    return (
        <>
            <Filters tags={tags} />
        </>
    );
};
