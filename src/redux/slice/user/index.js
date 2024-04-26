import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserCrud = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://omofood.pythonanywhere.com/api/v1/",
  }), // Set your API base URL
  reducerPath: "ReatingData",
  tagTypes: ["Reating"],
  endpoints: (builder) => ({
    getTable1: builder.query({
      query: () => "user/detail/12/",
      providesTags: ["Reating"],
    }),
    createTable2: builder.mutation({
      query: (body) => ({
        url: "users/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reating"],
    }),
    deleteTbale2: builder.mutation({
      query: (body) => ({
        url: `custom-users/${body.id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Reating"],
    }),
    get: builder.query({
      query: (url) => url, // Add your specific endpoint here
      providesTags: ["Reating"],
    }),
    add: builder.mutation({
      query: (body) => ({
        url: "custom-users/", // Add your specific endpoint here
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reating"],
    }),
  }),
});

export const {
  useGetTable1Query,
  useCreateTable2Mutation,
  useDeleteTbale2Mutation,
  useGetQuery,
  useAddMutation,
} = UserCrud;
