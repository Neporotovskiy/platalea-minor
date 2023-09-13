import React from "react";
import type { JSX, FunctionComponent, ReactNode, FC } from "react";
import clsx from "clsx";

import styles from "./widget.module.css";

type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    size?: "medium" | "large";
    color?: "dark" | "semi-dark" | "light";
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Widget: FC<Props> = ({
    as = "div",
    size,
    color,
    children,
    className,
    ...props
}) =>
    React.createElement(
        as,
        {
            className: clsx(
                styles.widget,
                size && styles[size],
                color && styles[color],
                className,
            ),
            ...props,
        },
        children,
    );
