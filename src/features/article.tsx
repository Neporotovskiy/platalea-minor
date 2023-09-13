import React from "react";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { Card, Header, Cover, Content } from "components/card";
import { Tag } from "components/tag";
import { Text } from "components/text";
import { Button } from "components/button";

type Props = {
    id: number;
    tags: Array<{ id?: number; name: string }>;
    title: string;
    description?: string;
    cover: string;
    size?: "medium" | "large";
};

export const Article: FC<Props> = ({
    id,
    tags,
    title,
    description,
    cover,
    size = "medium",
}) => (
    <Card size={size}>
        <Cover src={cover} alt="Иллюстрация статьи">
            <Header>
                {tags.map(({ id, name }) =>
                    id === undefined ? (
                        <Tag key={id} color="light">
                            {name}
                        </Tag>
                    ) : (
                        <Tag
                            as={NavLink}
                            to={"/articles?tags=" + id}
                            key={id}
                            color="light"
                        >
                            {name}
                        </Tag>
                    ),
                )}
            </Header>
            <Content>
                <Text as="h3" size="large" color="light">
                    {title}
                </Text>
                {description && (
                    <Text as="p" size="medium" color="light">
                        {description}
                    </Text>
                )}
            </Content>
            <Button as={NavLink} to={"/articles/" + id} color="light">
                Читать
            </Button>
        </Cover>
    </Card>
);
