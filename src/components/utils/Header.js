import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import CreatePostModal from './CreatePostModal';

const Header = () => {
  const [state, setState] = useState({
    bottom: false,
  });
  const [open, setOpen] = useState(false);


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (text) => {
    console.log(text)
    if (text === 'Post') {
      setOpen(true);
    }
  }

  const list = (anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role='presentation'
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        component='div'
        sx={{
          textAlign: 'center',
          padding: '15px 0 10px 0',
          fontSize: '1.2rem',
          fontWeight: '500',
        }}
        >
        Create
      </Box>
      <List>
        {['Post', 'Reels', 'Story'].map((text, index) => (
          <ListItem button key={text} onClick={() => handleClick(text)}>
            <ListItemIcon on>
              {index === 0 && <GridOnOutlinedIcon />}
              {index === 1 && <InboxIcon />}
              {index === 2 && <MusicVideoIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ pb: 7 }}>
        <Paper
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 1100,
          }}
          elevation={0}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Box
              sx={{
                marginLeft: "15px",
                alignSelf: "center",
                fontFamily: "cookie",
                fontSize: "2rem",
              }}
            >
              Instagrum
            </Box>
          </Link>

          <Box sx={{ width: 250 }}>
            <BottomNavigationAction icon={<PostAddIcon />} />
            <BottomNavigationAction icon={<FavoriteBorderOutlinedIcon />} />
            <Link to="/mesenger">
              <BottomNavigationAction icon={<ChatOutlinedIcon />} />
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Header;
