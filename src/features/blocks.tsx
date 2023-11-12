import React from "react";
import type { FC, ReactNode } from "react";

import { Image } from "components/image";
import { Text } from "components/text";

import { Content, Blocks } from "types/article";

import styles from "./blocks.module.css";

export const BLOCKS: Record<Blocks, FC<any>> = {
    header: ({ children, ...props }) => (
        <Text
            as="h2"
            size="medium"
            color="light"
            {...props}
            className={styles.header}
        >
            {props.id === undefined ? (
                children
            ) : (
                <a href={"#" + props.id}>{children}</a>
            )}
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
    picture: ({ nodeID, children: _, alt, ...props }) => {
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
            <>
                <Image
                    alt={alt}
                    width="710"
                    height="400"
                    onClick={open}
                    className={styles.picture}
                    {...props}
                />
                <dialog
                    ref={ref}
                    onClick={close}
                    onClose={restoreScroll}
                    className={styles.preview}
                >
                    <Image {...props} alt={alt} className={styles.picture} />
                </dialog>
            </>
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
        { ...properties, key: id, "data-nodeid": id },
        children.map((child) =>
            typeof child === "string" ? child : renderer(child),
        ),
    );
};
