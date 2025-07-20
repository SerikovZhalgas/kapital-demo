import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, getRouteNews } from '@/shared/const/router';
import { NewsPage } from '@/pages/NewsPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.NEWS]: {
        path: getRouteNews(':slug'),
        element: <NewsPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
