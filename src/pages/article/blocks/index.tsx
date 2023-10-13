import React from "react";
import type { FC, ReactNode } from "react";

import { Content, Blocks } from "types/article";

import { Paragraph } from "./paragraph";
import { Header } from "./header";
import { Picture } from "./picture";
import { Text } from "./text";
import { Link } from "./link";

export const BLOCKS: Record<Blocks, FC<any>> = {
    paragraph: Paragraph,
    header: Header,
    picture: Picture,
    text: Text,
    link: Link,
};

export const renderer = ({
    id,
    type,
    attributes,
    children,
}: Content): ReactNode => {
    return React.createElement(
        BLOCKS[type],
        { ...attributes, key: id },
        children.map((child) =>
            typeof child === "string" ? child : renderer(child),
        ),
    );
};
