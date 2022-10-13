import React, {useState} from 'react';
import {videoAPI} from "../../sevices/VideoService";

const Index = () => {
    const [limit, setLimit] = useState(100)
    const {data: videos, error, isLoading} = videoAPI.useFetchAllPostsQuery(limit)


    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error when loading</h1>}
            {videos && videos.map(videos =>
                <div key={videos.title}>{videos.title}</div>
            )}
        </div>
    );
};

export default Index;