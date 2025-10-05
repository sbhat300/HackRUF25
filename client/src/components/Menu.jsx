import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

import { mockConversations } from '../mockData/mockConversations';
import { SettingsModal } from './SettingsModal';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

	const allConv = () => {
		fetch
	}
  
  const DrawerList = (
    <Box 
      sx={{ 
        width: 350, 
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }} 
      role="presentation" 
      onClick={toggleDrawer(false)}
    >
      {/* Fixed header with New Conversation */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => }>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="New conversation" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      
      {/* Scrollable conversations list */}
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <List>
          {mockConversations.map((conversation, index) => (
            <ListItem key={conversation.id} disablePadding>
              <ListItemButton>
                <ListItemText
                    primary={conversation.lastInput}
                    slotProps={{
                        primary: {
                            noWrap: true,
                            sx: { 
                                maxWidth: 250,  // adjust to fit your drawer width
                                overflow: 'hidden', 
                                textOverflow: 'ellipsis', 
                                whiteSpace: 'nowrap' 
                            }
                        }
                    }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      
      {/* Fixed footer with Settings */}
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>{
            setSettingsOpen(true);
            setOpen(false);
            }}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  
  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}
