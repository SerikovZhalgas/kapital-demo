import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import {
    newsPageActions,
    newsPageReducer,
} from '../../model/slices/newsPageSlice';
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs';
import cls from './NewsPage.module.scss';
import { Text } from '@/shared/ui/Text';
import { Pagination } from '@/shared/ui/Pagination';
import {
    getNewsPageCount,
    getNewsPageLimit,
    getNewsPageNum,
} from '../../model/selectors/newsPageSelectors';
import { PopularNewsInfiniteList } from '../PopularNewsInfiniteList/PopularNewsInfiniteList';
import { fetchNextNewsPage } from '../../model/services/fetchNextNewsPage/fetchNextNewsPage';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { fetchNewsTagBySlug, getTagData, tagReducer } from '@/entities/Tag';

interface NewsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    newsPage: newsPageReducer,
    tag: tagReducer,
};

const NewsPage = (props: NewsPageProps) => {
    const { className } = props;
    const { slug } = useParams();
    const dispatch = useAppDispatch();
    const isMobile = useDevice();
    const count = useSelector(getNewsPageCount);
    const page = useSelector(getNewsPageNum);
    const limit = useSelector(getNewsPageLimit);
    const tag = useSelector(getTagData);

    const handlePageChange = (newPage: number) => {
        dispatch(newsPageActions.setPage(newPage));
        dispatch(fetchNextNewsPage());
    };

    const mods = {
        [cls.mobile]: isMobile,
    };

    useInitialEffect(() => {
        dispatch(fetchNewsTagBySlug(slug));
        dispatch(initNewsPage({ slug }));
    });

    const content = (
        <StickyContentLayout
            right={
                <Sidebar title="Популярные материалы">
                    <PopularNewsInfiniteList />
                </Sidebar>
            }
            content={
                <Page className={classNames(cls.NewsPage, mods, [className])}>
                    <BreadCrumbs className={cls.padding} />
                    <Text
                        title={tag?.name}
                        size={isMobile ? '6xl' : '8xl'}
                        weight="bold"
                        variant={isMobile ? 'black' : 'primary'}
                        className={cls.title}
                    />
                    <Text
                        text={tag?.description}
                        size={isMobile ? '4xs' : 'm'}
                        className={cls.description}
                    />
                    <Pagination
                        count={count}
                        limit={limit}
                        page={page}
                        onPageChange={handlePageChange}
                        className={cls.padding}
                    />
                    <NewsInfiniteList className={cls.padding} />
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
