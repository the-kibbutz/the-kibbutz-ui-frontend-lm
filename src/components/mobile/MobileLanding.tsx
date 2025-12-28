'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Logo from '@/components/ui/Logo';
import { paletteColors } from '@/theme/theme';

// Mock Social Icons
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Window';
// Note: 'Window' is closest to Microsoft logo in MUI icons usually, or we can use svg. 
// Standard MUI doesn't have brand icons by default in core, using generic placeholders or available ones.

export default function MobileLanding() {
    return (
        <Paper elevation={3} sx={{
            width: '100%',
            height: '100%',
            minHeight: 500,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.paper',
            borderRadius: 3,
            overflow: 'hidden',
            border: 1,
            borderColor: 'divider'
        }}>
            {/* Header Section with Curve or Color */}
            <Box sx={{
                bgcolor: paletteColors.moccasin,
                p: 4,
                pt: 6,
                pb: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                mb: 2
            }}>
                <Logo width={160} height={60} />
                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: paletteColors.darkSlateGray, mt: 2 }}>
                    Welcome
                </Typography>
                <Typography variant="body2" align="center" sx={{ color: paletteColors.darkSlateGray, opacity: 0.8 }}>
                    The Kibbutz Community App
                </Typography>
            </Box>

            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    sx={{
                        py: 1.5,
                        borderRadius: 2,
                        borderColor: '#db4437',
                        color: '#db4437',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#db4437', color: 'white', borderColor: '#db4437' }
                    }}
                >
                    Continue with Google
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<MicrosoftIcon />}
                    fullWidth
                    sx={{
                        py: 1.5,
                        borderRadius: 2,
                        borderColor: '#2f2f2f',
                        color: '#2f2f2f',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#2f2f2f', color: 'white', borderColor: '#2f2f2f' }
                    }}
                >
                    Login with Microsoft
                </Button>

                <Divider sx={{ my: 1 }}>
                    <Typography variant="caption" color="text.secondary">OR</Typography>
                </Divider>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        py: 1.5,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': { bgcolor: paletteColors.darkSlateGray }
                    }}
                >
                    Login with Email
                </Button>

                <Box sx={{ mt: 'auto', textAlign: 'center', pb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                        Don't have an account?
                    </Typography>
                    <Button variant="text" sx={{ fontWeight: 'black', color: 'primary.main' }}>
                        JOIN NOW
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}
