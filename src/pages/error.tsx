import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import { Breadcrumbs } from "features/breadcrumbs";
import { Article, Content, Title, Description } from "features/article";

import { DocumentTitle } from "components/document-title";

const QUOTES = [
    "«Идти вперед туда, где не ждут; атаковать там, где не подготовились»",
    "«Поэтому самая лучшая война – разбить замыслы противника; на следующем месте – разбить его союзы; на следующем месте – разбить его войска»",
    "«Война любит победу и не любит продолжительности»",
    "«Мощь того, кто умеет заставить других идти в бой, есть мощь человека, скатывающего круглый камень с горы в тысячу саженей»",
    "«Беспорядок рождается из порядка, трусость рождается из храбрости, слабость рождается из силы»",
    "«У того, кто умеет нападать, противник не знает, где ему обороняться»",
    "«Война – это путь обмана, постоянной организации ложных выпадов, распространения дезинформации, использования уловок и хитростей»",
    "«Сначала будь как невинная девушка – и противник откроет у себя дверь. Потом же будь как вырвавшийся заяц – и противник не успеет принять мер к защите»",
    "«Война – это великое дело для государства, это почва жизни и смерти, это путь существования и гибели»",
    "«Уметь заставить противника самого прийти – это значит заманить его выгодой; уметь не дать противнику пройти – это значит сдержать его вредом»",
];

export const Error = () => {
    const error = useRouteError() as Response;

    let title;
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404: {
                title = "Страница не найдена";
                break;
            }
            default: {
                title = "Ошибка получения данных";
            }
        }
    } else title = "Ошибка отображения";

    return (
        <>
            <DocumentTitle>{"GSF - " + title}</DocumentTitle>
            <Breadcrumbs>
                {[
                    {
                        href: "/",
                        title: "Главная",
                    },
                    {
                        href: "/articles",
                        title: "Статьи",
                    },
                    {
                        title: title,
                    },
                ]}
            </Breadcrumbs>
            <Article size="large">
                <Content>
                    <Title>{title}</Title>
                    <Description>{quote}</Description>
                </Content>
            </Article>
        </>
    );
};
