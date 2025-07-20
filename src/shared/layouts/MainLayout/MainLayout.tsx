import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { Footer } from '@/widgets/Footer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, header, content } = props;
    const isMobile = useDevice();

    const mods = {
        [cls.mobile]: isMobile,
        [cls.desktop]: !isMobile,
    };

    return (
        <div className={classNames(cls.MainLayout, mods, [className])}>
            <div className={cls.header}>{header}</div>
            <div className={cls.content}>{content}</div>
            <Footer className={cls.footer} />
        </div>
    );
});
