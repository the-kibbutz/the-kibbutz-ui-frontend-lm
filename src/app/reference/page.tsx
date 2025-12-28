import * as React from 'react';
import { getScreens } from '@/lib/data';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Client Components
import ScreenCard from '@/components/ScreenCard';
import BackButton from '@/components/BackButton';

// Since this is a server component, we can use async/await and getScreens directly
export const dynamic = 'force-dynamic';

export default async function ReferencePage() {
  const webScreens = await getScreens('web');
  const mobileScreens = await getScreens('mobile');

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <BackButton />
      </Box>

      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Reference Designs
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Original UI Mockups & Metadata
        </Typography>
      </Box>

      {/* Web Screens Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          Web Interface
        </Typography>
        <Grid container spacing={3}>
          {webScreens.map((screen) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={screen.id}>
              <ScreenCard screen={screen} platform="web" />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mobile Screens Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          Mobile Interface
        </Typography>
        <Grid container spacing={3}>
          {mobileScreens.map((screen) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={screen.id}>
              <ScreenCard screen={screen} platform="mobile" imageHeight={300} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
