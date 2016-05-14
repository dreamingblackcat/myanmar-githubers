import React, { Component  } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import GithuberList from '../components/githuber_list';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const mapStateToProps = (state) => {
  return {githubers: state.githubers};
}


class App extends Component {

  static get childContextTypes() { 
    return { muiTheme: React.PropTypes.object.isRequired }
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  }

  render() {
    return <GithuberList githubers={this.props.githubers} dispatch={this.props.dispatch}/>;
  }
};


export default connect(mapStateToProps)(App)