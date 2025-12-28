import * as React from 'react';
import { getScreens } from '@/lib/data';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const webScreens = await getScreens('web');
  const mobileScreens = await getScreens('mobile');

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          The Kibbutz Showcase
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          UI Design & Component Library
        </Typography>
        <Button
          component={Link}
          href="/showcase"
          variant="contained"
          size="large"
          color="secondary"
          sx={{ mt: 2, borderRadius: 20, px: 4 }}
        >
          View Live Component Library
        </Button>
      </Box>

      {/* Web Screens Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, borderBottom: 1, borderColor: 'divider', pb: 1 }}>
          Web Interface
        </Typography>
        <Grid container spacing={3}>
          {webScreens.map((screen) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={screen.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea component={Link} href={`/view/web/${screen.id}`} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/assets/ui/web/${screen.imageName}`}
                    alt={screen.imageName}
                    sx={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {screen.id.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                    }}>
                      {screen.description}
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label={`${screen.ui_components?.length || 0} Components`} size="small" color="secondary" variant="outlined" />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
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
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea component={Link} href={`/view/mobile/${screen.id}`} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <CardMedia
                    component="img"
                    height="300" // Taller for mobile screenshots
                    image={`/assets/ui/mobile/${screen.imageName}`}
                    alt={screen.imageName}
                    sx={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {screen.id.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                    }}>
                      {screen.description}
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label={`${screen.ui_components?.length || 0} Components`} size="small" color="secondary" variant="outlined" />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
