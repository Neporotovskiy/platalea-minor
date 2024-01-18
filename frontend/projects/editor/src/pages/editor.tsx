import { Text } from "shared/build/components/text";
import { Tag } from "shared/build/components/tag";
import { useDocumentTitle } from "shared/build/hooks/use-document-title";

import styles from "./editor.module.css";

export const Editor = () => {
    useDocumentTitle("Создание новой статьи");

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className={styles.tags}>
                    <Tag color="semi-dark">Теги статьи</Tag>
                </div>
                <Text
                    as="h1"
                    color="light"
                    size="large"
                    className={styles.title}
                >
                    Заголовок статьи
                </Text>
                <Text
                    as="h2"
                    color="light"
                    size="small"
                    className={styles.description}
                >
                    Опциональное описание статьи
                </Text>
                <div className={styles.cover} />
            </header>
            <section className={styles.content}>
                <Text as="p" color="light" size="small">
                    Содержимое параграфа
                </Text>
            </section>
        </article>
    );
};
