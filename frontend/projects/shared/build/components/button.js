import React from "react";
import clsx from "clsx";
import { Text } from "./text";
import "./button.css";
export const Button = ({ as = "button", color, className, children, ...other }) => React.createElement(as, {
    className: clsx("button", "button_" + color, className),
    ...other,
}, React.createElement(Text, { size: "small", color: "light", className: "button__label" }, children), React.createElement("span", { className: "button__icon" },
    React.createElement("svg", { width: "7", height: "24", viewBox: "0 0 7 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.5 1L6.5 6L1.5 11", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "bevel" }))));
