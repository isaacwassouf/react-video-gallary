
import React, { useContext, useEffect, useRef, useState } from 'react';
import './video.css';
import { useParams } from 'react-router-dom';
import { VideoContext } from '../../context/VideosProvier';
import { AuthContext } from '../../context/AuthProvider';
import Comment from '../Comment/Comment';
import VideoSource from '../VideoSource';
import VideoCard from '../VideoCard';

export default function Video() {

    const { videoId } = useParams();
    const { user } = useContext(AuthContext);
    const [video, setVideo] = useState();
    const { videos, setVideos } = useContext(VideoContext);
    const addCommentRef = useRef();

    const handleAddComment = (event) => {
        event.preventDefault();

        const payload = {
            comment: addCommentRef.current.value,
            email: user.email,
            createdAt: Date.now()
        }

        addCommentRef.current.value = "";

        video.comments.unshift(payload);
        const restVideos = videos.filter(video => video.id !== videoId);
        setVideos([
            ...restVideos,
            video
        ]);
    }

    useEffect(() => {
        const videoData = videos.filter((v) => v.id === videoId)[0];
        setVideo(videoData);
    }, [videos,videoId]);


    if (video)
        return (
            <>
                <div id="video-container">
                    <section id='video-section'>
                        <VideoSource url={video.url} />

                        <div className="video-meta">
                            <div className="video-title">
                                <h4>{video.title}</h4>
                            </div>

                            <div className="video-description">
                                <p>{video.description}</p>
                            </div>

                        </div>

                        <div className="comments-section">
                            <div className="mb-3">
                                <div id="comments-section-header">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
                                    <button className="btn btn-outline-success" type="submit" onClick={handleAddComment}>Comment</button>
                                </div>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Add a comment...' ref={addCommentRef}></textarea>
                            </div>


                            <div className="comments">

                                {video.comments.map((comment, index) => <Comment comment={comment} key={index} />)}

                            </div>
                        </div>

                    </section>

                    <section id='related-videos-section'>
                        <div className="related-videos">


                            {
                                video.relatedVideos.map((id, index) => {
                                    return (<VideoCard video={videos.filter(v => v.id === id)[0]} key={index} />)
                                })
                            }

                        </div>
                    </section>
                </div>
            </>
        )

    return (
        <>
            Getting the video
        </>
    )
}
