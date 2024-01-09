import type { FC } from "react";
import "./select.css";
type Option = {
    value: string;
    label: string;
};
type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    children: Option[];
};
export declare const Select: FC<Props>;
type MultiSelectProps = {
    values: string[];
    onChange: (values: string[]) => void;
    placeholder: string;
    children: Option[];
};
export declare const MultiSelect: FC<MultiSelectProps>;
export {};
