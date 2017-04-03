import { connect } from 'react-redux';
import Stations from '../components/Stations'

function convertSongsToStations(songsArray) {
  const stations = {};

  songsArray.forEach(function(song) {
    if (stations[song.genre]) {
      stations[song.genre].push(song);
    } else {
      stations[song.genre] = [song]
    }
  });

  return stations;
}

function mapStateToProps(storeState) {
  return {
    stations: convertSongsToStations(storeState.songs)
  };
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);


export default StationsContainer;
