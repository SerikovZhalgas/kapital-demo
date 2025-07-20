import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Tag } from '../../types/tag';

export const fetchNewsTagBySlug = createAsyncThunk<
    Tag,
    string | undefined,
    ThunkConfig<string>
>('tag/fetchNewsTagBySlug', async (slug, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
        const response = await extra.api.get<Tag>(`/tags/slug/${slug}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
