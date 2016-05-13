import React, { Component  } from 'react';
import { fetchGithubers } from '../actions';

export default class GithuberList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGithubers())
  }

  render() {
    const { githubers } = this.props;
    return (
      <ul>
        {
          githubers.map( (githuber, index) => {return <li key={index}> {githuber.login } </li>})
        }
      </ul>
    );
  }
};