'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import { ScreenData } from '@/lib/types';

interface ScreenCardProps {
    screen: ScreenData;
    platform: 'web' | 'mobile';
    imageHeight?: number;
}

export default function ScreenCard({ screen, platform, imageHeight = 200 }: ScreenCardProps) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea
                component={Link}
                href={`/view/${platform}/${screen.id}`}
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
            >
                <CardMedia
                    component="img"
                    height={imageHeight}
                    image={`/assets/ui/${platform}/${screen.imageName}`}
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
    );
}
