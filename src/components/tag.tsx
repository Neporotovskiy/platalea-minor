import React from "react";
import type { JSX, FunctionComponent, FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./tag.module.css";

export type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    color: "dark" | "semi-dark" | "semi-light" | "light";
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Tag: FC<Props> = ({
    as = "span",
    color,
    className,
    children,
    ...other
}) =>
    React.createElement(
        as,
        { className: clsx(styles.tag, styles[color], className), ...other },
        children,
    );
