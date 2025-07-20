import { memo } from 'react';
import { useSelector } from 'react-redux';
import { NewsList } from '@/entities/News';
import { Text } from '@/shared/ui/Text';
import { getNews } from '../../model/slices/newsPageSlice';
import {
    getNewsPageError,
    getNewsPageIsLoading,
} from '../../model/selectors/newsPageSelectors';

interface NewsInfiniteListProps {
    className?: string;
}

export const NewsInfiniteList = memo((props: NewsInfiniteListProps) => {
    const { className } = props;
    const news = useSelector(getNews.selectAll);
    const isLoading = useSelector(getNewsPageIsLoading);
    const error = useSelector(getNewsPageError);

    if (error) {
        return <Text text="Ошибка при загрузке новостей" />;
    }

    return <NewsList isLoading={isLoading} news={news} className={className} />;
});
