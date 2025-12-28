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
import Typography from '@mui/material/Typography';
import TopBar from '@/components/layout/TopBar';

export default function MobileNavigationPage() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ pb: 7, minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Top Bar (Mobile styled) */}
            <TopBar />

            {/* Main Content Area */}
            <Box sx={{ p: 2 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Mobile Feed
                </Typography>
                {[1, 2, 3].map((item) => (
                    <Paper key={item} sx={{ mb: 2, borderRadius: 0, mx: -2, width: 'auto', p: 0 }} elevation={1}>
                        {/* Post Header */}
                        <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.light', mr: 1.5 }} />
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle2" fontWeight="bold">Member Name</Typography>
                                <Typography variant="caption" color="text.secondary">2 hours ago</Typography>
                            </Box>
                            <Box sx={{ width: 4, height: 4, bgcolor: 'text.disabled', borderRadius: '50%', mx: 0.5 }} />
                        </Box>

                        {/* Post Image */}
                        <Box sx={{ height: 250, bgcolor: 'action.hover', width: '100%' }} />

                        {/* Post Actions */}
                        <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <FavoriteIcon color="action" />
                            <Box sx={{ width: 24, height: 24, bgcolor: 'action.disabled', borderRadius: '50%' }} /> {/* Comment Icon placeholder */}
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ width: 24, height: 24, bgcolor: 'action.disabled', borderRadius: '4px' }} /> {/* Bookmark Icon placeholder */}
                        </Box>

                        {/* Post Content */}
                        <Box sx={{ px: 2, pb: 2 }}>
                            <Typography variant="body2">
                                <Box component="span" fontWeight="bold" mr={1}>Member Name</Box>
                                Checking out the new community center! Looks amazing. #KibbutzLife
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Box>

            {/* Bottom Navigation */}
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
