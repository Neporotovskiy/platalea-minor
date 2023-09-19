import React from "react";
import type { FC } from "react";
import { useLoaderData } from "react-router-dom";

import { Navigation } from "features/navigation";
import { Article, Tags, Content, Link } from "features/article";

const Components: Record<string, FC<any>> = {
    article: ({ header, content, link: { title, ...link }, ...article }) => (
        <Article {...article}>
            {Array.isArray(header.tags) ? <Tags>{header.tags}</Tags> : null}
            <Content title={content.title} description={content.description} />
            <Link {...link}>{title}</Link>
        </Article>
    ),
    navigation: ({ links }) => <Navigation>{links}</Navigation>,
};

export const Homepage = () => {
    const structure: any = useLoaderData();
    return (
        <>
            {structure.map(({ type, ...other }: any, index: number) => {
                const Component = Components[type];
                return <Component key={index + type} {...other} />;
            })}
        </>
    );
};
