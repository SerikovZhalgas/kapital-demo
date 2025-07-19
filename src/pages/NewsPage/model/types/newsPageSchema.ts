import { EntityState } from '@reduxjs/toolkit';
import { News } from '@/entities/News';

export interface NewsPageSchema extends EntityState<News> {
    isLoading?: boolean;
    error?: string;
    page: number;
    limit: number;
    count: number;
    hasMore: boolean;
    _inited: boolean;
}
