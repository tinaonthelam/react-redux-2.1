import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';
import { connect } from 'react-redux';
import {toggleSong} from '../action-creators/player';


function mapStateToProps(state, ownProps) {
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    currentSongList: state.player.currentSong,
    progress: state.player.progress,
    selectedArtist: state.artists.selected
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

export default ArtistContainer;
