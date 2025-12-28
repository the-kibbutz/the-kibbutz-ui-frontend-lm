import * as React from 'react';
import { getScreens } from '@/lib/data';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BackButton from '@/components/BackButton';
import LiveScreenCard from '@/components/LiveScreenCard';
import LoginCard from '@/components/auth/LoginCard';
import SignupCard from '@/components/auth/SignupCard';
import PostCard from '@/components/widgets/PostCard';
import ChatList from '@/components/widgets/ChatList';
import ColorPaletteTable from '@/components/ColorPaletteTable';
import MobileNav from '@/components/mobile/MobileNav';
import MobileLanding from '@/components/mobile/MobileLanding';
import MobileProfile from '@/components/mobile/MobileProfile';

export const dynamic = 'force-dynamic';

export default async function LiveDashboardPage() {
    const webScreens = await getScreens('web');
    const mobileScreens = await getScreens('mobile');

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4 }}>
                <BackButton />
            </Box>

            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Live Applications
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Interactive implementations of the UI designs.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Screens marked "Live" are fully implemented. Click to interact.
                </Typography>
            </Box>

            <ColorPaletteTable />

            {/* Web Screens Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
                    Web Interface
                </Typography>
                <Grid container spacing={3}>
                    {webScreens.map((screen) => {
                        let PreviewComponent = null;
                        if (screen.id === 'w5') PreviewComponent = <LoginCard idPrefix="web-login" />;
                        if (screen.id === 'w6') PreviewComponent = <SignupCard idPrefix="web-signup" />;
                        if (screen.id === 'w2') PreviewComponent = <PostCard />; // Showing a post card as preview for Feed
                        if (screen.id === 'w2') PreviewComponent = <PostCard />; // Showing a post card as preview for Feed
                        if (screen.id === 'w8') PreviewComponent = <ChatList />;
                        // w3 has no card component, shows image or we could make one. w7 is just layout.

                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={screen.id}>
                                <LiveScreenCard screen={screen} platform="web" componentPreview={PreviewComponent} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>

            {/* Mobile Screens Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
                    Mobile Interface
                </Typography>
                <Grid container spacing={3}>
                    {mobileScreens.map((screen) => {
                        let PreviewComponent = null;
                        if (screen.id === 'm1') PreviewComponent = <MobileNav />;
                        if (screen.id === 'm2') PreviewComponent = <MobileLanding />;
                        if (screen.id === 'm3') PreviewComponent = <LoginCard idPrefix="mobile-login" />;
                        if (screen.id === 'm4') PreviewComponent = <SignupCard idPrefix="mobile-signup" />;
                        if (screen.id === 'm5') PreviewComponent = <MobileProfile />;
                        if (screen.id === 'm6') PreviewComponent = <ChatList />;

                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={screen.id}>
                                <LiveScreenCard screen={screen} platform="mobile" imageHeight={500} componentPreview={PreviewComponent} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Container>
    );
}
