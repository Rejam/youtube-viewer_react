import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = ({ videos, getVideo }) =>
  <ul className="list-group col-md-4">
  { videos.map(video => 
    <VideoListItem 
      key={video.etag} 
      video={video} 
      getVideo={ getVideo }/>)
  }
  </ul>

export default VideoList