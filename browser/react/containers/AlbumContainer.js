import React, {Component} from 'react';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

const AlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);


export default AlbumContainer;
