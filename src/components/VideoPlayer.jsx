import VideoDetails from './VideoDetails.js';

var VideoPlayer = (props) => {
  var content = '';
  var contentTitle = '';
  var contentDescription = '';
  if (props.video.id) {
    content = props.video.id.videoId;
    contentTitle = props.video.snippet.title;
    contentDescription = props.video.snippet.description;
  }
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + content } allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{contentTitle}</h3>
        <div><VideoDetails likes={props.video} /></div>
        <div>{contentDescription}</div>
      </div>
    </div>
  );
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
