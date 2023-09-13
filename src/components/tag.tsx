import React from "react";
import type { JSX, FunctionComponent, FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./tag.module.css";

type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    className?: string;
    color: "dark" | "light";
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Tag: FC<Props> = ({
    as = "span",
    className,
    color,
    children,
    ...other
}) =>
    React.createElement(
        as,
        { className: clsx(styles.tag, styles[color], className), ...other },
        children,
    );
