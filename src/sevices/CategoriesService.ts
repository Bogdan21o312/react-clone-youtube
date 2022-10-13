import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICategories} from "../models/ICategories";

export const categoriesAPI = createApi({
    reducerPath: 'categoriesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Categories'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<ICategories[], number>({
            query: (limit: number = 5) => ({
                url: '/videos',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Categories']
        }),
        createPost: build.mutation<ICategories, ICategories>({
            query: (post) => ({
                url: '/videos',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Categories']
        }),
        updatePost: build.mutation<ICategories, ICategories>({
            query: (post) => ({
                url: `/videos/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Categories']
        }),
        deletePost: build.mutation<ICategories, ICategories>({
            query: (post) => ({
                url: `/videos/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Categories']
        }),
    })
})