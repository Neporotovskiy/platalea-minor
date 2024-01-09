import { ARTICLES } from "./fixtures.mjs";

export const read = async (request, response) => {
  const url = new URL(request.headers.referer);
  if (url.searchParams.size > 0) {
    let result = ARTICLES;
    const filters = url.searchParams;
    const isQueryApplied = filters.get("query") !== null;
    const isTagsApplied = filters.get("tag") !== null;
    const isOrderApplied = filters.get("order") !== null;
    if (isQueryApplied) {
      result = result.filter(({ title }) => title.includes(filters.get("query")));
    }
    if (isTagsApplied) {
      result = result.filter(({ tags }) =>
        tags.some(({ id }) => filters.getAll("tag").find((_id) => id === _id)),
      );
    }
    if (isOrderApplied) {
        // TODO: Not implemented
    }
    response.send(result);
  } else {
    response.send(ARTICLES);
  }
};
