import React from "react";
import type { ReactNode } from "react";

import { Navigation } from "features/navigation";
import { Advice } from "features/advice";

import styles from "./page.module.css";

type Props = {
    name: string;
    children: ReactNode | ReactNode[];
};

export const Page = ({ name, children }: Props) => {
    React.useEffect(() => {
        document.title = name;
    }, [name]);

    return (
        <>
            <aside className={styles.sidebar}>
                <Navigation />
                <Advice />
            </aside>
            <main className={styles.content}>{children}</main>
        </>
    );
};
