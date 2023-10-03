import React from "react";
import type { FC } from "react";

type Props = {
    children: string;
};

export const DocumentTitle: FC<Props> = ({ children }) => {
    React.useEffect(() => {
        document.title = children;
    }, [children]);
    return null;
};
