'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'; // Or just use Box borders? Divider is cleaner.
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
// Reusing icons from web landing logic or similar
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Window';
import EmailIcon from '@mui/icons-material/Email';

export default function MobileLandingPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.paper',
            p: 3
        }}>
            {/* Top Section: Logo & Welcome */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
                <Logo width={200} height={80} />
                <Typography variant="h4" component="h1" fontWeight="bold" align="center" sx={{ mt: 4, mb: 1 }}>
                    Welcome to The Kibbutz
                </Typography>
            </Box>

            {/* Bottom Section: Actions */}
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    size="large"
                    sx={{ justifyContent: 'flex-start', py: 1.5, borderColor: 'divider', color: 'text.primary', borderRadius: 2 }}
                >
                    Continue with Google
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<MicrosoftIcon />}
                    fullWidth
                    size="large"
                    sx={{ justifyContent: 'flex-start', py: 1.5, borderColor: 'divider', color: 'text.primary', borderRadius: 2 }}
                >
                    Continue with Microsoft
                </Button>

                <Box sx={{ my: 1, display: 'flex', alignItems: 'center' }}>
                    <Divider sx={{ flex: 1 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ mx: 2 }}>OR</Typography>
                    <Divider sx={{ flex: 1 }} />
                </Box>

                <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    fullWidth
                    size="large"
                    href="/live/mobile/m3" // Link to Mobile Login
                    component={Link}
                    sx={{ py: 1.5, borderRadius: 2 }}
                >
                    Sign in with Email
                </Button>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Join Now
                    </Typography>
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        href="/live/mobile/m4"
                        component={Link}
                        sx={{ py: 1.5, borderRadius: 2, mt: 1 }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>

            {/* Footer Links (Optional for mobile but good for completeness) */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, pb: 2 }}>
                <Typography variant="caption" color="text.secondary">Terms</Typography>
                <Typography variant="caption" color="text.secondary">Privacy</Typography>
            </Box>
        </Box>
    );
}
