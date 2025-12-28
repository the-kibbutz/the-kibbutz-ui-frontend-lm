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

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const YEARS = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

export default function SignupCard() {
    return (
        <Paper elevation={0} sx={{ p: 4, width: '100%', maxWidth: 500, mx: 'auto', borderRadius: 4, border: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Logo width={180} height={60} />
            </Box>
            <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                Create New Account
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
                It's quick and easy.
            </Typography>

            <Box component="form" noValidate>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6 }}>
                        <FormInput label="First Name" />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <FormInput label="Last Name" />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, mt: 1 }}>
                            Date of birth
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <FormInput select label="Day" SelectProps={{ native: true }} sx={{ flex: 1 }}>
                                {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                            </FormInput>
                            <FormInput select label="Month" SelectProps={{ native: true }} sx={{ flex: 1.5 }}>
                                {MONTHS.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
                            </FormInput>
                            <FormInput select label="Year" SelectProps={{ native: true }} sx={{ flex: 1.2 }}>
                                {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                            </FormInput>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <FormInput select label="Gender">
                            {GENDER_OPTIONS.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                        </FormInput>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <FormInput label="Email" type="email" />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <FormInput label="New Password" type="password" />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.
                    </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <ActionButton label="Sign Up" color="secondary" type="submit" />
                </Box>
            </Box>
        </Paper>
    );
}
