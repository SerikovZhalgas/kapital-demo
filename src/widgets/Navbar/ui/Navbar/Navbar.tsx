import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLogo } from '@/shared/ui/AppLogo';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const isMobile = useDevice();

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLogo
                width={isMobile ? 150 : 290}
                height={isMobile ? 40 : 80}
                className={cls.logo}
            />
        </header>
    );
});
