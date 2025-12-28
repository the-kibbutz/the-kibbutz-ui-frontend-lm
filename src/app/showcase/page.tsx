'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // Standard import, mapping to whatever version is installed (v7 Grid2 logic handled by user previously or just standard Grid)
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

// Components
import ActionButton from '@/components/ui/ActionButton';
import SocialButton from '@/components/ui/SocialButton';
import FormInput from '@/components/ui/FormInput';
import LoginCard from '@/components/auth/LoginCard';
import SignupCard from '@/components/auth/SignupCard';
import AppSidebar from '@/components/layout/AppSidebar';
import TopBar from '@/components/layout/TopBar';
import BottomNav from '@/components/layout/BottomNav';
import PostCard from '@/components/widgets/PostCard';
import ChatListItem from '@/components/widgets/ChatListItem';
import UserProfileCard from '@/components/widgets/UserProfileCard';

export default function ShowcasePage() {
    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Live Component Library
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Interactive preview of all implemented React components
                </Typography>
            </Box>

            {/* Section: Interaction Atoms */}
            <Paper elevation={0} sx={{ p: 4, mb: 4, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                    1. Interaction Atoms (Buttons & Inputs)
                </Typography>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle2" gutterBottom>Action Buttons</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <ActionButton label="Primary Action" />
                            <ActionButton label="Secondary Action" color="secondary" />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle2" gutterBottom>Social Buttons</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <SocialButton provider="google" />
                            <SocialButton provider="microsoft" />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle2" gutterBottom>Form Inputs</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <FormInput label="Standard Input" placeholder="Type something..." />
                            <FormInput label="Password Input" type="password" value="secret123" />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Section: Authentication */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
                    2. Authentication Components
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="subtitle1" align="center" gutterBottom>Login Card</Typography>
                        <LoginCard />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="subtitle1" align="center" gutterBottom>Signup Card</Typography>
                        <SignupCard />
                    </Grid>
                </Grid>
            </Box>

            {/* Section: Feature Widgets */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
                    3. Feature Widgets
                </Typography>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle1" gutterBottom>User Profile</Typography>
                        <UserProfileCard />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle1" gutterBottom>Feed Post</Typography>
                        <PostCard />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle1" gutterBottom>Chat Items</Typography>
                        <Paper variant="outlined">
                            <ChatListItem name="John Doe" message="Hey! are you coming to the event?" time="10:30 AM" online={true} />
                            <ChatListItem name="Sarah Smith" message="See you tomorrow!" time="Yesterday" online={false} />
                            <ChatListItem name="Mom" message="Call me when you can" time="Tuesday" online={true} />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* Section: Layout Structure */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
                    4. Layout Structures
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    These components define the app skeleton.
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12 }}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="subtitle2" gutterBottom>Top Navigation Bar</Typography>
                            <TopBar />
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper variant="outlined" sx={{ p: 2, height: 600, display: 'flex', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
                            <Typography variant="subtitle2" sx={{ position: 'absolute', mt: 1 }}>App Sidebar (Desktop)</Typography>
                            <AppSidebar />
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <Paper variant="outlined" sx={{ p: 2, minHeight: 200, position: 'relative', bgcolor: '#f0f0f0' }}>
                            <Typography variant="subtitle2" gutterBottom>Mobile Bottom Navigation</Typography>
                            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                                <BottomNav />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
}
