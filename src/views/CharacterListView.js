import React from 'react';
import { connect } from 'react-redux';

// import { CharacterList } from "../components";
// import actions
// import { FETCHING, SUCCESS, FAILURE } from '../actions';
import CharacterList from '../components/CharacterList';
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    console.log(`CDM: CharacterList Container`);
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div> loading ... </div>;
    }

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(`Current state: ` + state.characters);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.isLoading,
    error: state.charsReducer.error
  };
};

export default connect(
  // null /* mapStateToProps replaces null here */,
  mapStateToProps,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
