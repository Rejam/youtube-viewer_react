import React from "react";

const VideoDisplay = ({ video }) => {
  if (!video) {
    return <div className="container">Loading...</div>;
  }

  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8 pb-5">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details pt-3">
        <div>{video.snippet.title}</div>
        <div> {video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDisplay;
