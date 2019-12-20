import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const NoteStackList = () => {
  return (
    <List component="nav" aria-label="secondary notestacks">
      <ListItem button>
        <ListItemText primary="School" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Work" />
      </ListItem>
    </List>
  );
};

export default NoteStackList;
