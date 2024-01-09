import React from "react";
import clsx from "clsx";
import type { JSX, FunctionComponent, FC, ReactNode } from "react";

import "./tag.css";

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
        { className: clsx("tag", "tag_" + color, className), ...other },
        children,
    );
