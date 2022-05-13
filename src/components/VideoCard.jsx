import React from 'react';
import { useNavigate } from 'react-router-dom';
import Thumbnail from './Thumbnail';

export default function VideoCard({ video }) {

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate(`/gallary/video/${video.id}`, {replace: true})
    }

    return (
        <>
            <div className="card" onClick={handleClick}>
                    <div className='thumbnail'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn thumbnail-play-icon" viewBox="0 0 16 16" >
                            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>

                        <Thumbnail imagePath={video.thumbnail} />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{video.title}</h5>
                        <small className="card-text video-description">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</small>
                    </div>
            </div>


        </>
    )
}
