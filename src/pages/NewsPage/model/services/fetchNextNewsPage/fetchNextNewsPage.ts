import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { newsPageActions } from '../../slices/newsPageSlice';
import {
    getNewsPageIsLoading,
    getNewsPageNum,
} from '../../selectors/newsPageSelectors';
import { fetchNewsList } from '../fetchNewsList/fetchNewsList';

export const fetchNextNewsPage = createAsyncThunk<
    void,
    string | undefined,
    ThunkConfig<string>
>('newsPage/fetchNextNewsPage', async (slug, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const page = getNewsPageNum(getState());
    const isLoading = getNewsPageIsLoading(getState());

    if (!isLoading) {
        dispatch(newsPageActions.setPage(page));
        dispatch(fetchNewsList({ slug }));
    }
});
