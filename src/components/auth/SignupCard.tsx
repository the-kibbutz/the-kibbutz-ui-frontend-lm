'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // v2 Grid (MUI v6) logic handled by imports, wait, Grid v2 is separate import in v6? 
// No, standard import Grid is now Grid2 in v7? The package.json showed @mui/material ^7.3.6.
// In v6+, Grid is deprecated for Grid2.
// Let's use Grid from @mui/material/Grid2 if available or just Grid with size props as I did in page.tsx 


import FormInput from '../ui/FormInput';
import ActionButton from '../ui/ActionButton';
import MenuItem from '@mui/material/MenuItem';
import Logo from '@/components/ui/Logo';
import { paletteColors } from '@/theme/theme';

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const YEARS = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

interface SignupCardProps {
    idPrefix?: string;
}

export default function SignupCard({ idPrefix = 'signup' }: SignupCardProps) {
    return (
        <Paper elevation={3} sx={{
            p: 0,
            width: '100%',
            maxWidth: 500,
            mx: 'auto',
            borderRadius: 4,
            overflow: 'hidden',
            border: 1,
            borderColor: 'divider',
            bgcolor: paletteColors.lavenderBlush
        }}>
            <Box sx={{
                bgcolor: 'secondary.main',
                p: 3,
                textAlign: 'center',
                color: paletteColors.darkSlateGray
            }}>
                <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
                    Join The Kibbutz
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Start your journey with us today.
                </Typography>
            </Box>

            <Box component="form" noValidate sx={{ p: 4 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6 }}>
                        <FormInput id={`${idPrefix}-firstname`} label="First Name" />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <FormInput id={`${idPrefix}-lastname`} label="Last Name" />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, mt: 1, fontWeight: 'medium' }}>
                            Date of birth
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <FormInput id={`${idPrefix}-dob-day`} select label="Day" SelectProps={{ native: true }} sx={{ flex: 1 }}>
                                {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                            </FormInput>
                            <FormInput id={`${idPrefix}-dob-month`} select label="Month" SelectProps={{ native: true }} sx={{ flex: 1.5 }}>
                                {MONTHS.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
                            </FormInput>
                            <FormInput id={`${idPrefix}-dob-year`} select label="Year" SelectProps={{ native: true }} sx={{ flex: 1.2 }}>
                                {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                            </FormInput>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <FormInput id={`${idPrefix}-gender`} select label="Gender">
                            {GENDER_OPTIONS.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                        </FormInput>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <FormInput id={`${idPrefix}-email`} label="Email" type="email" />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <FormInput id={`${idPrefix}-password`} label="New Password" type="password" />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="caption" color="text.secondary" align="center" display="block">
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.
                    </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <ActionButton label="Sign Up" sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: paletteColors.darkSlateGray } }} type="submit" />
                </Box>
            </Box>
        </Paper>
    );
}
