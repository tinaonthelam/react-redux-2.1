import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import {connect} from 'react-redux';

class FilterableArtistsContainerLocal extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    const filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().match(this.state.inputValue.toLowerCase()));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
      <Artists artists={filteredArtists} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists.list
  };
}

const FilterableArtistsContainer = connect(
  mapStateToProps
)(FilterableArtistsContainerLocal);

export default FilterableArtistsContainer;
