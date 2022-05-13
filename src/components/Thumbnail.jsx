import React, { useEffect, useState } from 'react'

export default function Thumbnail({imagePath}) {

    const [thumbnail, setThumbnail] = useState();

    useEffect(() => {
        import('../assets/images/'+ imagePath).then(image => setThumbnail(image.default));
    });

  return (
    <>
        {thumbnail ? (<img src={thumbnail} className="card-img-top video-thumbnail" alt="..." />) : ""}
    </>
  )
}
