'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import SocialButton from '@/components/ui/SocialButton';
import FormInput from '@/components/ui/FormInput';
import ActionButton from '@/components/ui/ActionButton';
import Logo from '@/components/ui/Logo';
import { paletteColors } from '@/theme/theme';

interface LoginCardProps {
    idPrefix?: string;
}

export default function LoginCard({ idPrefix = 'login' }: LoginCardProps) {
    return (
        <Paper elevation={3} sx={{
            p: 0,
            width: '100%',
            maxWidth: 400,
            mx: 'auto',
            borderRadius: 4,
            overflow: 'hidden',
            border: 1,
            borderColor: 'divider',
            bgcolor: paletteColors.lavenderBlush
        }}>
            <Box sx={{
                bgcolor: 'primary.main',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white'
            }}>
                <Box sx={{ filter: 'brightness(0) invert(1)', mb: 1 }}>
                    <Logo width={140} height={50} />
                </Box>
                <Typography variant="h5" component="h1" align="center" sx={{ fontWeight: 'bold' }}>
                    Welcome Back
                </Typography>
            </Box>

            <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <SocialButton provider="google" />
                    <SocialButton provider="microsoft" />
                </Box>

                <Divider sx={{ my: 3, color: 'text.secondary' }}>
                    <Typography variant="body2">
                        Or login with email
                    </Typography>
                </Divider>

                <Box component="form" noValidate>
                    <FormInput id={`${idPrefix}-email`} label="Email" type="email" placeholder="example@email.com" />
                    <FormInput id={`${idPrefix}-password`} label="Password" type="password" placeholder="********" />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 3 }}>
                        <Box />
                        <Link href="#" variant="body2" sx={{ color: 'secondary.main', fontWeight: 'bold' }} underline="hover">
                            Forgot Password?
                        </Link>
                    </Box>

                    <ActionButton label="Login" type="submit" sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: paletteColors.steelBlue } }} />
                </Box>
            </Box>
        </Paper>
    );
}
