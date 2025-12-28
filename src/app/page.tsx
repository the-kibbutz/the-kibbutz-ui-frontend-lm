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

      <Grid container spacing={4} justifyContent="center">
        {/* Reference Designs Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', borderRadius: 4, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardActionArea component={Link} href="/reference" sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <PhotoLibraryIcon sx={{ fontSize: 64, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Reference Designs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Original UI images and JSONs.
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Live Implementation Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', borderRadius: 4, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardActionArea component={Link} href="/live" sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <WebIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom fontWeight="bold">
                MUI Live App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                React/MUI implementation.
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Radix Implementation Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%', borderRadius: 4, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardActionArea component={Link} href="/radix" sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ fontSize: 64, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                {/* Using a generic icon or text for Radix if specific icon not available */}
                R
              </Box>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Radix UI Version
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Radix Themes implementation.
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
