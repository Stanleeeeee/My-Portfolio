import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarItems } from './const/navbarList';
import profile from '../../assets/profile2.webp.jpg';
import { styles } from '../../styles/sidebarStyles';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <Toolbar sx={styles.toolbar}>
        <Avatar alt="Ezeoke Stanley" src={profile} sx={styles.avatar} />
      </Toolbar>
      <Divider />
      <List>
        {navbarItems.map((item) => (
          <ListItem
            Button
            sx={styles.listItem}
            key={item.id}
            onClick={() => navigate(item.route)}
          >
            <ListItemButton sx={styles.icon}>
              <ListItemIcon sx={styles.listItemButton}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Navbar;
