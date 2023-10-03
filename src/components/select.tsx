import React, { FC, OptionHTMLAttributes } from "react";
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

/*
TODO: Добавить обработку переполнения в кнопку вызова выпадающего списка
TODO: Добавить возможность выбирать несколько значений
*/
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

    const close = () => {
        setOpened(false);
    };

    const handle = (value: string) => () => {
        onChange(value);
        close();
    };

    const ref = useClickAway<HTMLDivElement>(close);

    const fulfilled = value !== "";

    return (
        <div className={styles.container} ref={ref}>
            <button
                onClick={toggle}
                className={clsx(styles.trigger, {
                    [styles.opened]: opened,
                    [styles.fulfilled]: fulfilled,
                })}
            >
                <Text size="medium" color="light">
                    {selected?.label ?? placeholder}
                </Text>
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
            {opened && (
                <ul className={clsx(styles.dropdown, "scrollable")}>
                    <li onClick={handle("")}>
                        <Text
                            as="button"
                            size="medium"
                            className={styles.option}
                        >
                            -- Очистить --
                        </Text>
                    </li>
                    {children.map(({ value, label }) => (
                        <li key={label} onClick={handle(value)}>
                            <Text
                                as="button"
                                size="medium"
                                className={clsx(styles.option, {
                                    [styles.selected]:
                                        value === selected?.value,
                                })}
                            >
                                {label}
                            </Text>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
