import { ARTICLES, BLOCKS } from "./fixtures.mjs";

export const read = async (request, response) => {
    response.send({ ...ARTICLES[0], content: BLOCKS });
};
