import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import cls from './NewsListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

interface NewsListItemSkeletonProps {
    className?: string;
    small?: boolean;
}

export const NewsListItemSkeleton = memo((props: NewsListItemSkeletonProps) => {
    const { className, small } = props;
    const isMobile = useDevice();

    const additional = (
        <HStack gap={small || isMobile ? '5' : '10'}>
            {!small && <Skeleton width={100} height={15} />}
            <Skeleton width={small ? 50 : 60} height={small ? 12 : 15} />
            <Skeleton width={small ? 30 : 36} height={small ? 12 : 15} />
        </HStack>
    );

    const subtitle = <Skeleton width={340} height={36} />;

    let imageSkeletonWidth = 200;
    let imageSkeletonHeight = 132;
    if (small) {
        imageSkeletonWidth = 91;
        imageSkeletonHeight = 60;
    } else if (isMobile) {
        imageSkeletonWidth = 121;
        imageSkeletonHeight = 80;
    }

    return (
        <Card className={classNames(cls.NewsListItem, {}, [className])}>
            <VStack gap="5">
                {isMobile && additional}
                <HStack gap={small || isMobile ? '10' : '20'} align="start">
                    <Skeleton
                        width={imageSkeletonWidth}
                        height={imageSkeletonHeight}
                    />
                    <VStack gap="5">
                        {!isMobile && additional}
                        <Skeleton
                            width={small || isMobile ? 170 : 340}
                            height={small || isMobile ? 40 : 60}
                        />
                        {!small && !isMobile && subtitle}
                    </VStack>
                </HStack>
                {isMobile && subtitle}
            </VStack>
        </Card>
    );
});
