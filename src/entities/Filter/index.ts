export type { FilterType } from './model/types.ts';
export { selectMemoizedFilter } from './model/memoizedSelectors.ts';
export {
    default as filterReducer,
    changeFilter,
    selectFilter
} from './model/filterSlice.ts';
