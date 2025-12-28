'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import palette from '../../../../../public/assets/colors/palette.json';

export default function StyleGuidePage() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Style Guide (w1)
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
                Typography and Color Palette Stylesheet
            </Typography>

            {/* Colors Section */}
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>Colors</Typography>
            <Grid container spacing={3} sx={{ mb: 6 }}>
                {Object.entries(palette).map(([name, color]) => (
                    typeof color === 'string' && (
                        <Grid size={{ xs: 6, sm: 4, md: 2 }} key={name}>
                            <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden', border: 1, borderColor: 'divider' }}>
                                <Box sx={{ height: 100, bgcolor: color }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle2" fontWeight="bold" sx={{ textTransform: 'capitalize' }}>
                                        {name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {color}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                ))}
            </Grid>

            {/* Typography Section */}
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>Typography</Typography>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>Headings</Typography>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h1" gutterBottom>H1. Heading Large</Typography>
                            <Typography variant="caption" color="text.secondary">96px / Light</Typography>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h2" gutterBottom>H2. Heading Medium</Typography>
                            <Typography variant="caption" color="text.secondary">60px / Light</Typography>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h3" gutterBottom>H3. Heading Regular</Typography>
                            <Typography variant="caption" color="text.secondary">48px / Regular</Typography>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h4" gutterBottom>H4. Heading Small</Typography>
                            <Typography variant="caption" color="text.secondary">34px / Regular</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>Body & UI</Typography>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="body1" gutterBottom>Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                            <Typography variant="caption" color="text.secondary">16px / Regular</Typography>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="body2" gutterBottom>Body 2. Secondary text for captions and dense information.</Typography>
                            <Typography variant="caption" color="text.secondary">14px / Regular</Typography>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="button" display="block" gutterBottom>BUTTON TEXT</Typography>
                            <Typography variant="caption" color="text.secondary">14px / Medium</Typography>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="caption" display="block" gutterBottom>CAPTION TEXT</Typography>
                            <Typography variant="caption" color="text.secondary">12px / Regular</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
