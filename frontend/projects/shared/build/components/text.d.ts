import type { JSX, FunctionComponent, FC, ReactNode } from "react";
import "./text.css";
type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    size: "small" | "medium" | "large";
    color: "dark" | "semi-dark" | "semi-light" | "light";
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};
export declare const Text: FC<Props>;
export {};
