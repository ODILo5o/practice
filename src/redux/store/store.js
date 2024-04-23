// store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { categoriesApi } from '../slice/CategoriesCrud/crud';
import { UserCrud } from '../slice/user/index.js';

export const store = configureStore({
    reducer: {
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [UserCrud.reducerPath]: UserCrud.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            UserCrud.middleware,
        ),
});

setupListeners(store.dispatch);