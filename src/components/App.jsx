import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

//import debounce from 'lodash.debounce';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: exampleVideoData[0]
    };
  }
  onVideoTitleClick(videoItem) {
    this.setState({currentVideo: videoItem});
  }

  onSearchInput(e) {
    // e.target.value
    var debounceFunc = searchYouTube(e.target.value, (data) => { this.setState({videoList: data}); });
    _.debounce(() => debounceFunc(), 2000);
  }

  componentDidMount() {
    searchYouTube('apple iphone 14', (data) => { this.setState({videoList: data}); });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onChange={this.onSearchInput.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} onClick={this.onVideoTitleClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
