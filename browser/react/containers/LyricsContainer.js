import React, {Component} from 'react';
import Lyrics from '../components/Lyrics';
import {connect} from 'react-redux';

import {searchLyrics} from '../action-creators/lyrics';

class LyricsContainerLocal extends Component {
  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.searchingLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        lyrics={this.props.lyrics}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    lyrics: state.lyrics.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchingLyrics: function(artist, song) {
      dispatch(searchLyrics(artist, song));
    }
  };
}

const LyricsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LyricsContainerLocal);

export default LyricsContainer;
