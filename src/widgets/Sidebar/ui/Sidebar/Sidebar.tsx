import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Text } from '@/shared/ui/Text';

interface SidebarProps {
    className?: string;
    title?: string;
    children?: ReactNode;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className, title, children } = props;
    return (
        <aside className={classNames(cls.Sidebar, {}, [className])}>
            <Text
                rectangle
                title={title}
                size="4xl"
                weight="bold"
                className={cls.title}
            />
            {children}
        </aside>
    );
});
