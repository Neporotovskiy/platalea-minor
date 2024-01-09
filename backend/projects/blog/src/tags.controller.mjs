import { TAGS } from "./fixtures.mjs";

export const read = async (request, response) => {
    response.send(TAGS);
};
