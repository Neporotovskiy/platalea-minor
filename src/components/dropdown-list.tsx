import React, { FC } from "react";
import clsx from "clsx";

import { Text } from "components/text";
import { useClickAway } from "hooks/use-click-away";

import styles from "./dropdown-list.module.css";

export type Option = {
    value: string;
    label: string;
};

type Props = {
    selected: Option;
    onChange: (selected: Option) => void;
    onClear: VoidFunction;
    children: Option[];
};

/*
TODO: Добавить обработку переполнения в кнопку вызова выпадающего списка
TODO: Добавить возможность выбирать несколько значений
*/
export const DropdownList: FC<Props> = ({
    selected,
    onChange,
    onClear,
    children,
}) => {
    const [opened, setOpened] = React.useState<boolean>(false);

    const toggle = () => {
        setOpened((value) => !value);
    };

    const close = () => {
        setOpened(false);
    };

    const ref = useClickAway<HTMLButtonElement>(close);

    const getChangeHandler = (option: Option) => () => {
        onChange(option);
        close();
    };

    return (
        <div className={styles.container}>
            <div className={styles.trigger}>
                <Text size="medium" color="light">
                    {selected.label}
                </Text>
                <div className={styles.buttons}>
                    {selected.value === "" ? null : (
                        <button onClick={onClear} className={styles.button}>
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
                        </button>
                    )}
                    <button
                        ref={ref}
                        onClick={toggle}
                        className={clsx(styles.button, {
                            [styles.opened]: opened,
                        })}
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
                    </button>
                </div>
            </div>
            {opened ? (
                <ul className={clsx(styles.dropdown, "scrollable")}>
                    {children.map((option) => (
                        <li key={option.label}>
                            <Text
                                as="button"
                                size="medium"
                                onClick={getChangeHandler(option)}
                                className={clsx(styles.option, {
                                    [styles.selected]:
                                        option.value === selected.value,
                                })}
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
