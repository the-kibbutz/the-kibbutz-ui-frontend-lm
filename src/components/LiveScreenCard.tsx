'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { ScreenData } from '@/lib/types';
import ConstructionIcon from '@mui/icons-material/Construction';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface LiveScreenCardProps {
    screen: ScreenData;
    platform: 'web' | 'mobile';
    imageHeight?: number;
    componentPreview?: React.ReactNode;
}

// Mapping of screen IDs to their live implementation paths
// If a path is missing or null, it's considered "Pending"
const LIVE_ROUTES: Record<string, string> = {
    // Web
    'w2': '/live/web/w2',
    'w5': '/live/web/w5',
    'w6': '/live/web/w6',
    'w8': '/live/web/w8',
    'w3': '/live/web/w3',
    'w7': '/live/web/w7',
    'w1': '/live/web/w1',
    // Mobile
    'm3': '/live/mobile/m3',
    'm4': '/live/mobile/m4',
    'm1': '/live/mobile/m1',
    'm2': '/live/mobile/m2',
    'm5': '/live/mobile/m5',
    'm6': '/live/mobile/m6',
};

export default function LiveScreenCard({ screen, platform, imageHeight = 200, componentPreview }: LiveScreenCardProps) {
    const livePath = LIVE_ROUTES[screen.id];
    const isImplemented = !!livePath;
    const router = useRouter();

    const handleClick = () => {
        if (isImplemented && livePath) {
            router.push(livePath);
        }
    };

    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            opacity: isImplemented ? 1 : 0.8,
            bgcolor: isImplemented ? 'background.paper' : 'action.hover',
            border: isImplemented ? 1 : 0,
            borderColor: 'divider',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': isImplemented ? {
                transform: 'translateY(-4px)',
                boxShadow: 4,
                cursor: 'pointer'
            } : {}
        }}>
            <Box
                onClick={handleClick}
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    textDecoration: 'none',
                    color: 'inherit',
                    outline: 'none',
                }}
                role={isImplemented ? "button" : undefined}
                tabIndex={isImplemented ? 0 : undefined}
                onKeyDown={(e) => {
                    if (isImplemented && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        handleClick();
                    }
                }}
            >
                <Box sx={{ position: 'relative', height: imageHeight, bgcolor: '#f0f2f5', overflow: 'hidden' }}>

                    {/* Render Component Preview if available */}
                    {isImplemented && componentPreview ? (
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            position: 'relative',
                            pointerEvents: 'none' // Disable interactions within the preview
                        }}>
                            {/* Scale down the component to fit the card window */}
                            <Box sx={{ transform: 'scale(0.4)', transformOrigin: 'center top', width: '250%', mt: 4 }}>
                                {componentPreview}
                            </Box>

                        </Box>
                    ) : (
                        // Fallback to Image
                        <CardMedia
                            component="img"
                            height={imageHeight}
                            image={`/assets/ui/${platform}/${screen.imageName}`}
                            alt={screen.imageName}
                            sx={{ objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(100%) opacity(0.5)' }}
                        />
                    )}

                    {/* Status Overlay */}
                    <Box sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        px: 1,
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        boxShadow: 1,
                        zIndex: 20
                    }}>
                        {isImplemented ? (
                            <>
                                <CheckCircleIcon color="success" fontSize="small" />
                                <Typography variant="caption" fontWeight="bold" color="success.main">Live</Typography>
                            </>
                        ) : (
                            <>
                                <ConstructionIcon color="action" fontSize="small" />
                                <Typography variant="caption" fontWeight="bold" color="text.secondary">Missing</Typography>
                            </>
                        )}
                    </Box>
                </Box>

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
                        {isImplemented ? "Click to view live implementation." : "Design implementation pending."}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}
