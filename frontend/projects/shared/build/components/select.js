import React from "react";
import clsx from "clsx";
import { useClickAway } from "../hooks/use-click-away";
import { Text } from "./text";
import "./select.css";
export const Select = ({ value, onChange, placeholder, children, }) => {
    const [opened, setOpened] = React.useState(false);
    const selected = React.useMemo(() => children.find((option) => option.value === value), [children, value]);
    const toggle = () => {
        setOpened((value) => !value);
    };
    const close = React.useCallback(() => {
        setOpened(false);
    }, [setOpened]);
    const handle = (value) => () => {
        onChange(value);
        close();
    };
    const ref = useClickAway(close);
    const fulfilled = value !== "";
    return (React.createElement("div", { className: "select", ref: ref },
        React.createElement("div", { className: clsx("controls", {
                controls_opened: opened,
                controls_fulfilled: fulfilled,
            }) },
            React.createElement("button", { onClick: toggle, className: "toggle" },
                React.createElement("span", { className: "label" },
                    React.createElement(Text, { size: "small", color: "light", className: "text" }, selected?.label ?? placeholder)),
                React.createElement("span", { className: "icon" },
                    React.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M11 1.5L6 6.5L1 1.5", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "bevel" })))),
            fulfilled && (React.createElement("button", { onClick: handle(""), className: "clear" },
                React.createElement("span", { className: "icon" },
                    React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.70662 5L9.59616 1.11046L8.88905 0.403353L4.99951 4.29289L1.11088 0.404259L0.403771 1.11137L4.2924 5L0.403771 8.88863L1.11088 9.59574L4.99951 5.70711L8.88905 9.59665L9.59616 8.88954L5.70662 5Z", fill: "currentColor" })))))),
        opened && (React.createElement("ul", { className: clsx("options", "scrollable") }, children.map(({ value, label }) => (React.createElement(Text, { as: "li", key: label, size: "small", color: "dark", className: clsx("option", {
                option_selected: value === selected?.value,
            }), onClick: handle(value) }, label)))))));
};
export const MultiSelect = ({ values, onChange, placeholder, children, }) => {
    const [opened, setOpened] = React.useState(false);
    const selected = React.useMemo(() => children.filter(({ value }) => values.includes(value)), [children, values]);
    const toggle = () => {
        setOpened((value) => !value);
    };
    const close = React.useCallback(() => {
        setOpened(false);
    }, [setOpened]);
    const clear = () => {
        onChange([]);
        close();
    };
    const handle = (remove, selected) => () => {
        let updated;
        if (remove) {
            updated = values.filter((value) => value !== selected);
        }
        else {
            updated = [...values, selected];
        }
        onChange(updated);
        close();
    };
    const ref = useClickAway(close);
    const fulfilled = values.length > 0;
    return (React.createElement("div", { className: "select", ref: ref },
        React.createElement("div", { className: clsx("controls", {
                controls_opened: opened,
                controls_fulfilled: fulfilled,
            }) },
            React.createElement("button", { onClick: toggle, className: "toggle" },
                React.createElement("span", { className: "label" },
                    React.createElement(Text, { size: "small", color: "light", className: "text" }, selected.length > 0
                        ? selected.map(({ label }) => label).join(", ")
                        : placeholder)),
                React.createElement("span", { className: "icon" },
                    React.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M11 1.5L6 6.5L1 1.5", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "bevel" })))),
            fulfilled && (React.createElement("button", { onClick: clear, className: "clear" },
                React.createElement("span", { className: "icon" },
                    React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.70662 5L9.59616 1.11046L8.88905 0.403353L4.99951 4.29289L1.11088 0.404259L0.403771 1.11137L4.2924 5L0.403771 8.88863L1.11088 9.59574L4.99951 5.70711L8.88905 9.59665L9.59616 8.88954L5.70662 5Z", fill: "currentColor" })))))),
        opened && (React.createElement("ul", { className: clsx("options", "scrollable") }, children.map(({ value, label }) => {
            const selected = values.includes(value);
            return (React.createElement(Text, { as: "li", key: label, size: "small", color: "dark", className: clsx("option", {
                    option_selected: selected,
                }), onClick: handle(selected, value) }, label));
        })))));
};
