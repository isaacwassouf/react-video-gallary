import React from 'react'

export default function Comment({comment}) {
    return (
        <>
            <div className="card mb-3 comment">
                <div className="card-body">
                    <h6 className="card-title">{comment.email}</h6>
                    <p className="card-text">{comment.comment}</p>
                    <p className="card-text"><small className="text-muted">{new Date(comment.createdAt).toDateString()}</small></p>
                </div>
            </div>
        </>
    )
}
