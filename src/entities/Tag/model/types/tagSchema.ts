import { Tag } from './tag';

export interface TagSchema {
    isLoading: boolean;
    error?: string;
    data?: Tag;
}
