import type { FC } from "react";
import "./image.css";
type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    [key: string]: unknown;
};
export declare const Image: FC<Props>;
export {};
