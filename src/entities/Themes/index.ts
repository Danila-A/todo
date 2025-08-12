export type { ThemeType, ThemeState } from './model/types';
export { 
    default as themeReducer, 
    toggleTheme,
    retrieveThemeTypeFromLocalStorage, 
} from './model/themesSlice';
