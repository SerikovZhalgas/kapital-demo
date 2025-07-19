export enum AppRoutes {
    NEWS = 'news',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteNews = () => '/';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteNews()]: AppRoutes.NEWS,
};
