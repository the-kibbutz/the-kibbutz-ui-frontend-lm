'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import SocialButton from '../ui/SocialButton';
import FormInput from '../ui/FormInput';
import ActionButton from '../ui/ActionButton';

export default function LoginCard() {
    return (
        <Paper elevation={0} sx={{ p: 4, width: '100%', maxWidth: 400, mx: 'auto', borderRadius: 4, border: 1, borderColor: 'divider' }}>
            <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                Login
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                <SocialButton provider="google" />
                <SocialButton provider="microsoft" />
            </Box>

            <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                    Or
                </Typography>
            </Divider>

            <Box component="form" noValidate>
                <FormInput label="Email" type="email" placeholder="example@email.com" />
                <FormInput label="Password" type="password" placeholder="********" />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 3 }}>
                    {/* Placeholder for "Show Password" handled in Input usually, but simpler here */}
                    <Box />
                    <Link href="#" variant="body2" color="primary" underline="hover">
                        Forgot Password?
                    </Link>
                </Box>

                <ActionButton label="Login" type="submit" />
            </Box>
        </Paper>
    );
}
