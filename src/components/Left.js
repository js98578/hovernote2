import React from 'react';
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

const useStyles = makeStyles(theme => {
  console.log(theme);
  return ({
    list: {
      // backgroundColor: 'black',
      // color: 'white',
    },
    divSearch: {
      // backgroundColor: 'black',
      // height: '100%',
      padding: '5px',
    },
    divLeft: {},
    paperSearch: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center'
      ,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  });
});

export const Left = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.divLeft}>
        <div className={classes.divSearch}>
          <Paper className={classes.paperSearch}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <MenuIcon/>
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon/>
            </IconButton>
          </Paper>
        </div>
        <List className={classes.list} component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="Inbox"/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drafts"/>
          </ListItem>
        </List>
        <Divider/>
        <List className={classes.list} component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash"/>
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  );
};

