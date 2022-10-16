import React, {useState} from 'react';
import {videoAPI} from "../../sevices/VideoServices";
import {categoriesAPI} from "../../sevices/CategoriesServices";
import classes from "./Categories.module.scss"
import Video from "../video";

const Index = () => {
    const [category, setCategory] = useState("All")
    const [limit, setLimit] = useState(100)
    const {data: videos, error, isLoading} = videoAPI.useFetchAllPostsQuery(limit)
    const {data: categories} = categoriesAPI.useFetchAllPostsQuery(limit)
    const [onDisplay, setonDisplay] = useState(videos)

    const handleCategory = (tag: string) => {
        setCategory(tag)
        if (tag === "All") {
            setonDisplay(videos)
            return
        }
        setonDisplay(videos && videos.filter(videos => videos.category === tag))
    }

    return (
        <div>
            <div className={classes.categoryContainer}>
                {categories && categories.map((categories, index) =>
                    <h3 className={`${classes.categoryTab} ${category === categories.title && classes.active}`}
                        key={index} onClick={() => handleCategory(categories.title)}>{categories.title}</h3>
                )}
            </div>
            <div>
                {onDisplay && onDisplay.map(videos =>
                    <Video videos={videos} key={videos.id}/>
                )}
            </div>
        </div>
    );
};

export default Index;