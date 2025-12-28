'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VerifiedIcon from '@mui/icons-material/Verified';
import EditIcon from '@mui/icons-material/Edit';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import TopBar from '@/components/layout/TopBar'; // Reusing TopBar for consistency, though designs might vary

export default function MobileProfilePage() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 4 }}>
            {/* Simple Top Bar logic or just back button could be here */}
            <TopBar />

            {/* Profile Header */}
            <Box sx={{ bgcolor: 'background.paper', p: 3, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ width: 80, height: 80, mr: 2, bgcolor: 'primary.main', fontSize: 32 }}>L</Avatar>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography variant="h6" fontWeight="bold">Lior On</Typography>
                                <VerifiedIcon color="primary" sx={{ fontSize: 16 }} />
                            </Box>
                            <Typography variant="body2" color="text.secondary">@lioron</Typography>
                        </Box>
                    </Box>
                    <Button variant="outlined" size="small" startIcon={<EditIcon />}>Edit</Button>
                </Box>

                {/* Stats */}
                <Box sx={{ display: 'flex', justifyContent: 'space-around', py: 2, borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" fontWeight="bold">1,240</Typography>
                        <Typography variant="caption" color="text.secondary">Followers</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" fontWeight="bold">850</Typography>
                        <Typography variant="caption" color="text.secondary">Following</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" fontWeight="bold">12</Typography>
                        <Typography variant="caption" color="text.secondary">Activities</Typography>
                    </Box>
                </Box>
            </Box>

            {/* Tips Banner */}
            <Paper elevation={0} sx={{ mx: 2, mb: 3, p: 2, bgcolor: '#e3f2fd', border: '1px dashed #2196f3', display: 'flex', alignItems: 'center' }}>
                <TipsAndUpdatesIcon color="primary" sx={{ mr: 2 }} />
                <Box>
                    <Typography variant="subtitle2" fontWeight="bold" color="primary">Improve Your Profile</Typography>
                    <Typography variant="caption" color="text.secondary">Add a bio and profile picture to stand out.</Typography>
                </Box>
            </Paper>

            {/* Content Tabs */}
            <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" textColor="primary" indicatorColor="primary">
                    <Tab label="My Activities" />
                    <Tab label="Saved" />
                    <Tab label="About" />
                </Tabs>
                <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    {tabValue === 0 && (
                        <>
                            <Box sx={{
                                width: 80,
                                height: 80,
                                bgcolor: 'action.hover',
                                borderRadius: '50%',
                                mb: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <TipsAndUpdatesIcon sx={{ fontSize: 40, color: 'text.disabled' }} />
                            </Box>
                            <Typography variant="h6" color="text.primary" gutterBottom>No activities yet</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 200 }}>
                                Share your first update with the community to get started.
                            </Typography>
                            <Button variant="contained" disableElevation>Create New Post</Button>
                        </>
                    )}
                    {tabValue !== 0 && (
                        <Typography variant="body2" color="text.secondary">Content to be added.</Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
