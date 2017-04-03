import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import { connect } from 'react-redux';

class AddSongContainerLocal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    store.dispatch(loadAllSongs());
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const playlistId = this.props.playlists.selected.id;
    const songId = this.state.songId;

    store.dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.props}
        songs={this.props.songs}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    songs: state.songs
    playlists: state.playlists.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchingLyrics: function(artist, song) {
      dispatch(searchLyrics(artist, song));
    }
  };
}

const AddSongContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongContainerLocal);

export default AddSongContainer;
