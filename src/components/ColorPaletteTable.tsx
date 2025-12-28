'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { paletteColors } from '@/theme/theme';

export default function ColorPaletteTable() {
    return (
        <Paper elevation={3} sx={{ p: 4, mb: 6, borderRadius: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
                Design System Colors
            </Typography>
            <Grid container spacing={4}>
                {Object.entries(paletteColors).map(([name, hex]) => (
                    <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={name}>
                        <Box
                            sx={{
                                width: '100%',
                                height: 80,
                                backgroundColor: hex,
                                borderRadius: 2,
                                mb: 2,
                                border: '1px solid rgba(0,0,0,0.1)',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                        />
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                            {name.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                            {hex}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}
