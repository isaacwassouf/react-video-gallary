
import React, { createContext, useState } from 'react';


export const VideoContext = createContext();

export default function VideosProvider({children}) {
    const [videos, setVideos] = useState([
        {
            id: "1",
            url: 'stock1.mp4',
            thumbnail: 'thumb1.png',
            title: 'Nature',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto similique impedit eos nam! Vel itaque qui minima fugiat consequatur expedita rerum alias. Molestiae vitae odio libero ipsa, corrupti beatae.', 
            comments: [
                {
                    email: 'isaacwassouf@gmail.com',
                    comment: 'Wow, cool!',
                    createdAt: 1652222446380
                }
            ],

            relatedVideos: ["2","3"]
        },
        
        {
            id: "2",
            url: 'stock2.mp4',
            thumbnail: 'thumb2.png',
            title: 'Snow',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto similique impedit eos nam! Vel itaque qui minima fugiat consequatur expedita rerum alias. Molestiae vitae odio libero ipsa, corrupti beatae.', 
            comments: [
                {
                    email: 'shazahinnawi@gmail.com',
                    comment: 'Wow, nice!',
                    createdAt: 1652222446380 
                }
            ],
            relatedVideos: ["1","3"]
        },

        {
            id: "3",
            url: 'stock3.mp4',
            thumbnail: 'thumb3.png',
            title: 'Sunset',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto similique impedit eos nam! Vel itaque qui minima fugiat consequatur expedita rerum alias. Molestiae vitae odio libero ipsa, corrupti beatae.', 
            comments: [
                {
                    email: 'shazahinnawi@gmail.com',
                    comment: 'Amazing view!',
                    createdAt: 1652222446380 
                }
            ],
            relatedVideos: ["1","4"]
        },


        {
            id: "4",
            url: 'stock4.mp4',
            thumbnail: 'thumb4.png',
            title: 'Type Writer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto similique impedit eos nam! Vel itaque qui minima fugiat consequatur expedita rerum alias. Molestiae vitae odio libero ipsa, corrupti beatae.', 
            comments: [
                {
                    email: 'shazahinnawi@gmail.com',
                    comment: 'Looks vintage!',
                    createdAt: 1652222446380 
                }
            ],
            relatedVideos: ["2","3"]
        },

        {
            id: "5",
            url: 'stock5.mp4',
            thumbnail: 'thumb5.png',
            title: 'Swimming Pool',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto similique impedit eos nam! Vel itaque qui minima fugiat consequatur expedita rerum alias. Molestiae vitae odio libero ipsa, corrupti beatae.', 
            comments: [
                {
                    email: 'isaacwassouf@gmail.com',
                    comment: 'Wow, nice!',
                    createdAt: 1652222446380 
                }
            ],
            relatedVideos: ["2","4"]
        }

    ]);

    return (
        <VideoContext.Provider value={{videos, setVideos}}>
            {children}
        </VideoContext.Provider>
    )
}
