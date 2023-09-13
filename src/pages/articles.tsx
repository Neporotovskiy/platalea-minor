import React from "react";

import { Navigation } from "features/navigation";

const NAVIGATION_LINKS_PAYLOAD = [
    {
        url: "/articles/0",
        name: "Боевой устав",
        updated: false,
    },
    {
        url: "/articles?tags=0,1,2",
        name: "Инструкции",
        updated: true,
    },
    {
        url: "/articles",
        name: "Статьи",
        updated: true,
    },
    {
        url: "/articles?tags=3,4,5",
        name: "Видео",
        updated: false,
    },
    {
        url: "/articles?tags=6,7,8",
        name: "Скриншоты",
        updated: false,
    },
];

export const Articles = () => {
    return (
        <>
            Articles page!
            <Navigation links={NAVIGATION_LINKS_PAYLOAD} />
        </>
    );
};
