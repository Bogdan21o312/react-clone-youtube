import React, {FC} from 'react';
import classes from "./Video.module.scss"
import {IVideo} from "../../models/IVideo";

interface VideoProps {
    videos: IVideo,
}

const Index: FC<VideoProps> = ({videos}) => {
    const countViews = (number: number) => {
        if (number.toString().length === 4) {
            return number.toString().slice(0, 1) + 'K'
        }
        if (number.toString().length === 5) {
            return number.toString().slice(0, 2) + 'K'
        }
        if (number.toString().length === 6) {
            return number.toString().slice(0, 3) + 'K'
        }
        if (number.toString().length === 7) {
            return number.toString().slice(0, 1) + 'M'
        }
        if (number.toString().length === 8) {
            return number.toString().slice(0, 2) + 'M'
        }
    }
    return (
        <div className={classes.videoContainer}>
            <div className={classes.videoBox}>
                <div className={classes.thumbnailInfo}>
                    <img src={videos.image} alt="Thumbnail" className={classes.videoThumbnail}/>
                    <p>{videos.duration}</p>
                </div>
                <div className={classes.videoInfo}>
                    <img src={videos.logo} alt="Channel Logo" className={classes.videoChannel}/>
                    <div className={classes.videoInfoBox}>
                        <h2 className={classes.videoInfoBoxTitle}>{videos.title.length <= 70 ? videos.title : `${videos.title.substr(0, 70)}...`}</h2>
                        <h3 className={classes.videoInfoBoxSubTitle}
                            title={videos.channel}>{videos.channel} {videos.isVerified &&
                            <span className={`${classes.active}`}>check_circle</span>}</h3>
                        <p className={classes.videoInfoBoxText}>{countViews(videos.views)} views
                            • {videos.uploadTime} ago</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Index;


