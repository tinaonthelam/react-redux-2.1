import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    genreName: ownProps.params.genreName
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);


export default StationContainer;
