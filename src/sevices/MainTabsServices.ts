import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITabs} from "../models/ITabs";

export const mainTabsAPI = createApi({
    reducerPath: 'mainTabsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['MainTabs'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<ITabs[], number>({
            query: (limit: number = 5) => ({
                url: '/mainTabs',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['MainTabs']
        }),
        createPost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: '/mainTabs',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['MainTabs']
        }),
        updatePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/mainTabs/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['MainTabs']
        }),
        deletePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/mainTabs/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['MainTabs']
        }),
    })
})