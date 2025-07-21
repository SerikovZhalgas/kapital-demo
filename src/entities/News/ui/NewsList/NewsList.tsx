import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { News } from '../../model/types/news';
import { NewsListItemSkeleton } from '../NewsListItem/NewsListItemSkeleton';
import { NewsListItem } from '../NewsListItem/NewsListItem';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface NewsListProps {
    className?: string;
    news?: News[];
    isLoading?: boolean;
    small?: boolean;
}

const getSkeletons = (className?: string, small?: boolean) =>
    new Array(3)
        .fill(0)
        .map((item, index) => (
            <NewsListItemSkeleton
                key={index}
                className={className}
                small={small}
            />
        ));

export const NewsList = memo((props: NewsListProps) => {
    const { className, news, isLoading, small } = props;

    if (!isLoading && !news?.length) {
        return (
            <div className={classNames('', {}, [className])}>
                <Text title="Статьи не найдены" />
            </div>
        );
    }

    return (
        <VStack className={classNames('', {}, [className])}>
            {news?.map((item) => (
                <NewsListItem news={item} key={item.id} small={small} />
            ))}
            {isLoading && getSkeletons(className, small)}
        </VStack>
    );
});
