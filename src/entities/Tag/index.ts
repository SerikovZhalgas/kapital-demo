export { fetchNewsTagBySlug } from './model/services/fetchNewsTag/fetchNewsTagBySlug';
export {
    getTagData,
    getTagError,
    getTagIsLoading,
} from './model/selectors/tag';
export { tagReducer } from './model/slices/newsPageSlice';
export type { TagSchema } from './model/types/tagSchema';
