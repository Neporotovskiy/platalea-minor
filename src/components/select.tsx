import React from "react";
import type { FC } from "react";
import clsx from "clsx";

import { Text } from "components/text";

import { useClickAway } from "hooks/use-click-away";

import styles from "./select.module.css";

type Option = { value: string; label: string };

type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    children: Option[];
};

export const Select: FC<Props> = ({
    value,
    onChange,
    placeholder,
    children,
}) => {
    const [opened, setOpened] = React.useState<boolean>(false);

    const selected = React.useMemo(
        () => children.find((option) => option.value === value),
        [children, value],
    );

    const toggle = () => {
        setOpened((value) => !value);
    };

    const close = React.useCallback(() => {
        setOpened(false);
    }, [setOpened]);

    const handle = (value: string) => () => {
        onChange(value);
        close();
    };

    const ref = useClickAway<HTMLDivElement>(close);

    const fulfilled = value !== "";

    return (
        <div className={styles.select} ref={ref}>
            <div
                className={clsx(styles.controls, {
                    [styles.opened]: opened,
                    [styles.fulfilled]: fulfilled,
                })}
            >
                <button onClick={toggle} className={styles.toggle}>
                    <span className={styles.label}>
                        <Text
                            size="medium"
                            color="light"
                            className={styles.text}
                        >
                            {selected?.label ?? placeholder}
                        </Text>
                    </span>
                    <span className={styles.icon}>
                        <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 1.5L6 6.5L1 1.5"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeLinejoin="bevel"
                            />
                        </svg>
                    </span>
                </button>
                {fulfilled && (
                    <button onClick={handle("")} className={styles.clear}>
                        <span className={styles.icon}>
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.70662 5L9.59616 1.11046L8.88905 0.403353L4.99951 4.29289L1.11088 0.404259L0.403771 1.11137L4.2924 5L0.403771 8.88863L1.11088 9.59574L4.99951 5.70711L8.88905 9.59665L9.59616 8.88954L5.70662 5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </button>
                )}
            </div>
            {opened && (
                <ul className={clsx(styles.options, "scrollable")}>
                    {children.map(({ value, label }) => (
                        <Text
                            as="li"
                            key={label}
                            size="medium"
                            color="dark"
                            className={clsx(styles.option, {
                                [styles.selected]: value === selected?.value,
                            })}
                            onClick={handle(value)}
                        >
                            {label}
                        </Text>
                    ))}
                </ul>
            )}
        </div>
    );
};
