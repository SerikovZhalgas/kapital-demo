import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getNewsPageInited } from '../../selectors/newsPageSelectors';
import { newsPageActions } from '../../slices/newsPageSlice';
import { PaginationResponse } from '@/shared/types/api';
import { News } from '@/entities/News';

export const initNewsPage = createAsyncThunk<
    void,
    PaginationResponse<News[]>,
    ThunkConfig<string>
>('newsPage/initNewsPage', async (response, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getNewsPageInited(getState());

    if (!inited) {
        dispatch(newsPageActions.initialState(response));
        // dispatch(fetchNewsList({}));
    }
});
