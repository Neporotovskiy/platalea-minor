import React from "react";
import type { FC } from "react";

import styles from "./image.module.css";
import clsx from "clsx";

type Props = {
    src?: string;
    alt?: string;
    className?: string;
    [key: string]: unknown;
};

export const Image: FC<Props> = ({ src, alt, className, ...other }) => {
    const ref = React.createRef<HTMLImageElement>();
    const [visible, setVisibility] = React.useState(false);

    React.useEffect(() => {
        ref.current?.addEventListener(
            "load",
            () => {
                setVisibility(true);
            },
            { once: true },
        );
    }, [ref]);

    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={clsx(styles.image, className, {
                [styles.visible]: visible,
            })}
            {...other}
        />
    );
};
