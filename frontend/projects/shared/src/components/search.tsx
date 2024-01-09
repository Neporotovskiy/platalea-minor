import React from "react";
import type { FC, ChangeEvent } from "react";
import clsx from "clsx";

import { useDebouncedValue } from "../hooks/use-debounced-value";

import "./search.css";

type Props = {
    value: string;
    onChange: (searchQuery: string) => void;
    className?: string;
    [key: string]: unknown;
};

export const Search: FC<Props> = ({ className, value, onChange, ...other }) => {
    const [query, setQuery] = React.useState<string>(value);

    const dQuery = useDebouncedValue(query, 500);

    React.useEffect(() => {
        onChange(dQuery);
    }, [dQuery]);

    React.useEffect(() => {
        setQuery(value);
    }, [value]);

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <label
            className={clsx("search", {
                search_fulfilled: value !== "",
            })}
        >
            <input
                type="text"
                value={query}
                onChange={handler}
                className={clsx("input", className)}
                {...other}
            />
            <span className="icon">
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
            </span>
        </label>
    );
};
