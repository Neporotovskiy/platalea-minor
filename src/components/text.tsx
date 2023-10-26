import React from "react";
import clsx from "clsx";
import type { JSX, FunctionComponent, FC, ReactNode } from "react";

import styles from "./text.module.css";

type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    size: "medium" | "large";
    color: "dark" | "light";
    uppercase?: boolean;
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Text: FC<Props> = ({
    as = "span",
    size,
    color,
    uppercase,
    className,
    children,
    ...other
}) => {
    return React.createElement(
        as,
        {
            className: clsx(
                styles.text,
                styles[size as string],
                styles[color as string],
                uppercase && styles.uppercase,
                className,
            ),
            ...other,
        },
        children,
    );
};
