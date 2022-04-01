export type TextSnippet = {
    id: number;
    name: string;
    description: string;
}

export type AllTextSnippets = {
    textSnippets: Array<TextSnippet>;
}