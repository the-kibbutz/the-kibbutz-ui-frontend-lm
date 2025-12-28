'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

const MENU_ITEMS = [
    { label: 'My Feed', icon: <HomeIcon /> },
    { label: 'My Chats', icon: <ChatIcon /> },
    { label: 'Friends', icon: <PeopleIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> },
];

export default function AppSidebar() {
    return (
        <Paper elevation={0} sx={{ width: 280, height: '100%', borderRight: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column' }}>
            {/* Profile Summary Section */}
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: 'secondary.main' }}>U</Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>User Name</Typography>
                <Typography variant="body2" color="text.secondary">@handle</Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <Typography variant="caption" color="text.secondary"><strong>120</strong> Followers</Typography>
                    <Typography variant="caption" color="text.secondary"><strong>45</strong> Following</Typography>
                </Box>
            </Box>

            <Divider />

            {/* Navigation Menu */}
            <List sx={{ px: 2, py: 2 }}>
                {MENU_ITEMS.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton sx={{ borderRadius: 2 }}>
                            <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}
