import { StateSchema } from '@/app/providers/StoreProvider';

export const getNewsPageIsLoading = (state: StateSchema) =>
    state.newsPage?.isLoading || false;
export const getNewsPageError = (state: StateSchema) => state.newsPage?.error;
export const getNewsPageNum = (state: StateSchema) => state.newsPage?.page || 1;
export const getNewsPageLimit = (state: StateSchema) =>
    state.newsPage?.limit || 7;
export const getNewsPageCount = (state: StateSchema) =>
    state.newsPage?.count || 10000;
export const getNewsPageInited = (state: StateSchema) =>
    state.newsPage?._inited;
