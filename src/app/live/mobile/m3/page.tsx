'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginCard from '@/components/auth/LoginCard';

export default function MobileLoginPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.paper' // Mobile often full white background for login
        }}>
            <Container maxWidth="xs" sx={{ p: 0 }}>
                {/* On mobile, we might want the card to look flat or full screen, 
            but using LoginCard here for consistency. 
            We can override styles if needed via a wrapper or by passing props if supported. */}
                <Box sx={{ p: 2 }}>
                    <LoginCard />
                </Box>
            </Container>
        </Box>
    );
}
