import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Search = props => {

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleSearchMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="p-2 rounded-lg border-green-500 border">
      <input></input>
    </div>
  );
};

export default withRouter(Search);
