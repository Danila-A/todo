declare type RootState = ReturnType<typeof import('../store/index.ts').store.getState>;
declare type AppDispatch = typeof import('../store/index.ts').store.dispatch;
