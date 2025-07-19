import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardPadding = '20' | '40';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    padding?: CardPadding;
    fullWidth?: boolean;
    fullHeight?: boolean;
}
const mapPaddingToClass: Record<CardPadding, string> = {
    '20': 'gap_20',
    '40': 'gap_40',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        padding = '20',
        fullWidth,
        fullHeight,
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(
                '',
                {
                    [cls.fullWidth]: fullWidth,
                    [cls.fullHeight]: fullHeight,
                },
                [className, cls[paddingClass]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
