import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import WhiteAppSvg from '@/shared/assets/icons/app-image-white.svg';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
    width?: number;
    height?: number;
    inverted?: boolean;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, width = 50, height = 50, inverted } = props;

    return (
        <HStack max className={classNames(cls.appLogoWrapper, {}, [className])}>
            {inverted ? (
                <WhiteAppSvg
                    width={width}
                    height={height}
                    className={cls.appLogo}
                />
            ) : (
                <AppSvg width={width} height={height} className={cls.appLogo} />
            )}
        </HStack>
    );
});
