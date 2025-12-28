'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginCard from '@/components/auth/LoginCard';

export default function WebLoginPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default'
        }}>
            <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center' }}>
                <LoginCard />
            </Container>
        </Box>
    );
}
