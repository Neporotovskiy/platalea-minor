import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
export const read = async (request, response) => {
    const filename = request.params.filename;
    const file = readFileSync(resolve("./files/", filename));
    response.send(file);
};
