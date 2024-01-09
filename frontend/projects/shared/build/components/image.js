import React from "react";
import clsx from "clsx";
import "./image.css";
export const Image = ({ src, alt, width, height, className, ...other }) => {
    const [visible, setVisibility] = React.useState(false);
    React.useEffect(() => {
        const image = new window.Image(width, height);
        image.src = src;
        image.onload = () => {
            setVisibility(true);
        };
    }, [width, height, src]);
    if (!src)
        return null;
    return (React.createElement("img", { src: src, alt: alt, width: width, height: height, className: clsx("image", className, {
            image_visible: visible,
        }), ...other }));
};
