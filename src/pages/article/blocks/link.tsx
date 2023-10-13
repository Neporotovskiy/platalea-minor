import React, { FC, ReactNode } from "react";

type Props = {
    children: ReactNode | ReactNode[];
};

export const Link: FC<Props> = ({ children, ...props }) => (
    <a {...props}>{children}</a>
);
