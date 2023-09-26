import React from "react";
import type { FC } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import { Tag } from "components/tag";

import styles from "./breadcrumbs.module.css";

type Breadcrumb = {
    href?: string;
    title: string;
};

type Props = {
    children: Breadcrumb[];
};

export const Breadcrumbs: FC<Props> = ({ children }) =>
    createPortal(
        <ul className={styles.breadcrumbs}>
            {children.map(({ href, title }) => (
                <li className={styles.breadcrumb} key={title}>
                    {href ? (
                        <Tag as={NavLink} to={href} color="light">
                            {title}
                        </Tag>
                    ) : (
                        <Tag color="light">{title}</Tag>
                    )}
                </li>
            ))}
        </ul>,
        window["breadcrumbs"],
    );
