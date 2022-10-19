import React, {FC} from 'react';
import classes from "./Categories.module.scss"

interface CategoriesProps {
    categories: any,
    category: string,
    handleCategory: any
}

const Index: FC<CategoriesProps> = ({categories, category, handleCategory}) => {

    return (
        <div>
            <div className={classes.categoryContainer}>
                {categories && categories.map((categories: any, index: any) =>
                    <h3 className={`${classes.categoryTab} ${category === categories.title && classes.active}`}
                        key={index} onClick={() => handleCategory(categories.title)}>{categories.title}</h3>
                )}
            </div>
        </div>

    );
};

export default Index;