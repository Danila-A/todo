export type { SearchType } from './model/types.ts';
export { selectMemoizedSearchValue } from './model/memoizedSelectors.ts';
export { 
    default as searchReducer,
    setSearchValue,
    selectSearchValue
} from './model/searchSlice.ts';
