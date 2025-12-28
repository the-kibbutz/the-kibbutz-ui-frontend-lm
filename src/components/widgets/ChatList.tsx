'use client';
import * as React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './ChatListItem';

export default function ChatList() {
    return (
        <Paper elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', borderRadius: 2 }}>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Messages
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    px: 2,
                    py: 0.5
                }}>
                    <SearchIcon color="action" />
                    <InputBase placeholder="Search chats..." sx={{ ml: 1, flex: 1 }} />
                </Box>
            </Box>

            <List sx={{ overflowY: 'auto', flexGrow: 1, p: 0 }}>
                <ChatListItem
                    name="Sarah Smith"
                    message="Perfect! No rush. See you..."
                    time="12m"
                    online={true}
                />
                <ChatListItem
                    name="John Doe"
                    message="Can you review the code?"
                    time="1h"
                    online={false}
                />
                <ChatListItem
                    name="Team Lead"
                    message="Good job on the presentation!"
                    time="2h"
                    online={true}
                />
                <ChatListItem
                    name="Marketing Team"
                    message="New campaign assets are ready."
                    time="1d"
                    online={false}
                />
                <ChatListItem
                    name="Alice Wonderland"
                    message="Don't be late!"
                    time="2d"
                    online={false}
                />
            </List>
        </Paper>
    );
}
