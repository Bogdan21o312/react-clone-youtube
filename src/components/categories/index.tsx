import React, {useState} from 'react';
import {videoAPI} from "../../sevices/VideoService";
import {categoriesAPI} from "../../sevices/CategoriesService";
import classes from "./Categories.module.scss"

const Index = () => {
    const [category, setCategory] = useState("All")
    const [limit, setLimit] = useState(100)
    const {data: videos, error, isLoading} = videoAPI.useFetchAllPostsQuery(limit)
    const {data: categories} = categoriesAPI.useFetchAllPostsQuery(limit)
    const [onDisplay, setonDisplay] = useState(videos)

    const handleCategory = (tag: any)=>{
        setCategory(tag)
        if (tag === "All") {
            setonDisplay(videos)
            return
        }
        setonDisplay(videos && videos.filter(videos => videos.category === tag))
    }

    return (
        <div className={classes.categoryContainer}>
            {categories && categories.map((categories, index) => {
                return <h3 className={`${classes.categoryTab} ${category === categories.title && classes.active}`} key={index} onClick={() => handleCategory(categories.title)}>{categories.title}</h3>
            })}
        </div>
    );
};

export default Index;