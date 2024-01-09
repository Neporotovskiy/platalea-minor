import React from "react";

export const useDebouncedValue = <T extends unknown>(
    value: T,
    delay: number
): T => {
    const [debounced, setDebounced] = React.useState<T>(value);

    React.useEffect(() => {
        const timer = window.setTimeout(() => {
            setDebounced(value);
        }, delay);
        return () => {
            window.clearTimeout(timer);
        };
    }, [value, delay]);

    return debounced;
};
