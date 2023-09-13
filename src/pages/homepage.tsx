import React from "react";

import { Navigation } from "features/navigation";
import { Voting } from "features/voting";
import { Article } from "features/article";

const ABOUT_PAYLOAD = {
    id: 0,
    tags: [{ name: "Об игре" }],
    title: "Ground Branch",
    description:
        "В GROUND BRANCH вы работаете на Центр специальных операций / Специальную оперативную группу ЦРУ (SAC/SOG) и решаете различные задачи в составе парамилитарного подразделения",
    cover: "/about-cover.jpg",
};

const NAVIGATION_PAYLOAD = {
    links: [
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
    ],
};

const VOTING_PAYLOAD = {
    id: 0,
    description: "Выбор карты для предстоящего PVP-мероприятия",
    variants: [
        {
            id: 1,
            name: "Depot",
            percent: 10,
            selected: false,
        },
        {
            id: 2,
            name: "Training Facility",
            percent: 15,
            selected: true,
        },
        {
            id: 3,
            name: "Run Down",
            percent: 75,
            selected: false,
        },
    ],
    onVote: (voteId: number, variantId: number) => {
        console.log("Voting on " + voteId + " with variant " + variantId);
    },
};

const ARTICLE_PAYLOAD = {
    id: 0,
    tags: [
        { id: 0, name: "Тактика" },
        { id: 1, name: "Коммуникация" },
        { id: 2, name: "Основы" },
    ],
    title: "Алгоритм разбежки на карте Run Down",
    cover: "/article-cover.jpg",
};

export const Homepage = () => {
    return (
        <>
            <Article size="large" {...ABOUT_PAYLOAD} />
            <Navigation {...NAVIGATION_PAYLOAD} />
            <Voting {...VOTING_PAYLOAD} />
            <Article {...ARTICLE_PAYLOAD} />
        </>
    );
};
