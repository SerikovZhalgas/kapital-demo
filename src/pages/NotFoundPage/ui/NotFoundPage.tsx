import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteNews } from '@/shared/const/router';
import { VStack } from '@/shared/ui/Stack';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <VStack
            gap="10"
            justify="center"
            align="center"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            Страница не найдена
            <AppLink to={getRouteNews('kase')}>
                Перейти на страницу KASE
            </AppLink>
        </VStack>
    );
};
