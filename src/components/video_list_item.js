import React from 'react'

const VideoListItem = ({ video, getVideo }) => {
  const { url: imageUrl } = video.snippet.thumbnails.default
  const { title } = video.snippet
  const onVideoClick = e => getVideo(video)

  return (
    <button
      className="list-group-item list-group-item-action mb-3"
      onClick={onVideoClick}
    >
      <div
        className="video-list card"
        style={{ border: "none" }}
      >
        <img 
          className="card-img-top"
          src={imageUrl}
          alt="video thumbnail"
        />
        <div className="card-body">
          <p>{title}</p>
        </div>
      </div>
    </button>
  )
}

export default VideoListItem
