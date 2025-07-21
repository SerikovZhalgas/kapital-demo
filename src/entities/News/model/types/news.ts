export interface ArticlesTags {
    article_id: number;
    tag_id: number;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
    frequency: number;
    articles_tags: ArticlesTags;
}

export interface Type {
    name: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Locale {
    id: number;
    name: string;
    code: string;
}

export interface News {
    id: number;
    status?: string;
    title?: string;
    subtitle?: string;
    slug?: string;
    image?: string;
    preview_thumbnail?: any;
    image_caption?: string;
    type_id?: number;
    published_at?: string;
    category_id?: number;
    project_id?: number | null;
    is_breaking?: boolean;
    is_important?: boolean;
    is_pr?: boolean;
    is_live?: boolean;
    is_commentable?: boolean;
    is_editor_choice?: boolean;
    in_slider?: boolean;
    in_head?: boolean;
    views?: number;
    show_preview?: boolean;
    tts?: any;
    is_legacy?: boolean;
    is_green?: boolean;
    source_id?: any;
    locale_id?: number;
    translated_article_id?: any;
    updated_at?: string;
    tags?: Tag[];
    type?: Type;
    category?: Category;
    authors?: any[];
    people?: any[];
    locale?: Locale;
    translated_article?: any;
}
