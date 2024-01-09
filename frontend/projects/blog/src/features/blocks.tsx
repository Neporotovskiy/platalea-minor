import React from "react";
import type { FC, ReactNode } from "react";

import { Image } from "shared/build/components/image";
import { Text } from "shared/build/components/text";

import { Content, Blocks } from "types/article";

import styles from "./blocks.module.css";

export const BLOCKS: Record<Blocks, FC<any>> = {
    header: ({ id, children, ...props }) => (
        <Text
            as="h2"
            size="medium"
            color="light"
            id={id}
            className={styles.header}
            {...props}
        >
            <a href={"#" + id}>{children}</a>
        </Text>
    ),
    paragraph: ({ children, ...props }) => (
        <Text
            as="p"
            size="small"
            color="light"
            className={styles.paragraph}
            {...props}
        >
            {children}
        </Text>
    ),
    link: ({ children, ...props }) => (
        <Text as="a" size="small" color="light" {...props}>
            {children}
        </Text>
    ),
    picture: ({ caption, children: _, ...props }) => {
        const ref = React.createRef<HTMLDialogElement>();

        const open = () => {
            document.body.classList.add("no-scroll");
            ref.current?.showModal();
        };

        const close = () => {
            ref.current?.close();
        };

        const restoreScroll = () => {
            document.body.classList.remove("no-scroll");
        };

        return (
            <figure className={styles.figure}>
                <Image
                    width={710}
                    height={400}
                    onClick={open}
                    className={styles.image}
                    {...props}
                />
                <Text
                    as="figcaption"
                    size="small"
                    color="light"
                    className={styles.caption}
                >
                    {caption}
                </Text>
                <dialog
                    ref={ref}
                    onClick={close}
                    onClose={restoreScroll}
                    className={styles.preview}
                >
                    <Image {...props} className={styles.image} />
                </dialog>
            </figure>
        );
    },
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
