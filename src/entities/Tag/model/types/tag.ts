export interface Meta {}

export interface ArticlesTags {
    article_id: number;
    tag_id: number;
}

export interface Related {
    id: number;
    name: string;
    slug: string;
    frequency: number;
    articles_tags: ArticlesTags;
}

export interface Tag {
    id: number;
    name: string;
    description: string;
    slug: string;
    frequency: number;
    is_supertag: boolean;
    parent_id: any;
    meta: Meta;
    updated_at: string;
    parent: any;
    related: Related[];
}
