import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import NoteIcon from '@material-ui/icons/Note';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { NotesContext } from '../contexts/NotesContext';

const PrimaryMenu = () => {
  const { setNoteNew } = useContext(NotesContext);
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem
        button
        onClick={() => {
          setNoteNew(true);
        }}
      >
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="New note" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CreateNewFolderIcon />
        </ListItemIcon>
        <ListItemText primary="New stack" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NotesIcon />
        </ListItemIcon>
        <ListItemText primary="All notes" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  );
};

export default PrimaryMenu;
