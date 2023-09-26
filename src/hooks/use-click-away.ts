import React from "react";

export const useClickAway = <T extends HTMLElement>(handler: VoidFunction) => {
    const ref = React.useRef<T>(null);

    const check = React.useCallback(
        ({ target }: MouseEvent) => {
            if ((ref.current as T).contains(target as Node)) return;
            handler();
        },
        [handler],
    );

    React.useEffect(() => {
        document.addEventListener("click", check);
        return () => {
            document.removeEventListener("click", check);
        };
    }, [check]);

    return ref;
};
