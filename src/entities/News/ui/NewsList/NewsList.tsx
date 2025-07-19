import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NewsList.module.scss';
import { News } from '../../model/types/news';
import { NewsListItemSkeleton } from '../NewsListItem/NewsListItemSkeleton';
import { NewsListItem } from '../NewsListItem/NewsListItem';
import { VStack } from '@/shared/ui/Stack';

interface NewsListProps {
    className?: string;
    news: News[];
    isLoading?: boolean;
}

const getSkeletons = () =>
    new Array(3)
        .fill(0)
        .map((item, index) => <NewsListItemSkeleton key={index} />);

export const NewsList = memo((props: NewsListProps) => {
    const { className, news, isLoading } = props;

    if (!isLoading && !news.length) {
        return (
            <div className={classNames(cls.NewsList, {}, [className])}>
                <Text title="Статьи не найдены" />
            </div>
        );
    }

    return (
        <VStack gap="20" className={classNames(cls.NewsList, {}, [])}>
            {news.map((item, index) => (
                <NewsListItem news={item} index={index} key={item.id} />
            ))}
            {isLoading && getSkeletons()}
        </VStack>
    );
});
