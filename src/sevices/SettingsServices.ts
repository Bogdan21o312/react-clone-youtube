import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITabs} from "../models/ITabs";

export const settingsAPI = createApi({
    reducerPath: 'settingsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8492'}),
    tagTypes: ['Settings'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<ITabs[], number>({
            query: (limit: number = 5) => ({
                url: '/settings',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Settings']
        }),
        createPost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: '/settings',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Settings']
        }),
        updatePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/settings/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Settings']
        }),
        deletePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/settings/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Settings']
        }),
    })
})