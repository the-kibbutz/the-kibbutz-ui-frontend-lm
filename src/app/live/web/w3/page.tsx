'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import SocialButton from '@/components/ui/SocialButton'; // Assuming we have this, checking LoginCard usage
// If SocialButton doesn't exist as standalone, I'll copy the button code from LoginCard

// Recreating specific buttons for layout control as user might want them vertical/horizontal specific to landing
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Window'; // Approximate for Microsoft
import EmailIcon from '@mui/icons-material/Email';
import HeroIllustration from '@/components/ui/HeroIllustration';

export default function LandingPage() {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex' }}>
            {/* Left Side: Auth & Welcome */}
            <Box sx={{
                flex: { xs: 1, md: '0 0 40%' },
                p: { xs: 4, md: 8 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                bgcolor: 'background.paper',
                zIndex: 1
            }}>
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom color="primary">
                        Welcome to <br /> The Kibbutz
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Your community management platform. Connect, share, and organize together.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                    <Button
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        fullWidth
                        size="large"
                        sx={{ justifyContent: 'flex-start', py: 1.5, borderColor: 'divider', color: 'text.primary' }}
                    >
                        Continue with Google
                    </Button>

                    <Button
                        variant="outlined"
                        startIcon={<MicrosoftIcon />}
                        fullWidth
                        size="large"
                        sx={{ justifyContent: 'flex-start', py: 1.5, borderColor: 'divider', color: 'text.primary' }}
                    >
                        Continue with Microsoft
                    </Button>

                    <Divider sx={{ my: 2 }}>
                        <Typography variant="caption" color="text.secondary">OR</Typography>
                    </Divider>

                    <Button
                        variant="contained"
                        startIcon={<EmailIcon />}
                        fullWidth
                        size="large"
                        href="/live/web/w5" // Link to Login Page
                        component={Link}
                        sx={{ py: 1.5 }}
                    >
                        Sign in with Email
                    </Button>

                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        Don't have an account?{' '}
                        <Link href="/live/web/w6" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'var(--mui-palette-primary-main)' }}>
                            Sign up
                        </Link>
                    </Typography>
                </Box>

                <Box sx={{ mt: 'auto', pt: 4, display: 'flex', gap: 3 }}>
                    <Link href="#" style={{ color: 'gray', textDecoration: 'none', fontSize: '0.875rem' }}>Terms</Link>
                    <Link href="#" style={{ color: 'gray', textDecoration: 'none', fontSize: '0.875rem' }}>Privacy</Link>
                    <Link href="#" style={{ color: 'gray', textDecoration: 'none', fontSize: '0.875rem' }}>Contact</Link>
                </Box>
            </Box>

            {/* Right Side: Illustration */}
            <Box sx={{
                flex: 1,
                display: { xs: 'none', md: 'block' },
                bgcolor: '#f5f5f5'
            }}>
                <HeroIllustration />
            </Box>
        </Box>
    );
}
