import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

interface StickyContentLayoutProps {
    className?: string;
    content?: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, right, content } = props;
    const isMobile = useDevice();

    const mods = {
        [cls.mobile]: isMobile,
        [cls.desktop]: !isMobile,
    };

    return (
        <HStack gap="10" className={classNames('', mods, [className])}>
            <div className={cls.content}>{content}</div>
            {!isMobile && right && <div className={cls.right}>{right}</div>}
        </HStack>
    );
});
