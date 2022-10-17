import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IChannels} from "../models/IChannels";

export const moreYoutubesAPI = createApi({
    reducerPath: 'moreYoutubesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8492'}),
    tagTypes: ['MoreYoutubes'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IChannels[], number>({
            query: (limit: number = 5) => ({
                url: '/moreYoutubes',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['MoreYoutubes']
        }),
        createPost: build.mutation<IChannels, IChannels>({
            query: (post) => ({
                url: '/moreYoutubes',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['MoreYoutubes']
        }),
        updatePost: build.mutation<IChannels, IChannels>({
            query: (post) => ({
                url: `/moreYoutubes/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['MoreYoutubes']
        }),
        deletePost: build.mutation<IChannels, IChannels>({
            query: (post) => ({
                url: `/moreYoutubes/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['MoreYoutubes']
        }),
    })
})
