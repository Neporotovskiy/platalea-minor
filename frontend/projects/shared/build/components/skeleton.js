import React from "react";
import clsx from "clsx";
import "./skeleton.css";
export const Skeleton = ({ width, height, className, ...other }) => (React.createElement("div", { className: clsx("skeleton", className), style: { width, height }, ...other }));
