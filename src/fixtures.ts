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

const enhanceWithTOC = (content: any[]) => {
    const TOC: any[] = [];

    content.forEach((element: any) => {
        if (element.type === "header") TOC.push(element);
    });

    return { TOC, content };
};

const PAYLOADS: Record<
    string,
    (input: string, init?: RequestInit | undefined) => any
> = {
    homepage: () => ({
        featured: { main: ARTICLES[0], other: ARTICLES.slice(1, 4) },
        sections: [
            {
                name: "Тактики",
                link: {
                    url: "/articles?tag=1",
                    title: "Все тактики",
                },
                articles: ARTICLES.slice(0, 3),
            },
            {
                name: "Инструкции",
                link: {
                    url: "/articles?tag=2",
                    title: "Все инструкции",
                },
                articles: ARTICLES.slice(3, 6),
            },
        ],
    }),
    articles: (input) => {
        // if (input.searchParams) {
        // let result = ARTICLES;
        // const filters = input.searchParams;
        // console.log("filters", filters);
        //     const isQueryApplied = filters.query.length > 0;
        //     const isTagsApplied = filters.tag.length > 0;
        //     const isOrderApplied = filters.order.length > 0;
        //     if (!isQueryApplied && !isTagsApplied && !isOrderApplied) {
        //         return {
        //             tags: TAGS,
        //             articles: ARTICLES,
        //         };
        //     }
        //     if (isQueryApplied) {
        //         result = result.filter(({ title }) =>
        //             title.includes(filters.query),
        //         );
        //     }
        //     if (isTagsApplied) {
        //         result = result.filter(({ tags }) =>
        //             tags.some(({ id }) =>
        //                 filters.tag.find((_id: string) => id === _id),
        //             ),
        //         );
        //     }
        //     if (isOrderApplied) {
        //         result = result.sort((a, b) => Number(a.id) - Number(b.id));
        //     }
        //     return {
        //         tags: TAGS,
        //         articles: result,
        //     };
        // } else {
        //     return {
        //         tags: TAGS,
        //         articles: ARTICLES,
        //     };
        // }

        return {
            tags: TAGS,
            articles: ARTICLES,
        };
    },
    article: () => ({
        id: "0",
        title: "Ground Branch",
        description: "Основная игровая дисциплина сообщества",
        cover: "/about-cover.jpg",
        tags: [TAGS[0], TAGS[1]],
        ...enhanceWithTOC([
            {
                id: "node-1",
                type: "paragraph",
                properties: {},
                children: [
                    "Война - это путь обмана. ",
                    {
                        id: "node-33",
                        type: "link",
                        properties: {
                            href: "#",
                        },
                        children: ["Поэтому"],
                    },
                    ", если ты и можешь что-нибудь, показывай противнику, будто не можешь; если ты и пользуешься чем-нибудь, показывай ему, будто ты этим не пользуешься; хотя бы ты и был близко, показывай, будто ты далеко; хотя бы ты и был далеко, показывай, будто ты близко; заманивай его выгодой; приведи его в расстройство и бери его; если у него все полно, будь наготове; если он силен, уклоняйся от него; вызвав в нем гнев, приведи его в состояние расстройства; приняв смиренный вид, вызови в нем самомнение; если его силы свежи, утоми его; если у него дружны воины, разъедини; нападай на него, когда он не готов; выступай, когда он не ожидает.",
                ],
            },
            {
                id: "node-3",
                type: "header",
                properties: {
                    id: "Основы-коммуникации-и-взаимодействия-в-составе-тактической-единицы",
                },
                children: [
                    "Основы коммуникации и взаимодействия в составе тактической единицы",
                ],
            },
            {
                id: "node-4",
                type: "paragraph",
                properties: {},
                children: [
                    "Война - это путь обмана. Поэтому, если ты и можешь что-нибудь, показывай противнику, будто не можешь; если ты и пользуешься чем-нибудь, показывай ему, будто ты этим не пользуешься; хотя бы ты и был близко, показывай, будто ты далеко; хотя бы ты и был далеко, показывай, будто ты близко; заманивай его выгодой; приведи его в расстройство и бери его; если у него все полно, будь наготове; если он силен, уклоняйся от него; вызвав в нем гнев, приведи его в состояние расстройства; приняв смиренный вид, вызови в нем самомнение; если его силы свежи, утоми его; если у него дружны воины, разъедини; нападай на него, когда он не готов; выступай, когда он не ожидает.",
                ],
            },
            {
                id: "node-6",
                type: "picture",
                properties: {
                    src: "/article-cover.jpg",
                    caption: "Война - это путь обмана.",
                },
                children: [],
            },
            {
                id: "node-41",
                type: "paragraph",
                properties: {},
                children: [
                    "Война - это путь обмана. Поэтому, если ты и можешь что-нибудь, показывай противнику, будто не можешь; если ты и пользуешься чем-нибудь, показывай ему, будто ты этим не пользуешься; хотя бы ты и был близко, показывай, будто ты далеко; хотя бы ты и был далеко, показывай, будто ты близко; заманивай его выгодой; приведи его в расстройство и бери его; если у него все полно, будь наготове; если он силен, уклоняйся от него; вызвав в нем гнев, приведи его в состояние расстройства; приняв смиренный вид, вызови в нем самомнение; если его силы свежи, утоми его; если у него дружны воины, разъедини; нападай на него, когда он не готов; выступай, когда он не ожидает.",
                ],
            },
            {
                id: "node-7",
                type: "header",
                properties: {
                    id: "some-anchor",
                },
                children: [
                    "Основы коммуникации и взаимодействия в составе тактической единицы",
                ],
            },
            {
                id: "node-61",
                type: "picture",
                properties: {
                    src: "/about-cover.jpg",
                },
                children: [],
            },
            {
                id: "node-8",
                type: "paragraph",
                properties: {},
                children: [
                    "Война - это путь обмана. Поэтому, если ты и можешь что-нибудь, показывай противнику, будто не можешь; если ты и пользуешься чем-нибудь, показывай ему, будто ты этим не пользуешься; хотя бы ты и был близко, показывай, будто ты далеко; хотя бы ты и был далеко, показывай, будто ты близко; заманивай его выгодой; приведи его в расстройство и бери его; если у него все полно, будь наготове; если он силен, уклоняйся от него; вызвав в нем гнев, приведи его в состояние расстройства; приняв смиренный вид, вызови в нем самомнение; если его силы свежи, утоми его; если у него дружны воины, разъедини; нападай на него, когда он не готов; выступай, когда он не ожидает.",
                ],
            },
        ]),
    }),
};

export const _fetch = (
    input: string,
    init?: RequestInit | undefined,
): Promise<Response> => {
    console.log("_fetch:", input, init);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true /*Math.round(Math.random()) === 1*/) {
                console.log("_fetch: resolved");
                let payload = null;
                if (input.startsWith("/api/homepage")) {
                    payload = PAYLOADS.homepage(input, init);
                } else if (input.startsWith("/api/articles")) {
                    payload = PAYLOADS.articles(input, init);
                } else if (input.startsWith("/api/article")) {
                    payload = PAYLOADS.article(input, init);
                }
                resolve(
                    new Response(JSON.stringify(payload), {
                        status: 200,
                    }),
                );
            } else {
                console.log("_fetch: rejected");
                reject(
                    new Response(null, {
                        status: 418,
                    }),
                );
            }
        }, 1000);
    });
};
