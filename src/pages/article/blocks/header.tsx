import React, { FC, ReactNode } from "react";

type Props = {
    children: ReactNode | ReactNode[];
};

export const Header: FC<Props> = ({ children, ...props }) => (
    <h2 {...props}>{children}</h2>
);
