import React from "react";
import clsx from "clsx";
import type { JSX, FunctionComponent, FC, ReactNode } from "react";

import "./text.css";

type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    size: "small" | "medium" | "large";
    color: "dark" | "semi-dark" | "semi-light" | "light";
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
}) => {
    return React.createElement(
        as,
        {
            className: clsx("text", "text_" + size, "text_" + color, className),
            ...other,
        },
        children,
    );
};
