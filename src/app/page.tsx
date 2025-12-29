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

// Colors from palette
const paletteColors = {
  darkSlateGray: '#6a6f7d',
  moccasin: '#f1dab0',
  steelBlue: '#a6bed5',
  lightBlue: '#bedce4',
  lavenderBlush: '#fbf1f1',
};

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${paletteColors.steelBlue} 0%, ${paletteColors.lightBlue} 50%, ${paletteColors.steelBlue} 100%)`,
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease infinite',
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              color: paletteColors.moccasin,
              textShadow: '0 2px 8px rgba(106, 111, 125, 0.4)',
            }}
          >
            The Kibbutz UI
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: paletteColors.darkSlateGray,
              fontWeight: 500,
              textShadow: '0 1px 4px rgba(255, 255, 255, 0.5)',
            }}
          >
            Select a viewing mode
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Reference Designs Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: 4, 
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                '&:hover': { 
                  transform: 'scale(1.02)',
                  boxShadow: '0 8px 24px rgba(106, 111, 125, 0.3)',
                } 
              }}
            >
              <CardActionArea 
                component={Link} 
                href="/reference" 
                sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <PhotoLibraryIcon 
                  sx={{ 
                    fontSize: 64, 
                    color: paletteColors.moccasin, 
                    mb: 2,
                    filter: 'drop-shadow(0 2px 6px rgba(241, 218, 176, 0.5))',
                  }} 
                />
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  fontWeight="bold"
                  sx={{ color: paletteColors.moccasin }}
                >
                  Reference Designs
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: paletteColors.darkSlateGray, opacity: 0.9 }}
                >
                  Original UI images and JSONs.
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Live Implementation Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: 4, 
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                '&:hover': { 
                  transform: 'scale(1.02)',
                  boxShadow: '0 8px 24px rgba(106, 111, 125, 0.3)',
                } 
              }}
            >
              <CardActionArea 
                component={Link} 
                href="/live" 
                sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <WebIcon 
                  sx={{ 
                    fontSize: 64, 
                    color: paletteColors.lightBlue, 
                    mb: 2,
                    filter: 'drop-shadow(0 2px 6px rgba(190, 220, 228, 0.5))',
                  }} 
                />
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  fontWeight="bold"
                  sx={{ color: paletteColors.lightBlue }}
                >
                  MUI Live App
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: paletteColors.darkSlateGray, opacity: 0.9 }}
                >
                  React/MUI implementation.
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Radix Implementation Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: 4, 
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                '&:hover': { 
                  transform: 'scale(1.02)',
                  boxShadow: '0 8px 24px rgba(106, 111, 125, 0.3)',
                } 
              }}
            >
              <CardActionArea 
                component={Link} 
                href="/radix" 
                sx={{ height: '100%', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <Box 
                  sx={{ 
                    fontSize: 64, 
                    mb: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: paletteColors.steelBlue,
                    fontWeight: 'bold',
                    filter: 'drop-shadow(0 2px 6px rgba(166, 190, 213, 0.5))',
                  }}
                >
                  R
                </Box>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  fontWeight="bold"
                  sx={{ color: paletteColors.steelBlue }}
                >
                  Radix UI Version
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: paletteColors.darkSlateGray, opacity: 0.9 }}
                >
                  Radix Themes implementation.
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
