import type { FC } from "react";
import "./search.css";
type Props = {
    value: string;
    onChange: (searchQuery: string) => void;
    className?: string;
    [key: string]: unknown;
};
export declare const Search: FC<Props>;
export {};
