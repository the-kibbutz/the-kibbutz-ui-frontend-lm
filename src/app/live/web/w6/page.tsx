'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignupCard from '@/components/auth/SignupCard';

export default function WebSignupPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            py: 4
        }}>
            <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
                <SignupCard />
            </Container>
        </Box>
    );
}
