import React from "react";
export const useDebouncedValue = (value, delay) => {
    const [debounced, setDebounced] = React.useState(value);
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
