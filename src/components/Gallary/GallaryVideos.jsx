
import React, { useContext } from 'react';
import './gallaryVideos.css';

// import Temp from '../../assets/images/auth.svg'
// import Test1 from '../../assets/images/test1.jpg';
// import Test2 from '../../assets/images/test2.jpeg';
// import Test3 from '../../assets/images/test3.jpeg';
import { VideoContext } from '../../context/VideosProvier';
import VideoCard from '../VideoCard';


export default function Gallary() {

    const { videos } = useContext(VideoContext)

    return (
        <>
            <main id='video-list'>
                <h2>Video Gallary</h2>

                <div id="videos">
                    <div className="row row-cols-1 row-cols-md-4 g-4">

                        {videos.map((video, index) => <div className='col'  key={index}> <VideoCard video={video} key={index} /> </div>)}

                    </div>
                </div>
            </main>
        </>
    )
}
