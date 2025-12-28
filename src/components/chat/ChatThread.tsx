'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MessageBubble from './MessageBubble';

export default function ChatThread() {
    return (
        <Paper elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', borderRadius: 2 }}>
            {/* Thread Header */}
            <Box sx={{
                p: 2,
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ position: 'relative' }}>
                        <Avatar src="/static/images/avatar/2.jpg" alt="Sarah Smith" sx={{ width: 48, height: 48 }} />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 2,
                            right: 2,
                            width: 10,
                            height: 10,
                            bgcolor: 'success.main',
                            borderRadius: '50%',
                            border: '2px solid white'
                        }} />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">Sarah Smith</Typography>
                        <Typography variant="caption" color="success.main">Online</Typography>
                    </Box>
                </Box>
                <Box>
                    <IconButton><PhoneIcon /></IconButton>
                    <IconButton><VideocamIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </Box>
            </Box>

            {/* Thread Body (Messages) */}
            <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="caption" color="text.secondary" align="center" sx={{ mb: 3 }}>Yesterday</Typography>

                <MessageBubble
                    isOwn={false}
                    message="Hey! Are we still on for the project meeting later?"
                    timestamp="09:41 AM"
                    senderName="Sarah Smith"
                />
                <MessageBubble
                    isOwn={true}
                    message="Yes, absolutely. I'm just finishing up the designs now."
                    timestamp="09:42 AM"
                />
                <MessageBubble
                    isOwn={true}
                    message="I'll send them over in about 10 minutes."
                    timestamp="09:43 AM"
                />
                <MessageBubble
                    isOwn={false}
                    message="Perfect! No rush. See you soon!"
                    timestamp="09:45 AM"
                    senderName="Sarah Smith"
                />
            </Box>

            {/* Thread Foother (Input) */}
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                <TextField
                    fullWidth
                    placeholder="Type a message..."
                    variant="outlined"
                    size="small"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton size="small"><AttachFileIcon /></IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton color="primary"><SendIcon /></IconButton>
                                </InputAdornment>
                            )
                        }
                    }}
                />
            </Box>
        </Paper>
    );
}
