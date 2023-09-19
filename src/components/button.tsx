import React from "react";
import clsx from "clsx";
import type { JSX, FunctionComponent, FC, ReactNode } from "react";

import styles from "./button.module.css";

type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    className?: string;
    color: "dark" | "semi-dark" | "light";
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Button: FC<Props> = ({
    as = "button",
    className,
    color,
    children,
    ...other
}) =>
    React.createElement(
        as,
        {
            className: clsx(styles.button, styles[color], className),
            ...other,
        },
        children,
        <svg
            width="7"
            height="24"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.5 1L6.5 6L1.5 11"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="bevel"
            />
        </svg>,
    );
