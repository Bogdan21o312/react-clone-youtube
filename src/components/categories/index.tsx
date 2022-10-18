import React, {FC, useEffect, useState} from 'react';
import {videoAPI} from "../../sevices/VideoServices";
import {categoriesAPI} from "../../sevices/CategoriesServices";
import classes from "./Categories.module.scss"
import Video from "../video";

const Index = () => {
    // const [category, setCategory] = useState("All")
    const [limit, setLimit] = useState(100)
    // const {data: videos, error, isLoading} = videoAPI.useFetchAllPostsQuery(limit)
    const {data: categories} = categoriesAPI.useFetchAllPostsQuery(limit)
    const [categoryId, setCategoryId] = useState("All")
    const [searchValue, setSearchValue] = useState('')
    const [collections, setCollections] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8492/videos?${categoryId ? `category=${categoryId}` : ''}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json)
            })
            .catch((err) => {
                console.warn(err)
                alert('Error')
            })
    }, [categoryId])


    return (
        <div>
            {/*<div className={classes.categoryContainer}>*/}
            {/*    {categories && categories.map((categories, index) =>*/}
            {/*        <h3 className={`${classes.categoryTab} ${category === categories.title && classes.active}`}*/}
            {/*            key={index} onClick={() => handleCategory(categories.title)}>{categories.title}</h3>*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {onDisplay && onDisplay.map(videos =>*/}
            {/*        <Video videos={videos} key={videos.id}/>*/}
            {/*    )}*/}
            {/*</div>*/}
            {categories && categories.map((categories, index) =>
                <h3 className={`${classes.categoryTab} ${categoryId === categories.title ? '' : classes.active}`}
                    key={index}
                    onClick={() => setCategoryId(categories.title)}
                >{categories.title}</h3>
            )}
            <div>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
            {collections.filter((obj: any) => {
                return obj.title.toLowerCase().includes(searchValue.toLowerCase())
            }).map((obj: any, index) => (
                <div key={index}>
                    <p>{obj.title}</p>
                </div>
            ))}
        </div>

    );
};

export default Index;