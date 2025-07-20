import { memo } from 'react';
import dayjs from 'dayjs';
import { Text } from '@/shared/ui/Text';
import { NewsList } from '@/entities/News';
import { usePopularNews } from '../../api/newsApi';
import cls from './PopularNewsInfiniteList.module.scss';

interface PopularNewsInfiniteListProps {
    className?: string;
}

export const PopularNewsInfiniteList = memo(
    (props: PopularNewsInfiniteListProps) => {
        const { className } = props;
        const dateFrom = dayjs().subtract(7, 'day');
        const dateTo = dayjs();
        const {
            data: news,
            isLoading,
            error,
        } = usePopularNews({ dateFrom, dateTo });

        if (error) {
            return (
                <Text
                    text="Ошибка при загрузке новостей"
                    className={cls.padding}
                />
            );
        }
        if (!news) {
            return (
                <Text
                    text="Отсутствуют популярные материалы"
                    className={cls.padding}
                />
            );
        }

        return (
            <NewsList
                isLoading={isLoading}
                news={news.rows}
                className={className}
                small
            />
        );
    },
);
