'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppSidebar from '@/components/layout/AppSidebar';
import TopBar from '@/components/layout/TopBar';

export default function BaseLayoutPage() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
            <AppSidebar />
            <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
                <TopBar />
                <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{
                        border: '2px dashed',
                        borderColor: 'divider',
                        borderRadius: 2,
                        p: 4,
                        textAlign: 'center',
                        color: 'text.secondary'
                    }}>
                        <Typography variant="h6">Content Area</Typography>
                        <Typography variant="body2">This is the base layout template (w7).</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
