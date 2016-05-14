import React, { Component  } from 'react';
import { fetchGithubers } from '../actions';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


export default class GithuberList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGithubers())
  }

  render() {
    const { githubers } = this.props;

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '600px',
        overflowY: 'auto',
        marginBottom: 24,
      },
    };

    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
        {githubers.map( (githuber, index) => (
          <GridTile
            key={index}
            title={githuber.login}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            actionPosition="left"
            titlePosition="top"
            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={1}
          >
            <img src={githuber.avatar_url} />
          </GridTile>
        ))}
        </GridList>
      </div>
    );
  }
};


