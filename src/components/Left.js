import React, { useContext, useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotesIcon from '@material-ui/icons/Notes';
import NoteIcon from '@material-ui/icons/Note';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { Menu, MenuItem } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { logout } from '../services/loginService';
import { AuthContext } from '../contexts/AuthContext';


const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    list: {
      // backgroundColor: 'black',
      // color: 'white',
    },
    divSearch: {
      // backgroundColor: 'black',
      // height: '100%',
      padding: '5px'
    },
    divLeft: {},
    paperSearch: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  };
});

const Left = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleSearchMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    props.history.push('/');
  }

  return (
    <>
      <div className="border-r-1 border-gray-600">
        <div className={classes.divSearch}>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleSearchMenuClose}
          >
            <MenuItem onClick={handleSearchMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleSearchMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
          <Paper className={classes.paperSearch}>
            <IconButton
              className={classes.iconButton}
              onClick={e => handleSearchMenu(e)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        <List className={classes.list} component="nav" aria-label="main mailbox folders">
          <ListItem button>
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

        <Divider />

        <List className={classes.list} component="nav" aria-label="secondary mailbox folders">
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

export default withRouter(Left);
