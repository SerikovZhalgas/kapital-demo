import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NewsInfiniteList } from '../NewsInfiniteList/NewsInfiniteList';
import { initNewsPage } from '../../model/services/initNewsPage/initNewsPage';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { newsPageReducer } from '../../model/slices/newsPageSlice';
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs';
import cls from './NewsPage.module.scss';
import { Text } from '@/shared/ui/Text';
import { Pagination } from '@/shared/ui/Pagination';
import {
    getNewsPageCount,
    getNewsPageLimit,
    getNewsPageNum,
} from '../../model/selectors/newsPageSelectors';
import { mockData } from '../../model/services/fetchNewsList/mockData';

interface NewsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    newsPage: newsPageReducer,
};

const descriptionText =
    'Казахстанская фондовая биржа (Kazakhstan Stock Exchange — KASE) — ' +
    'фондовая биржа со штаб-квартирой в городе Алматы, Казахстан, занимает ' +
    'второе место среди бирж СНГ по капитализации рынка акций. Была основана в 1993 году.';

const NewsPage = (props: NewsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const count = useSelector(getNewsPageCount);
    const page = useSelector(getNewsPageNum);
    const limit = useSelector(getNewsPageLimit);

    const handlePageChange = (newPage: number) => {
        console.log('handlePageChange', newPage);
    };

    useInitialEffect(() => {
        dispatch(initNewsPage(mockData));
    });

    const content = (
        <StickyContentLayout
            right={<Sidebar />}
            content={
                <Page className={classNames(cls.NewsPage, {}, [className])}>
                    <BreadCrumbs className={cls.padding} />
                    <Text
                        title="KASE"
                        size="8xl"
                        weight="bold"
                        className={cls.title}
                    />
                    <Text text={descriptionText} className={cls.description} />
                    <Pagination
                        count={count}
                        limit={limit}
                        page={page}
                        onPageChange={handlePageChange}
                        className={cls.padding}
                    />
                    <NewsInfiniteList />
                    <Pagination
                        count={count}
                        limit={limit}
                        page={page}
                        onPageChange={handlePageChange}
                        className={cls.padding}
                    />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(NewsPage);
