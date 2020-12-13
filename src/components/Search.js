import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Search = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleSearchMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className=" p-2">
      
    </div>
  );
};

export default withRouter(Search);
