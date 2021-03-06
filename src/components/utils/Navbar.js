import React, { useState, useRef, useContext } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import user1 from '../../images/profiles/pro1.jpg';
import { AuthContext } from '../../context/AuthContext';

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  const { user } = useContext(AuthContext);

  return (
    <>
      <Box ref={ref}>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1100, height: '48px' }}
          elevation={1}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to='/'>
              <BottomNavigationAction icon={<HomeIcon />} />
            </Link>
            <Link to='/searchfriend'>
              <BottomNavigationAction icon={<SearchIcon />} />
            </Link>
            <Link to='/reels'>
              <BottomNavigationAction icon={<MovieCreationIcon />} />
            </Link>
            <Link to='/user'>
              <Box
                sx={{
                  width: '80px',
                  height: '56px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ width: 24, height: 24 }} src={user.profileImg} />
              </Box>
            </Link>
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export default Navbar;
