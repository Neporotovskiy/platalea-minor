import React from "react";
import clsx from "clsx";
import "./tag.css";
export const Tag = ({ as = "span", color, className, children, ...other }) => React.createElement(as, { className: clsx("tag", "tag_" + color, className), ...other }, children);
