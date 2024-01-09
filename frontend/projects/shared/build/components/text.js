import React from "react";
import clsx from "clsx";
import "./text.css";
export const Text = ({ as = "span", size, color, className, children, ...other }) => {
    return React.createElement(as, {
        className: clsx("text", "text_" + size, "text_" + color, className),
        ...other,
    }, children);
};
