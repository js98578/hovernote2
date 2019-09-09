import React from 'react';
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => {
  console.log(theme)
  return ({
  list: {
    backgroundColor: 'black',
    color: 'white'
  },
    root: {
    backgroundColor: 'black',
      height: '100%'
    },
    textField: {
    color: 'white',
      backgroundColor:'white'
    }
})
}
);

export const Left = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <TextField
          className={classes.textField}
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          margin="normal"
          variant="outlined"
        />
        <List className={classes.list} component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list} component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  )
}
