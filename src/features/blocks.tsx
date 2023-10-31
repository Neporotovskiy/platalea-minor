import React from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Image } from "components/image";
import { Text } from "components/text";

import { Content, Blocks } from "types/article";

export const BLOCKS: Record<Blocks, FC<any>> = {
    header: ({ children, ...props }) => (
        <Text as="h2" size="medium" color="light" {...props}>
            {children}
        </Text>
    ),
    paragraph: ({ children, ...props }) => (
        <Text as="p" size="medium" color="light" {...props}>
            {children}
        </Text>
    ),
    text: ({ children, ...props }) => (
        <Text size="medium" color="light" {...props}>
            {children}
        </Text>
    ),
    link: ({ children, ...props }) => (
        <Text as={Link} size="medium" color="light" {...props}>
            {children}
        </Text>
    ),
    picture: ({ children: _, alt, ...props }) => (
        <Image {...props} style={{ height: "auto" }} alt={alt} />
    ),
};

export const renderer = ({
    id,
    type,
    properties,
    children,
}: Content): ReactNode => {
    return React.createElement(
        BLOCKS[type],
        { ...properties, key: id },
        children.map((child) =>
            typeof child === "string" ? child : renderer(child),
        ),
    );
};
