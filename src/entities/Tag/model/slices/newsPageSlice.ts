import { createSlice } from '@reduxjs/toolkit';
import { TagSchema } from '../types/tagSchema';
import { fetchNewsTagBySlug } from '../services/fetchNewsTag/fetchNewsTagBySlug';

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
            .addCase(fetchNewsTagBySlug.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchNewsTagBySlug.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchNewsTagBySlug.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: tagActions } = tagSlice;
export const { reducer: tagReducer } = tagSlice;
