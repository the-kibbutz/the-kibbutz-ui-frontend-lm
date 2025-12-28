'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EditIcon from '@mui/icons-material/Edit';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { paletteColors } from '@/theme/theme';

export default function MobileProfile() {
    const [tabValue, setTabValue] = React.useState(0);

    return (
        <Paper elevation={3} sx={{
            width: '100%',
            height: '100%',
            minHeight: 600,
            bgcolor: 'background.default',
            borderRadius: 3,
            overflow: 'hidden',
            border: 1,
            borderColor: 'divider'
        }}>
            {/* Profile Header */}
            <Box sx={{
                bgcolor: 'secondary.main',
                p: 3,
                pt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                position: 'relative'
            }}>
                <Avatar
                    sx={{
                        width: 80,
                        height: 80,
                        bgcolor: paletteColors.moccasin,
                        color: paletteColors.darkSlateGray,
                        border: '4px solid white',
                        fontSize: 32,
                        fontWeight: 'bold',
                        mb: 1
                    }}
                >
                    JD
                </Avatar>
                <Typography variant="h6" fontWeight="bold">John Doe</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>@johndoe_dev</Typography>

                <Box sx={{ display: 'flex', gap: 3, mt: 2, mb: 1 }}>
                    <Box textAlign="center">
                        <Typography variant="subtitle2" fontWeight="bold">245</Typography>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>Followers</Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="subtitle2" fontWeight="bold">120</Typography>
                        <Typography variant="caption" sx={{ opacity: 0.8 }}>Following</Typography>
                    </Box>
                </Box>

                <Button
                    size="small"
                    startIcon={<EditIcon sx={{ fontSize: 16 }} />}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        color: 'white',
                        borderColor: 'rgba(255,255,255,0.5)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                    }}
                    variant="outlined"
                >
                    Edit
                </Button>
            </Box>

            {/* Tips Banner */}
            <Box sx={{
                bgcolor: paletteColors.lightBlue,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <Box sx={{ p: 1, bgcolor: 'white', borderRadius: '50%', display: 'flex' }}>
                    <LightbulbIcon sx={{ color: 'orange' }} />
                </Box>
                <Box>
                    <Typography variant="subtitle2" fontWeight="bold" color="text.primary">Improve your profile</Typography>
                    <Typography variant="caption" color="text.secondary">Add a bio to get more followers.</Typography>
                </Box>
            </Box>

            {/* Content Tabs */}
            <Box sx={{ bgcolor: 'white' }}>
                <Tabs
                    value={tabValue}
                    onChange={(e, v) => setTabValue(v)}
                    textColor="primary"
                    indicatorColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="My Activities" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
                    <Tab label="Saved" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
                </Tabs>
            </Box>

            {/* Tab Content - Empty State */}
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 200, opacity: 0.6 }}>
                <Typography variant="body2" align="center" gutterBottom>No posts yet</Typography>
                <Button variant="contained" size="small" disableElevation sx={{ borderRadius: 4, textTransform: 'none' }}>
                    Create a new post
                </Button>
            </Box>
        </Paper>
    );
}
