import React, { Component  } from 'react';

export default class GithuberList extends Component {
  render() {
    const { githubers } = this.props;
    return (
      <ul>
        {
          githubers.map( (githuber, index) => {return <li key={index}> githuber </li>})
        }
      </ul>
    );
  }
};