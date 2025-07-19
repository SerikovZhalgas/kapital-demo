import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    return (
        <aside className={classNames(cls.Sidebar, {}, [className])}>
            Sidebar
        </aside>
    );
});
