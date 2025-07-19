import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './NewsListItem.module.scss';

interface NewsListItemSkeletonProps {
    className?: string;
}

export const NewsListItemSkeleton = memo((props: NewsListItemSkeletonProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NewsListItem, {}, [className])}>
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Skeleton height={30} width={30} />
                    <Skeleton
                        width={150}
                        height={16}
                        className={cls.username}
                    />
                    <Skeleton width={150} height={16} className={cls.date} />
                </div>
                <Skeleton width={250} height={24} className={cls.title} />
                <Skeleton height={200} className={cls.img} />
                <div className={cls.footer}>
                    <Skeleton height={36} width={200} />
                </div>
            </Card>
        </div>
    );
});
