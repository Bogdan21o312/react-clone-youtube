import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IVideo} from "../models/IVideo";

export const videoAPI = createApi({
    reducerPath: 'videoAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Video'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IVideo[], number>({
            query: (limit: number = 5) => ({
                url: '/videos',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Video']
        }),
        createPost: build.mutation<IVideo, IVideo>({
            query: (post) => ({
                url: '/videos',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Video']
        }),
        updatePost: build.mutation<IVideo, IVideo>({
            query: (post) => ({
                url: `/videos/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Video']
        }),
        deletePost: build.mutation<IVideo, IVideo>({
            query: (post) => ({
                url: `/videos/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Video']
        }),
    })
})