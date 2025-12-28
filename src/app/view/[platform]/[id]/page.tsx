import * as React from 'react';
import { getScreen, getScreens } from '@/lib/data';
import BackButton from '@/components/BackButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const webScreens = await getScreens('web');
    const mobileScreens = await getScreens('mobile');

    const webParams = webScreens.map(s => ({ platform: 'web', id: s.id }));
    const mobileParams = mobileScreens.map(s => ({ platform: 'mobile', id: s.id }));

    return [...webParams, ...mobileParams];
}

export default async function ScreenDetail({ params }: { params: Promise<{ platform: string; id: string }> }) {
    const { platform, id } = await params;

    if (platform !== 'web' && platform !== 'mobile') {
        notFound();
    }

    const screen = await getScreen(platform as 'web' | 'mobile', id);

    if (!screen) {
        notFound();
    }

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ mb: 3 }}>
                <BackButton href="/" label="Back to Dashboard" />
            </Box>

            <Grid container spacing={4}>
                {/* Image Column */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.default', textAlign: 'center', overflow: 'auto' }}>
                        <img
                            src={`/assets/ui/${platform}/${screen.imageName}`}
                            alt={screen.imageName}
                            style={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }}
                        />
                    </Paper>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                            Original Dimensions: {screen.screen_dimensions.width}x{screen.screen_dimensions.height}
                        </Typography>
                    </Box>
                </Grid>

                {/* Details Column */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper elevation={2} sx={{ height: '100%' }}>
                        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
                                {screen.id.toUpperCase()}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                {platform.charAt(0).toUpperCase() + platform.slice(1)} Screen
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                {screen.description}
                            </Typography>
                        </Box>

                        <Box sx={{ p: 0 }}>
                            <Typography variant="h6" sx={{ p: 2, pb: 1, color: 'secondary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <WidgetsIcon fontSize="small" />
                                UI Components ({screen.ui_components?.length || 0})
                            </Typography>
                            <Divider />
                            <List sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                {screen.ui_components?.map((comp, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={comp.name}
                                                secondary={comp.notes !== "Location to be defined" ? comp.notes : null}
                                                primaryTypographyProps={{ fontWeight: 500 }}
                                            />
                                        </ListItem>
                                        {index < (screen.ui_components.length - 1) && <Divider variant="inset" component="li" />}
                                    </React.Fragment>
                                ))}
                                {(!screen.ui_components || screen.ui_components.length === 0) && (
                                    <ListItem>
                                        <ListItemText primary="No specific components listed." />
                                    </ListItem>
                                )}
                            </List>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
