import React from "react";
import clsx from "clsx";
import type { FunctionComponent, JSX } from "react";
import type { FC, ReactNode } from "react";

import { Text } from "./text";

import "./button.css";

type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    color: "semi-dark" | "light";
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};

export const Button: FC<Props> = ({
    as = "button",
    color,
    className,
    children,
    ...other
}) =>
    React.createElement(
        as,
        {
            className: clsx("button", "button_" + color, className),
            ...other,
        },
        <Text size="small" color="light" className="button__label">
            {children}
        </Text>,
        <span className="button__icon">
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
            </svg>
        </span>,
    );
