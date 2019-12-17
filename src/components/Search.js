import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Menu, MenuItem } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { logout } from '../services/loginService';

const Search = props => {
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
  };

  return (
    <div className="p-2">
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
      <Paper className="p-2 flex align-center">
        <IconButton className="p-2" onClick={e => handleSearchMenu(e)} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className="flex-1 ml-1"
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton className="p-4" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default withRouter(Search);
