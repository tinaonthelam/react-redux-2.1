import React, {Component} from 'react';
import Albums from '../components/Albums';
import {connect} from 'react-redux';
import {convertAlbums} from '../utils'


function mapStateToProps(state, ownProps) {
  console.log(state)
  return {
    albums: state.albums.list
  };
}


const AlbumsContainer = connect(
  mapStateToProps
)(Albums);

export default AlbumsContainer;
