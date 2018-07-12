import React from 'react'

const VideoListItem = ({ video, getVideo }) => {
  const { url: imageUrl } = video.snippet.thumbnails.default
  const { title } = video.snippet
  const onVideoClick = e => getVideo(video)

  return(
    <button
      className="list-group-item list-group-item-action mb-3" 
      onClick={ onVideoClick }>
      <div className="video-list media">
        <img 
          src={imageUrl} 
          alt="video thumbnail" 
          className="mr-3"/>

        <div className="media-body">
          <div>{ title }</div>
        </div>

      </div>
    </button>
  )
}

export default VideoListItem