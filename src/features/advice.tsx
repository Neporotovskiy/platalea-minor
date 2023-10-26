import React from "react";

import { Tag } from "components/tag";
import { Text } from "components/text";

import styles from "./advice.module.css";

export const Advice = () => (
    <section className={styles.advice}>
        <Tag color="dark">Совет</Tag>
        <Text as="p" size="medium" color="light">
            Напиши собственную статью - внеси свой вклад в развитие сообщества и
            получи награду
        </Text>
    </section>
);
