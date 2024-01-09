import { ARTICLES } from "./fixtures.mjs";

export const read = async (request, response) => {
  response.send({
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
  });
};
