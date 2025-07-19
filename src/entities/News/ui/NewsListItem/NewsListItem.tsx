import { memo } from 'react';
import dayjs from 'dayjs';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NewsListItem.module.scss';
import { Card } from '@/shared/ui/Card';
import { News } from '../../model/types/news';
import { AppImage } from '@/shared/ui/AppImage';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import PersonIcon from '@/shared/assets/icons/person-9-9.svg';

export interface NewsListItemProps {
    className?: string;
    news: News;
    index: number;
}

export const NewsListItem = memo((props: NewsListItemProps) => {
    const { className, news, index } = props;

    const newsInfo = (
        <VStack gap="5">
            <HStack gap="10">
                <Text
                    text={news.category.name}
                    size="3xl"
                    weight="medium"
                    variant="green"
                />
                <Text
                    text={dayjs(news.published_at).format('DD.MM.YYYY')}
                    size="xs"
                    weight="medium"
                    variant="grey"
                />
                <Text
                    text={news.views}
                    size="xs"
                    weight="medium"
                    variant="grey"
                    leftIcon={PersonIcon}
                />
            </HStack>
            <Text title={news.title} size="6xl" weight="medium" />
            <Text text={news.subtitle} size="xl" weight="bold" />
        </VStack>
    );

    const content = [0, 3].includes(index) ? (
        <HStack gap="20" align="start">
            <AppImage
                src={news.image}
                alt={news.image_caption}
                className={cls.image}
            />
            {newsInfo}
        </HStack>
    ) : (
        newsInfo
    );

    return (
        <Card
            padding="20"
            className={classNames(cls.NewsListItem, {}, [className])}
        >
            {content}
        </Card>
    );
});
