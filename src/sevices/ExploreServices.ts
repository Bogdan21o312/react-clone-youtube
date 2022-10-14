import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITabs} from "../models/ITabs";

export const exploreAPI = createApi({
    reducerPath: 'exploreAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Explore'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<ITabs[], number>({
            query: (limit: number = 5) => ({
                url: '/explore',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Explore']
        }),
        createPost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: '/explore',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Explore']
        }),
        updatePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/explore/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Explore']
        }),
        deletePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/explore/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Explore']
        }),
    })
})