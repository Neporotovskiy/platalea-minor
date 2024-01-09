import React from "react";
import { Text } from "./text";
import "./error.css";
export const Error = ({ message, description }) => {
    return (React.createElement("section", { className: "error" },
        React.createElement(Text, { as: "h2", size: "medium", color: "light" }, message),
        React.createElement(Text, { as: "p", size: "small", color: "light" }, description)));
};
