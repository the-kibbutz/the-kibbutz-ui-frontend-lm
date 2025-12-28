'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { paletteColors } from '@/theme/theme';

export default function MobileNav() {
    const [value, setValue] = React.useState(2); // Default to Home (index 2)

    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', bgcolor: paletteColors.lavenderBlush, borderRadius: 3, overflow: 'hidden', border: 1, borderColor: 'divider' }}>
            {/* Content Area Placeholder */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                <Box sx={{ textAlign: 'center', opacity: 0.6 }}>
                    <HomeIcon sx={{ fontSize: 48, color: paletteColors.steelBlue, mb: 1 }} />
                    <div style={{ fontWeight: 'bold', color: paletteColors.darkSlateGray }}>Content Area</div>
                </Box>
            </Box>

            {/* Bottom Nav */}
            <Paper sx={{ position: 'relative', bottom: 0, left: 0, right: 0, borderRadius: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels={false}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        bgcolor: 'primary.main',
                        '& .MuiBottomNavigationAction-root': { color: 'rgba(255,255,255, 0.6)' },
                        '& .Mui-selected': { color: '#ffffff' }
                    }}
                >
                    <BottomNavigationAction label="Messages" icon={<ChatIcon />} />
                    <BottomNavigationAction label="Friends" icon={<PeopleIcon />} />
                    <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 32 }} />} />
                    <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} />
                    <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
