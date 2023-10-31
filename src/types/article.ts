type Identifier = string;

export type Tag = {
    id: Identifier;
    name: string;
};

export type Article = {
    id: Identifier;
    title: string;
    description: string;
    cover: string;
    tags: Tag[];
};

export type Blocks = "paragraph" | "header" | "text" | "link" | "picture";

export type Content = {
    id: Identifier;
    type: Blocks;
    properties: Record<string, string>;
    children: Array<Content | string>;
};
