'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; // Using Outlined for "Feed/Home"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'; // Placeholder for Logo/Menu icon

export default function BottomNav() {
    const [value, setValue] = React.useState(2); // Default to Home (index 2)

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    height: 64,
                    '& .Mui-selected': { color: 'primary.main' }
                }}
            >
                <BottomNavigationAction label="Messages" icon={<ChatBubbleOutlineIcon />} />
                <BottomNavigationAction label="Friends" icon={<PeopleOutlineIcon />} />
                <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon sx={{ fontSize: 32 }} />} />
                <BottomNavigationAction label="Notifs" icon={<NotificationsNoneIcon />} />
                <BottomNavigationAction label="Menu" icon={<WidgetsOutlinedIcon />} />
            </BottomNavigation>
        </Paper>
    );
}
