'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { paletteColors } from '@/theme/theme';

export default function PostCard() {
    return (
        <Card sx={{
            maxWidth: '100%',
            mb: 2,
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: 1,
            borderColor: paletteColors.steelBlue,
            overflow: 'visible' // Allow elements to pop if needed, though mostly standard
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: paletteColors.moccasin, color: paletteColors.darkSlateGray, fontWeight: 'bold' }} aria-label="user">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={<Typography fontWeight="bold" color="text.primary">Shrimp and Chorizo Paella</Typography>}
                subheader={<Typography variant="caption" color="primary.main">September 14, 2016</Typography>}
            />

            {/* Placeholder for Media - typically from w2.json feed post */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ borderTop: 1, borderColor: 'divider', bgcolor: paletteColors.lavenderBlush }}>
                <IconButton aria-label="add to favorites" sx={{ color: 'secondary.main' }}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment" sx={{ color: paletteColors.darkSlateGray }}>
                    <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton aria-label="share" sx={{ ml: 'auto', color: paletteColors.darkSlateGray }}>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
