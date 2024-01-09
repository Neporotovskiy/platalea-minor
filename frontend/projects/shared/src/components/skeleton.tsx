import React from "react";
import clsx from "clsx";

import "./skeleton.css";

type Props = {
    width: string;
    height: string;
    className?: string;
};

export const Skeleton = ({ width, height, className, ...other }: Props) => (
    <div
        className={clsx("skeleton", className)}
        style={{ width, height }}
        {...other}
    />
);
