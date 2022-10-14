import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IChannels} from "../models/IChannels";

export const channelsAPI = createApi({
    reducerPath: 'channelsTabsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Channels'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IChannels[], number>({
            query: (limit: number = 5) => ({
                url: '/channels',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Channels']
        }),
        createPost: build.mutation<IChannels, IChannels>({
            query: (post) => ({
                url: '/channels',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Channels']
        }),
        updatePost: build.mutation<IChannels, IChannels>({
            query: (post) => ({
                url: `/channels/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Channels']
        }),
        deletePost: build.mutation<IChannels, IChannels>({
            query: (post) => ({
                url: `/channels/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Channels']
        }),
    })
})
