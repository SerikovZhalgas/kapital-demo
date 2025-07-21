import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Tag } from '../../types/tag';
import { ResponseType } from '@/shared/types/api';

export const fetchTagBySlug = createAsyncThunk<
    Tag,
    string | undefined,
    ThunkConfig<string>
>('tag/fetchTagBySlug', async (slug, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
        const response = await extra.api.get<ResponseType<Tag>>(
            `/tags/slug/${slug}`,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
