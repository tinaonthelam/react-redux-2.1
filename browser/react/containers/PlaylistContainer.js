import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    selectedPlaylist: state.playlists.selected,
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
    }
  };
}

const PlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);

export default PlaylistContainer;
