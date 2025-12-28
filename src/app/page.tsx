'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';

// Using simple emoji placeholders to avoid icon import issues if package versions vary
// ensuring robustness for this landing page
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import WebIcon from '@mui/icons-material/Web';

export default function LandingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          The Kibbutz UI
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Select a viewing mode
        </Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center">
        {/* Reference Designs Card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: '100%', borderRadius: 4, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardActionArea component={Link} href="/reference" sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <PhotoLibraryIcon sx={{ fontSize: 80, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Reference Designs
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Browse Tomer's original UI images and component breakdown (JSONs).
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Live Implementation Card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: '100%', borderRadius: 4, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardActionArea component={Link} href="/live/web/w2" sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <WebIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Live App
              </Typography>
              <Typography variant="body1" color="text.secondary">
                View the fully functional React/MUI implementation of the designs.
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Link href="/showcase" style={{ textDecoration: 'none', color: 'gray' }}>
          <Typography variant="caption">View Individual Component Library (Showcase)</Typography>
        </Link>
      </Box>
    </Container>
  );
}
