import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    var params = {
      key: YOUTUBE_API_KEY,
      query: q
    };
    searchYouTube(params, function(videos) {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  };
};

export default handleVideoSearch;
