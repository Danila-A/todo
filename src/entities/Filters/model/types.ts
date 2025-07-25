export interface FilterState {
    value: FilterType;
}

export type FilterType = 'all' | 'complete' | 'incomplete';
