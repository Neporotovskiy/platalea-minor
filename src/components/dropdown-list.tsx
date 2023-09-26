import React, { FC } from "react";
import clsx from "clsx";

import { Text } from "components/text";
import { useClickAway } from "hooks/use-click-away";

import styles from "./dropdown-list.module.css";

type Option = {
    value: string | number | boolean | null | undefined;
    label: string;
};

type Props = {
    selected: Option;
    onChange: (selected: Option) => void;
    children: Option[];
};

export const DropdownList: FC<Props> = ({ selected, onChange, children }) => {
    const [opened, setOpened] = React.useState<boolean>(false);

    const toggle = () => {
        setOpened((value) => !value);
    };

    const close = () => {
        setOpened(false);
    };

    const ref = useClickAway<HTMLDivElement>(close);

    const getChangeHandler = (option: Option) => () => {
        onChange(option);
        close();
    };

    return (
        <div className={styles.cointainer} ref={ref}>
            <button className={styles.button} onClick={toggle}>
                <Text size="medium" color="light">
                    {selected.label}
                </Text>
                <span
                    className={clsx(styles.icon, { [styles.active]: opened })}
                >
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
            {opened ? (
                <ul className={clsx(styles.dropdown, "scrollable")}>
                    {children.map((option) => (
                        <li key={option.label}>
                            <Text
                                as="button"
                                size="medium"
                                className={clsx(styles.option, {
                                    [styles.selected]:
                                        option.value === selected.value,
                                })}
                                onClick={getChangeHandler(option)}
                            >
                                {option.label}
                            </Text>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};
