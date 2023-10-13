import React, { FC, ReactNode } from "react";

import { Text as UnderlyingTextComponent } from "components/text";

type Props = {
    children: ReactNode | ReactNode[];
};

export const Text: FC<Props> = ({ children, ...props }) => (
    <UnderlyingTextComponent size="medium" color="light">
        {children}
    </UnderlyingTextComponent>
);
