import React from "react";
import type { FC, ReactNode } from "react";
import clsx from "clsx";

import { Widget } from "components/widget";
import { Image } from "components/image";

import styles from "./card.module.css";

export const Card: FC<{
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
}> = ({ cover, children, ...other }) => {
    return (
        <Widget as="article" {...other}>
            {children}
        </Widget>
    );
};

export const Cover: FC<{
    src: string;
    alt: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
}> = ({ src, alt, children }) => (
    <div className={styles.cover}>
        <Image src={src} alt={alt} />
        <div className={styles.overlay}>{children}</div>
    </div>
);

export const Header: FC<{
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
}> = ({ className, children, ...other }) => (
    <header className={clsx(styles.header, className)} {...other}>
        {children}
    </header>
);

export const Content: FC<{
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
}> = ({ className, children, ...other }) => (
    <section className={clsx(styles.content, className)} {...other}>
        {children}
    </section>
);
