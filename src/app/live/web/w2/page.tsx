'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import AppSidebar from '@/components/layout/AppSidebar';
import TopBar from '@/components/layout/TopBar';
import PostCard from '@/components/widgets/PostCard';
import ChatListItem from '@/components/widgets/ChatListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

export default function WebFeedPage() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Left Sidebar */}
            <Box sx={{ width: 280, flexShrink: 0, position: 'sticky', top: 0, height: '100vh', borderRight: 1, borderColor: 'divider' }}>
                <AppSidebar />
            </Box>

            {/* Main Content Area */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <TopBar />

                <Box sx={{ p: 3, display: 'flex', gap: 3, overflowY: 'auto' }}>
                    {/* Feed Column */}
                    <Box sx={{ flexGrow: 1, maxWidth: 700, mx: 'auto' }}>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </Box>

                    {/* Right Widget Column (Desktop only usually) */}
                    <Box sx={{ width: 300, display: { xs: 'none', lg: 'block' } }}>
                        <Paper sx={{ mb: 3, p: 2 }}>
                            <Typography variant="h6" gutterBottom>Active Chats</Typography>
                            <List disablePadding>
                                <ChatListItem name="Sarah Smith" message="See you!" time="12m" online={true} />
                                <ChatListItem name="John Doe" message="Coding..." time="1h" online={false} />
                                <ChatListItem name="Team Lead" message="Good job!" time="2h" online={true} />
                            </List>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
