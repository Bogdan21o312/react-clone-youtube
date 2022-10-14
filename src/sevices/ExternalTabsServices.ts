import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITabs} from "../models/ITabs";

export const externalTabsAPI = createApi({
    reducerPath: 'externalTabsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['ExternalTabs'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<ITabs[], number>({
            query: (limit: number = 5) => ({
                url: '/externalTabs',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['ExternalTabs']
        }),
        createPost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: '/externalTabs',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['ExternalTabs']
        }),
        updatePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/externalTabs/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['ExternalTabs']
        }),
        deletePost: build.mutation<ITabs, ITabs>({
            query: (post) => ({
                url: `/externalTabs/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['ExternalTabs']
        }),
    })
})