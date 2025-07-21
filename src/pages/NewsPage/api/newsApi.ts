import { Dayjs } from 'dayjs';
import { rtkApi } from '@/shared/api/rtkApi';

const newsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getPopularNews: build.query<
            any,
            { dateFrom: Dayjs; dateTo: Dayjs; limit?: number }
        >({
            query: ({ dateFrom, dateTo, limit = 5 }) => ({
                url: `/articles?filter[published_at][from]=${dateFrom.format(
                    'YYYY-MM-DD',
                )}
                &filter[published_at][to]=${dateTo.format(
                    'YYYY-MM-DD',
                )}&sort[views]=desc&limit=${limit}`,
            }),
        }),
    }),
});

export const usePopularNews = newsApi.useGetPopularNewsQuery;
