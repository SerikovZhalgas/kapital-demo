import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getNewsPageInited } from '../../selectors/newsPageSelectors';
import { newsPageActions } from '../../slices/newsPageSlice';

export const initNewsPage = createAsyncThunk<
    void,
    { slug?: string },
    ThunkConfig<string>
>('newsPage/initNewsPage', async ({ slug }, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getNewsPageInited(getState());

    if (!inited) {
        dispatch(newsPageActions.initialState());
        // dispatch(fetchNewsList({ slug }));
    }
});
