import React from "react";
export const useScrollToTop = (key) => {
    const scrollToTop = React.useCallback(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [key]);
    React.useEffect(() => {
        scrollToTop();
    }, [scrollToTop, key]);
    return scrollToTop;
};
