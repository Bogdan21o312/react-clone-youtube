import React, {useState} from 'react';
import Categories from "../../components/categories";
import Video from "../../components/video";
import {videoAPI} from "../../sevices/VideoServices";
import {categoriesAPI} from "../../sevices/CategoriesServices";

const Index = () => {
    const [limit, setLimit] = useState(100)
    const {data: videos, error, isLoading} = videoAPI.useFetchAllPostsQuery(limit)
    const {data: categories} = categoriesAPI.useFetchAllPostsQuery(limit)
    const [category, setCategory] = useState("All")
    const [onDisplay, setonDisplay] = useState(videos)

    const handleCategory = (tag: any) => {
        setCategory(tag)
        if (tag === "All") {
            setonDisplay(videos)
            return
        }
        setonDisplay(videos && videos.filter((video) => video.category === tag))
    }
    return (
        <div>
            <Categories category={category} categories={categories} handleCategory={handleCategory}/>
            {onDisplay && onDisplay.map((videos, index) => {
                return <Video videos={videos} key={index}/>
            })}

        </div>
    );
};

export default Index;