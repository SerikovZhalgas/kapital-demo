import { createSlice } from '@reduxjs/toolkit';
import { TagSchema } from '../types/tagSchema';
import { fetchTagBySlug } from '../services/fetchTagBySlug/fetchTagBySlug';

const initialState: TagSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTagBySlug.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchTagBySlug.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTagBySlug.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: tagActions } = tagSlice;
export const { reducer: tagReducer } = tagSlice;
