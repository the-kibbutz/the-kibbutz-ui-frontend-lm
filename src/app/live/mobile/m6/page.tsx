'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ChatList from '@/components/widgets/ChatList';
import TopBar from '@/components/layout/TopBar';

export default function MobileChatPage() {
    const [value, setValue] = React.useState(1); // Assuming 'Search' or 'Activity' might be the chat tab, or just arbitrary for demo

    return (
        <Box sx={{ pb: 7, minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Top Bar (Reuse) */}
            <TopBar />

            {/* Main Content: Chat List */}
            {/* ChatList usually has its own paper/elevation, we might want to strip that for mobile full screen */}
            <Box sx={{ p: 0 }}>
                <ChatList />
            </Box>

            {/* Bottom Navigation (Consistent with m1) */}
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                    <BottomNavigationAction label="Create" icon={<AddCircleIcon color="primary" sx={{ fontSize: 40, mt: -2 }} />} />
                    <BottomNavigationAction label="Activity" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
