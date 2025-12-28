'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function UserProfileCard() {
    return (
        <Paper elevation={0} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'transparent' }}>
            <Avatar sx={{ width: 100, height: 100, mb: 2, bgcolor: 'secondary.main', fontSize: '2rem' }}>L</Avatar>

            <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                Lior User
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
                @lior_dev
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, my: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold">1.2k</Typography>
                    <Typography variant="caption" color="text.secondary">Followers</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold">450</Typography>
                    <Typography variant="caption" color="text.secondary">Following</Typography>
                </Box>
            </Box>

            <Button variant="outlined" color="primary" sx={{ borderRadius: 20, px: 4, mt: 1 }}>
                Edit Profile
            </Button>
        </Paper>
    );
}
