'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

interface MessageBubbleProps {
    message: string;
    isOwn: boolean;
    timestamp: string;
    senderName?: string;
    avatar?: string;
}

export default function MessageBubble({ message, isOwn, timestamp, senderName, avatar }: MessageBubbleProps) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: isOwn ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            mb: 2,
            gap: 1
        }}>
            {!isOwn && <Avatar src={avatar} alt={senderName} sx={{ width: 32, height: 32 }} />}

            <Box sx={{
                maxWidth: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isOwn ? 'flex-end' : 'flex-start'
            }}>
                {senderName && !isOwn && (
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 1, mb: 0.5 }}>
                        {senderName}
                    </Typography>
                )}

                <Box sx={{
                    bgcolor: isOwn ? 'primary.main' : 'action.hover',
                    color: isOwn ? 'primary.contrastText' : 'text.primary',
                    borderRadius: 2,
                    borderBottomRightRadius: isOwn ? 0 : 2,
                    borderBottomLeftRadius: isOwn ? 2 : 0,
                    px: 2,
                    py: 1.5,
                    position: 'relative',
                    boxShadow: 1
                }}>
                    <Typography variant="body1">{message}</Typography>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, mx: 1 }}>
                    {timestamp}
                </Typography>
            </Box>
        </Box>
    );
}
