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

export type Blocks = "paragraph" | "header" | "picture" | "text" | "link";

export type Content = {
    id: Identifier;
    type: Blocks;
    attributes: Record<string, string>;
    children: Array<Content | string>;
};
