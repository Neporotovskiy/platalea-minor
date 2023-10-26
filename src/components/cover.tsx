import React from "react";
import clsx from "clsx";

import { Image } from "components/image";

import styles from "./cover.module.css";

export const Cover = ({ src, alt, className, children }: any) => (
    <div className={styles.cover}>
        <Image src={src} alt={alt} />
        <div className={clsx(styles.content, className)}>{children}</div>
    </div>
);
