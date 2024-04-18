import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from '../api';

export const UserCrud = createApi({
    baseQuery: api, // Set your API
    reducerPath: 'ReatingData',
    tagTypes: ['Reating'],
    endpoints: (builder) => ({
        getTable1: builder.query({
            query: () => 'products/',
            providesTags: ['Reating'],
        }),
        createTable2: builder.mutation({
            query: (body) => ({
                url: 'products/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Reating'],
        }),
        deleteTbale2: builder.mutation({
            query: (body) => ({
                url: `products/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Reating']
        }),
    }),
});

export const {
    useGetTable1Query,
    useCreateTable2Mutation,
    useDeleteTbale2Mutation,
} = UserCrud;