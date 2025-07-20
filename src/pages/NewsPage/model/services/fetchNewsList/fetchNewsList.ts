import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { News } from '@/entities/News';
import {
    getNewsPageLimit,
    getNewsPageNum,
} from '../../selectors/newsPageSelectors';
import { PaginationResponse } from '@/shared/types/api';

interface FetchNewsListProps {
    replace?: boolean;
    slug?: string;
}

export const fetchNewsList = createAsyncThunk<
    PaginationResponse<News[]>,
    FetchNewsListProps,
    ThunkConfig<string>
>('newsPage/fetchNewsList', async (props, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const limit = getNewsPageLimit(getState());
    const page = getNewsPageNum(getState());

    try {
        const response = await extra.api.get<PaginationResponse<News[]>>(
            `/tags/slug/${props.slug}/articles`,
            {
                params: {
                    limit,
                    offset: page - 1,
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
