export enum AppRoutes {
    NEWS = 'news',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteNews = (slug: string) => `/news/${slug}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteNews(':slug')]: AppRoutes.NEWS,
};
