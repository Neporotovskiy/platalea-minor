import type { FunctionComponent, JSX } from "react";
import type { FC, ReactNode } from "react";
import "./button.css";
type Props = {
    as?: keyof JSX.IntrinsicElements | FunctionComponent<any>;
    color: "semi-dark" | "light";
    className?: string;
    children: ReactNode | ReactNode[];
    [key: string]: unknown;
};
export declare const Button: FC<Props>;
export {};
