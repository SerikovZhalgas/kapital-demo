import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Icon } from '@/shared/ui/Icon';

export const ThemeSwitcher = memo(() => {
    const { toggleTheme } = useTheme();

    const onToggleHandler = useCallback(() => {
        toggleTheme();
    }, [toggleTheme]);

    return <Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />;
});
