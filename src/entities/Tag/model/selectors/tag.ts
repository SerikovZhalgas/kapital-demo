import { StateSchema } from '@/app/providers/StoreProvider';

export const getTagData = (state: StateSchema) => state.tag?.data;
export const getTagIsLoading = (state: StateSchema) => state.tag?.isLoading;
export const getTagError = (state: StateSchema) => state.tag?.error;
