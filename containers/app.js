import React, { Component  } from 'react';
import {connect} from 'react-redux';
import GithuberList from '../components/githuber_list';

function mapStateToProps(state) {
  return {githubers: state.githubers};
}


class App extends Component {
  render() {
    return <GithuberList githubers={this.props.githubers}/>;
  }
};

export default connect(mapStateToProps)(App)