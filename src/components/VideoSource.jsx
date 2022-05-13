import React, { useEffect, useRef, useState } from 'react';

export default function VideoSource({ url }) {

    const [videoContent, setVideoContent] = useState();
    const videoRef = useRef();

    useEffect(() => {
        // webpack doesn't work when the url variable represents the whole path
        import('../assets/videos/' + url).then(data => setVideoContent(data.default));
    },[url]);


    useEffect(() => {
        videoRef.current?.load();
    }, [videoContent]);


    if (videoContent){
        return (
            <>
                <video controls ref={videoRef}>
                    <source src={videoContent} type='video/mp4' />
                </video>
            </>
        )
    }

    return "";
}
