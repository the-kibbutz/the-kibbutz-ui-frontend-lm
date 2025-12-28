'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignupCard from '@/components/auth/SignupCard';

export default function MobileSignupPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            p: 2
        }}>
            <Box sx={{ width: '100%', maxWidth: 'sm' }}>
                <SignupCard />
            </Box>
        </Box>
    );
}
