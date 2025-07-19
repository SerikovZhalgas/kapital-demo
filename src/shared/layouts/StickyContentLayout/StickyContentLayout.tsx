import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface StickyContentLayoutProps {
    className?: string;
    content?: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, right, content } = props;

    return (
        <HStack
            gap="10"
            className={classNames(cls.StickyContentLayout, {}, [className])}
        >
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </HStack>
    );
});
