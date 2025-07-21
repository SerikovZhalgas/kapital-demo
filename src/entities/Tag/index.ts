export { fetchTagBySlug } from './model/services/fetchTagBySlug/fetchTagBySlug';
export {
    getTagData,
    getTagError,
    getTagIsLoading,
} from './model/selectors/tag';
export { tagReducer } from './model/slices/tagSlice';
export type { TagSchema } from './model/types/tagSchema';
