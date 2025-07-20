import { memo } from 'react';
import dayjs from 'dayjs';
import { Text } from '@/shared/ui/Text';
import { NewsList } from '@/entities/News';

interface PopularNewsInfiniteListProps {
    className?: string;
}

export const PopularNewsInfiniteList = memo(
    (props: PopularNewsInfiniteListProps) => {
        const { className } = props;
        const dateFrom = dayjs().subtract(7, 'day');
        const dateTo = dayjs();
        // const {
        //     data: news,
        //     isLoading,
        //     error,
        // } = usePopularNews({ dateFrom, dateTo });
        const news = { rows: [] };
        const isLoading = true;
        const error = '';

        if (error) {
            return <Text text="Ошибка при загрузке новостей" />;
        }
        if (!news) {
            return <Text text="Отсутствуют популярные материалы" />;
        }

        return (
            <NewsList isLoading news={news.rows} className={className} small />
        );
    },
);
