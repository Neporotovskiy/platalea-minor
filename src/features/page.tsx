import React from "react";

import { Navigation } from "features/navigation";
import { Advice } from "features/advice";

import styles from "./page.module.css";

export const Page = ({ name, children }: any) => {
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
