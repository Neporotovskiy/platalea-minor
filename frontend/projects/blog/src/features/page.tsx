import React from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "features/navigation";

type Props = {
    name: string;
    children: React.ReactNode | React.ReactNode[];
};

export const Page = ({ name, children }: Props) => {
    const { key } = useLocation();

    React.useEffect(() => {
        document.title = name;
    }, [name]);

    React.useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [key]);

    return (
        <>
            <Navigation />
            {children}
        </>
    );
};
