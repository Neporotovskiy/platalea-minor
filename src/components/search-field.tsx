import React, { ChangeEvent } from "react";
import type { FC } from "react";
import clsx from "clsx";

import styles from "./search-field.module.css";

type Props = {
    className?: string;
    value?: string;
    onChange: (searchQuery: string) => void;
    onClear: VoidFunction;
    [key: string]: unknown;
};

export const SearchField: FC<Props> = ({
    className,
    value,
    onChange,
    onClear,
    ...other
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles.field}>
            <input
                id="search-field"
                type="text"
                value={value}
                onChange={handleChange}
                className={clsx(styles.input, className)}
                {...other}
            />
            {value === "" ? (
                <label htmlFor="search-field" className={styles.button}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.7646 8.38231C15.7646 12.4594 12.4594 15.7645 8.38234 15.7645C4.30525 15.7645 1.00012 12.4594 1.00012 8.38231C1.00012 4.30524 4.30525 1.00012 8.38234 1.00012C12.4594 1.00012 15.7646 4.30524 15.7646 8.38231ZM13.9454 14.6525C12.4655 15.9665 10.5171 16.7645 8.38234 16.7645C3.75297 16.7645 0.00012207 13.0117 0.00012207 8.38231C0.00012207 3.75296 3.75297 0.00012207 8.38234 0.00012207C13.0117 0.00012207 16.7646 3.75296 16.7646 8.38231C16.7646 10.5171 15.9665 12.4655 14.6525 13.9454L19.3534 18.6463C19.5487 18.8416 19.5487 19.1581 19.3534 19.3534C19.1581 19.5487 18.8416 19.5487 18.6463 19.3534L13.9454 14.6525Z"
                            fill="currentColor"
                        />
                    </svg>
                </label>
            ) : (
                <button className={styles.button} onClick={onClear}>
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
        </div>
    );
};
