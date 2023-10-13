import React, { FC, ReactNode } from "react";

type Props = {
    children: ReactNode | ReactNode[];
};

export const Paragraph: FC<Props> = ({ children, ...props }) => (
    <p {...props}>{children}</p>
);
