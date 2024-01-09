import React from "react";
export const useClickAway = (handler) => {
    const ref = React.useRef(null);
    const check = React.useCallback(({ target }) => {
        if (ref.current === null)
            return;
        if (ref.current.contains(target))
            return;
        handler();
    }, [handler]);
    React.useEffect(() => {
        document.addEventListener("click", check);
        return () => {
            document.removeEventListener("click", check);
        };
    }, [check]);
    return ref;
};
