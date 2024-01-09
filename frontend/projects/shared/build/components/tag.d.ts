import type { JSX, FunctionComponent, FC, ReactNode } from "react";
import "./tag.css";
export type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    color: "dark" | "semi-dark" | "semi-light" | "light";
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};
export declare const Tag: FC<Props>;
