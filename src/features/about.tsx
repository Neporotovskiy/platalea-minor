import React from "react";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { Card, Header, Cover, Content } from "components/card";
import { Tag } from "components/tag";
import { Text } from "components/text";
import { Button } from "components/button";

type Props = {
    coverURL: string;
    title: string;
    header: string;
    description: string;
    gameURL: string;
};

export const About: FC<Props> = ({
    coverURL,
    title,
    header,
    description,
    gameURL,
}) => (
    <Card size="large" color="semi-dark">
        <Cover src={coverURL} alt="Иллюстрация игры">
            <Header>
                <Tag color="light">{title}</Tag>
            </Header>
            <Content>
                <Text as="h3" size="large" color="light">
                    {header}
                </Text>
                <Text as="p" color="light">
                    {description}
                </Text>
            </Content>
            <Button as={NavLink} to={gameURL} color="light">
                Подробнее
            </Button>
        </Cover>
    </Card>
);
