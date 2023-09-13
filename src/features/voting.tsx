import React from "react";
import type { FC } from "react";

import { Card, Header, Content } from "components/card";
import { Tag } from "components/tag";
import { Text } from "components/text";

import styles from "./voting.module.css";

type Variant = {
    id: number;
    name: string;
    percent: number;
    selected: boolean;
};

type Props = {
    id: number;
    description: string;
    variants: Variant[];
    onVote: (voteId: Props["id"], variantId: Variant["id"]) => void;
};

export const Voting: FC<Props> = ({ id, description, variants, onVote }) => (
    <Card size="medium" color="light">
        <Header>
            <Tag color="dark">Голосование</Tag>
        </Header>
        <Content>
            <Text as="p">{description}</Text>
            {variants.map((variant) => (
                <button
                    key={variant.id}
                    disabled={variant.selected}
                    className={styles.variant}
                    onClick={() => {
                        onVote(id, variant.id);
                    }}
                >
                    <Text color="light">{variant.name}</Text>
                    {variant.selected ? (
                        <Text color="light">Принято</Text>
                    ) : (
                        <Text color="light">{variant.percent}%</Text>
                    )}
                </button>
            ))}
        </Content>
    </Card>
);
