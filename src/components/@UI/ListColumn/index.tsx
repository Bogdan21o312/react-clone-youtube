import React, {FC, useState} from 'react';
import classes from "./ListColumn.module.scss"
import {Link} from "react-router-dom";

interface ListColumnProps {
    icon: string,
    text: string | number,
    route?: string
}

const Index: FC<ListColumnProps> = ({icon, text, route}) => {
    const [selectedId, setSelectedId] = useState("home")
    return (
        <>
            {/*<Link to={route}/>*/}
            <ul className={classes.ListColumn}>
                <li className={classes.ListColumnItem}>
                   <div><img src={icon} alt="Icon"/></div><span>{text}</span>
                </li>
            </ul>
        </>

    );
};

export default Index;