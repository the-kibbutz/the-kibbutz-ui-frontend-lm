'use client';

import React from 'react';
import { Box, Container, Grid, Paper, Typography, AppBar, Toolbar, InputBase, IconButton, Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostCard from './PostCard';
import { paletteColors } from '@/theme/theme';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PostFeedLayout() {
    return (
        <Box sx={{ flexGrow: 1, height: '100%', bgcolor: '#f0f2f5', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Top Navigation Bar */}
            <AppBar position="static" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: 1 }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold', color: paletteColors.steelBlue }}
                    >
                        The Kibbutz
                    </Typography>
                    <Search sx={{ bgcolor: '#f0f2f5', color: 'text.secondary' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <ChatIcon />
                        </IconButton>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Avatar sx={{ width: 32, height: 32, bgcolor: paletteColors.moccasin, color: paletteColors.darkSlateGray }}>JD</Avatar>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {/* Left Sidebar */}
                        <Grid size={{ xs: 12, md: 3 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><HomeIcon /></ListItemIcon>
                                            <ListItemText primary="Feed" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ChatIcon /></ListItemIcon>
                                            <ListItemText primary="Chats" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><PeopleIcon /></ListItemIcon>
                                            <ListItemText primary="Friends" />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider sx={{ my: 1 }} />
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                                            <ListItemText primary="Settings" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>

                        {/* Main Feed */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            {/* Create Post */}
                            <Paper elevation={0} sx={{ p: 2, mb: 3, borderRadius: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar sx={{ mr: 2 }}>JD</Avatar>
                                    <Box sx={{ flexGrow: 1, bgcolor: '#f0f2f5', borderRadius: 4, px: 2, py: 1.5, color: 'text.secondary', cursor: 'text' }}>
                                        What's on your mind, John?
                                    </Box>
                                </Box>
                                <Divider />
                                <Box sx={{ display: 'flex', mt: 1, justifyContent: 'space-around' }}>
                                    <Button startIcon={<span style={{ fontSize: 20 }}>📷</span>} sx={{ color: 'text.secondary', textTransform: 'none' }}>Photo</Button>
                                    <Button startIcon={<span style={{ fontSize: 20 }}>🎥</span>} sx={{ color: 'text.secondary', textTransform: 'none' }}>Video</Button>
                                    <Button startIcon={<span style={{ fontSize: 20 }}>😊</span>} sx={{ color: 'text.secondary', textTransform: 'none' }}>Feeling</Button>
                                </Box>
                            </Paper>

                            {/* Posts */}
                            <PostCard />
                            <PostCard />
                        </Grid>

                        {/* Right Sidebar */}
                        <Grid size={{ xs: 12, md: 3 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Paper elevation={0} sx={{ p: 2, borderRadius: 2, mb: 3 }}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Stories</Typography>
                                <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 1 }}>
                                    {[1, 2, 3, 4].map(i => (
                                        <Box key={i} sx={{ minWidth: 60, height: 100, bgcolor: 'grey.300', borderRadius: 2 }} />
                                    ))}
                                </Box>
                            </Paper>

                            <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Suggestions</Typography>
                                <List dense>
                                    <ListItem disablePadding sx={{ mb: 1 }}>
                                        <ListItemIcon><Avatar sx={{ width: 32, height: 32 }}>A</Avatar></ListItemIcon>
                                        <ListItemText primary="Alice Smith" secondary="Mutual Friend" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon><Avatar sx={{ width: 32, height: 32 }}>B</Avatar></ListItemIcon>
                                        <ListItemText primary="Bob Jones" secondary="New to Kibbutz" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
