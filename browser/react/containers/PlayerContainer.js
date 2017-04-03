import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import { connect } from 'react-redux';

class PlayerContainerLocal extends Component {
  componentDidMount() {
      AUDIO.addEventListener('ended', this.next);
      AUDIO.addEventListener('timeupdate', () => {
        store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
      });
  }

  render() {
    return <Player {...this.props} />
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    currentSongList: state.player.currentSong,
    progress: state.player.progress
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    },
    next: function() {
      dispatch(next())
    },
    prev: function() {
      dispatch(previous())
    }
  };
}

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainerLocal);


export default PlayerContainer;
