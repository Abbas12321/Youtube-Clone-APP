import React from "react";

import { Grid } from '@mui/material';

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo}) =>{
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onSelectVideo} key={id} video={video} /> )
    return (
        <Grid container spacing={10}>
        {listOfVideos}
        </Grid>
    )
}

export default VideoList;