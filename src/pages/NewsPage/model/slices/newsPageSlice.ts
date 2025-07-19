import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { News } from '@/entities/News';
import { NewsPageSchema } from '../types/newsPageSchema';
import { fetchNewsList } from '../services/fetchNewsList/fetchNewsList';

const newsAdapter = createEntityAdapter<News>({
    selectId: (news) => news.id,
});

export const getNews = newsAdapter.getSelectors<StateSchema>(
    (state) => state.newsPage || newsAdapter.getInitialState(),
);

export const newsPageSlice = createSlice({
    name: 'newsPageSlice',
    initialState: newsAdapter.getInitialState<NewsPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        count: 0,
        hasMore: false,
        _inited: false,
        limit: 7,
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initialState: (state, { payload }) => {
            state.limit = 7;
            state._inited = true;
            state.count = payload.count;
            newsAdapter.addMany(state, payload.rows);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsList.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    newsAdapter.removeAll(state);
                }
            })
            .addCase(fetchNewsList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.count = action.payload.count;
                state.hasMore =
                    action.payload.offset * action.payload.limit >=
                    action.payload.count;

                if (action.meta.arg.replace) {
                    newsAdapter.setAll(state, action.payload.rows);
                } else {
                    newsAdapter.addMany(state, action.payload.rows);
                }
            })
            .addCase(fetchNewsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: newsPageActions } = newsPageSlice;
export const { reducer: newsPageReducer } = newsPageSlice;
