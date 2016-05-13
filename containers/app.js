import React, { Component  } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import GithuberList from '../components/githuber_list';

const mapStateToProps = (state) => {
  return {githubers: state.githubers};
}


class App extends Component {
  render() {
    return <GithuberList githubers={this.props.githubers} dispatch={this.props.dispatch}/>;
  }
};

export default connect(mapStateToProps)(App)