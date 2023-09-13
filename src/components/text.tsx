import React from "react";
import type { JSX, FunctionComponent, FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./text.module.css";

type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    size?: "medium" | "large";
    color?: "dark" | "light";
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Text: FC<Props> = ({
    as = "span",
    size,
    color,
    className,
    children,
    ...other
}: any) => {
    return React.createElement(
        as,
        {
            className: clsx(
                styles.text,
                styles[size],
                styles[color],
                className,
            ),
            ...other,
        },
        children,
    );
};
