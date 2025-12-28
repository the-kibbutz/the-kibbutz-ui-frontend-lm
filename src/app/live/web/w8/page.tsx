'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppSidebar from '@/components/layout/AppSidebar';
import ChatList from '@/components/widgets/ChatList';
import ChatThread from '@/components/chat/ChatThread';

export default function WebChatPage() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
            <AppSidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh', boxSizing: 'border-box' }}>
                <Grid container spacing={3} sx={{ height: '100%' }}>
                    <Grid size={{ xs: 12, md: 4, lg: 3 }} sx={{ height: '100%' }}>
                        <ChatList />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8, lg: 9 }} sx={{ height: '100%' }}>
                        <ChatThread />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
