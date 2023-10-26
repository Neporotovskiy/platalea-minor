export const TAGS = [
    { id: "0", name: "Об игре" },
    { id: "1", name: "Тактика" },
    { id: "2", name: "Коммуникация" },
    { id: "3", name: "Основы" },
    { id: "4", name: "Чат" },
    { id: "5", name: "Развитие сообщества" },
];

export const ARTICLES = [
    {
        id: "0",
        title: "Ground Branch",
        description: "Основная игровая дисциплина сообщества",
        cover: "/about-cover.jpg",
        tags: [TAGS[0], TAGS[1]],
    },
    {
        id: "1",
        title: "Run Down",
        description: 'Выход с точки высадки "Гаражи"',
        cover: "/article-cover.jpg",
        tags: [TAGS[3]],
    },
    {
        id: "2",
        title: "Discord",
        description: "Запущен обновленный сервер",
        cover: "",
        tags: [TAGS[4], TAGS[2]],
    },
    {
        id: "3",
        title: "Методичка",
        description: "",
        cover: "/article-cover.jpg",
        tags: [TAGS[3]],
    },
    {
        id: "4",
        title: "Методичка",
        description: "Особенности поведения противника в темное время суток",
        cover: "/article-cover.jpg",
        tags: [TAGS[3], TAGS[4]],
    },
    {
        id: "5",
        title: "Run Down",
        description: "Прохождение тактического маршрута парковка-балкон",
        cover: "/article-cover.jpg",
        tags: [TAGS[3]],
    },
    {
        id: "6",
        title: "Развед.сводка №017",
        description: "Август 2023",
        cover: "/article-cover.jpg",
        tags: [TAGS[3], TAGS[4]],
    },
    {
        id: "7",
        title: "Использование укрытий на карте training facility",
        description:
            "В GROUND BRANCH вы работаете на Центр специальных операций / Специальную оперативную группу ЦРУ (SAC/SOG) и выполняете различные задачи в составе парамилитарного подразделения",
        cover: "/article-cover.jpg",
        tags: [TAGS[3]],
    },
];
