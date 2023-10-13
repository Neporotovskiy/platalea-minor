import React, { FC, ReactNode } from "react";

type Props = {
    children: ReactNode | ReactNode[];
};

export const Text: FC<Props> = ({ children, ...props }) => (
    <span {...props}>{children}</span>
);
