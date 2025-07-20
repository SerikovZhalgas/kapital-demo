import { memo } from 'react';
import dayjs from 'dayjs';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NewsListItem.module.scss';
import { Card } from '@/shared/ui/Card';
import { News } from '../../model/types/news';
import { AppImage } from '@/shared/ui/AppImage';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import PersonIcon from '@/shared/assets/icons/person-9-9.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

export interface NewsListItemProps {
    className?: string;
    news: News;
    small?: boolean;
}

export const NewsListItem = memo((props: NewsListItemProps) => {
    const { className, news, small } = props;
    const isMobile = useDevice();

    const mods = {
        [cls.mobile]: isMobile,
        [cls.small]: small,
    };

    let dateTextSize: TextSize = 'xs';
    if (isMobile) {
        dateTextSize = '6xs';
    } else if (small) {
        dateTextSize = '5xs';
    }

    const tags = (
        <HStack gap="2" wrap="wrap">
            {news.tags.map((tag) => (
                <Text
                    key={tag.id}
                    text={tag.name}
                    size="7xs"
                    weight="medium"
                    variant="tag"
                />
            ))}
        </HStack>
    );

    const subtitle = (
        <Text
            text={news.subtitle}
            size={isMobile ? '4xs' : 'xl'}
            weight="medium"
        />
    );

    const additionalInfo = (
        <HStack gap={small ? '5' : '10'}>
            {!small && (
                <Text
                    text={news.category.name}
                    size={isMobile ? '3xs' : '3xl'}
                    weight="medium"
                    variant="green"
                />
            )}
            <Text
                text={dayjs(news.published_at).format('DD.MM.YYYY')}
                size={dateTextSize}
                weight="medium"
                variant="grey"
            />
            <Text
                text={news.views}
                size={dateTextSize}
                weight="medium"
                variant="grey"
                leftIcon={PersonIcon}
            />
        </HStack>
    );

    const newsInfo = (
        <VStack gap="5">
            {!isMobile && additionalInfo}
            <Text
                title={news.title}
                size={small || isMobile ? 'xs' : '5xl'}
                weight={small ? 'semi-bold' : 'bold'}
            />
            {!small && !isMobile && subtitle}
        </VStack>
    );

    const content = news.image ? (
        <HStack gap={small || isMobile ? '10' : '20'} align="start">
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
            padding={small || isMobile ? '20' : '40'}
            className={classNames(cls.NewsListItem, mods, [className])}
        >
            <VStack gap="5">
                {isMobile && additionalInfo}
                {content}
                {isMobile && subtitle}
                {isMobile && tags}
            </VStack>
        </Card>
    );
});
