import React from "react";
import { render } from "react-dom";
import _ from "lodash";
import YoutubeSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoDisplay from "./components/video_display";
import VideoList from "./components/video_list";

class App extends React.Component {
  state = {
    videos: [],
    query: "",
    selectedVideo: null
  };

  componentWillMount() {
    YoutubeSearch({ key: API_KEY, term: "" }, videos =>
      this.setState({ videos, selectedVideo: videos[0] })
    );
  }

  fetchVideos = () => {
    YoutubeSearch(
      {
        key: API_KEY,
        term: this.state.query
      },
      videos => this.setState({ videos })
    );
  };

  handleUesrInput = query => this.setState({ query }, this.fetchVideos);

  onVideoSelect = selectedVideo => this.setState({ selectedVideo });

  render() {
    const handleUesrInput = _.debounce(this.handleUesrInput, 300);
    return (
      <div className="row">
        <div className="container">
          <h1 className="display-4">YouTube Viewer</h1>
          <SearchBar getUserQuery={handleUesrInput} />
        </div>
        <VideoDisplay video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} getVideo={this.onVideoSelect} />
      </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
