declare type RootState = ReturnType<typeof import('../store/index.ts').store.getState>;
declare type AppDispatch = typeof import('../store/index.ts').store.dispatch;
declare type FilterType = 'all' | 'complete' | 'incomplete';
declare interface SearchType {
    value: string;
};
declare type ThemeType = 'dark' | 'light';
declare interface TodoItem {
    id: number;
    text: string;
    status: boolean;
};
