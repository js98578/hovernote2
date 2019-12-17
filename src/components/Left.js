import React, { useContext, useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PrimaryMenu from './PrimaryMenu';
import Search from './Search';

const Left = () => {

  return (
    <>
      <div className="border-r-1 border-gray-600">
        <Search />
        <PrimaryMenu />

        <Divider />

        <List component="nav" aria-label="secondary notestacks">
          <ListItem button>
            <ListItemText primary="School" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Work" />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Left;
