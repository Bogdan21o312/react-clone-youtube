import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICategories} from "../models/IVideo";

export const videoAPI = createApi({
    reducerPath: 'videoAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Video'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<ICategories[], number>({
            query: (limit: number = 5) => ({
                url: '/categories',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Video']
        }),
        createPost: build.mutation<ICategories, ICategories>({
            query: (post) => ({
                url: '/categories',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Video']
        }),
        updatePost: build.mutation<ICategories, ICategories>({
            query: (post) => ({
                url: `/categories/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Video']
        }),
        deletePost: build.mutation<ICategories, ICategories>({
            query: (post) => ({
                url: `/categories/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Video']
        }),
    })
})