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
import { useEffect, useState } from 'react';

import { mockConversations } from '../mockData/mockConversations';
import { SettingsModal } from './SettingsModal';

export default function Menu(props) {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
	const [convs, setConvs] = useState([]);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

	useEffect(() => {
		fetch('http://localhost:8000/db/get-conversations-noauth', {
			headers: {
				"Accept": "application/json",
			},
			method: "GET",
		})
		.then(response => response.json())
		.then(data => {
			setConvs([]);
			for(const cc of data.conversations){
				setConvs(convs => [cc, ...convs]);
			}
		})
		console.log(convs);
	}, []);

	const newConv = () =>{
		fetch('http://127.0.0.1:8000/db/create-conversation/', {
			headers: {
				"Accept": "application/json",
			},
			method: "POST",
		})
		.then(response => response.json())
		.then(data => {
			if(data.message == false){
				console.log("create conversation error");
			}
			else{
				props.setSessionId(data.conversation_id);
			}
		});
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
          <ListItemButton onClick={()=> newConv}>
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
          {convs.map((conversation, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => props.setSessionId(conversation.conversation_id)}>
                <ListItemText
                    primary={conversation.title}
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
