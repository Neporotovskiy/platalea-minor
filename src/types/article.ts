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

export type Content = Record<string, unknown>[];
