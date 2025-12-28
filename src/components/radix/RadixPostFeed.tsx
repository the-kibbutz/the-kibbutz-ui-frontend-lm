'use client';

import { Box, Grid, Flex, Card, Text, TextField, IconButton, Avatar, Button, ScrollArea, Separator } from '@radix-ui/themes';
import { MagnifyingGlassIcon, HomeIcon, ChatBubbleIcon, PersonIcon, GearIcon, BellIcon, ImageIcon, VideoIcon, FaceIcon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';
import RadixPostCard from './RadixPostCard';

export default function RadixPostFeed() {
    return (
        <Box style={{ height: '100%', minHeight: 800, backgroundColor: 'var(--gray-2)', display: 'flex', flexDirection: 'column' }}>
            {/* Top Navbar */}
            <Box style={{ backgroundColor: 'white', padding: '12px 24px', borderBottom: '1px solid var(--gray-4)', position: 'sticky', top: 0, zIndex: 10 }}>
                <Flex justify="between" align="center">
                    <Text size="5" weight="bold" style={{ color: paletteColors.steelBlue }}>The Kibbutz</Text>

                    <Box style={{ width: 400 }}>
                        <TextField.Root placeholder="Search..." size="2">
                            <TextField.Slot>
                                <MagnifyingGlassIcon height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>
                    </Box>

                    <Flex gap="4" align="center">
                        <IconButton variant="ghost" color="gray"><ChatBubbleIcon /></IconButton>
                        <IconButton variant="ghost" color="gray"><BellIcon /></IconButton>
                        <Avatar fallback="JD" radius="full" size="2" style={{ backgroundColor: paletteColors.moccasin, color: paletteColors.darkSlateGray }} />
                    </Flex>
                </Flex>
            </Box>

            {/* Main Layout Grid */}
            <Grid columns="250px 1fr 300px" gap="4" p="4" style={{ flex: 1, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
                {/* Left Sidebar */}
                <Box>
                    <Card size="2">
                        <Flex direction="column" gap="2">
                            <Button variant="ghost" color="gray" style={{ justifyContent: 'flex-start', padding: 12 }}>
                                <HomeIcon /> <Text ml="2">Feed</Text>
                            </Button>
                            <Button variant="ghost" color="gray" style={{ justifyContent: 'flex-start', padding: 12 }}>
                                <ChatBubbleIcon /> <Text ml="2">Chats</Text>
                            </Button>
                            <Button variant="ghost" color="gray" style={{ justifyContent: 'flex-start', padding: 12 }}>
                                <PersonIcon /> <Text ml="2">Friends</Text>
                            </Button>
                            <Separator my="2" />
                            <Button variant="ghost" color="gray" style={{ justifyContent: 'flex-start', padding: 12 }}>
                                <GearIcon /> <Text ml="2">Settings</Text>
                            </Button>
                        </Flex>
                    </Card>
                </Box>

                {/* Main Feed Column */}
                <Box>
                    {/* Create Post */}
                    <Card size="2" style={{ marginBottom: 16 }}>
                        <Flex gap="3" align="center" mb="3">
                            <Avatar fallback="JD" size="3" radius="full" />
                            <Box style={{ flex: 1, backgroundColor: 'var(--gray-3)', padding: '10px 16px', borderRadius: 'var(--radius-4)', color: 'var(--gray-10)' }}>
                                What's on your mind, John?
                            </Box>
                        </Flex>
                        <Separator size="4" mb="3" />
                        <Flex justify="between">
                            <Button variant="ghost" color="gray"><ImageIcon /> Photo</Button>
                            <Button variant="ghost" color="gray"><VideoIcon /> Video</Button>
                            <Button variant="ghost" color="gray"><FaceIcon /> Feeling</Button>
                        </Flex>
                    </Card>

                    {/* Posts */}
                    <Flex direction="column" gap="3">
                        <RadixPostCard />
                        <RadixPostCard />
                    </Flex>
                </Box>

                {/* Right Sidebar */}
                <Box>
                    <Card size="2" style={{ marginBottom: 16 }}>
                        <Text size="3" weight="bold" mb="2" as="div">Stories</Text>
                        <Flex gap="2" style={{ overflowX: 'auto', paddingBottom: 4 }}>
                            {[1, 2, 3, 4].map(i => (
                                <Box key={i} style={{ minWidth: 60, height: 100, backgroundColor: 'var(--gray-4)', borderRadius: 'var(--radius-3)' }} />
                            ))}
                        </Flex>
                    </Card>

                    <Card size="2">
                        <Text size="3" weight="bold" mb="3" as="div">Suggestions</Text>
                        <Flex direction="column" gap="3">
                            <Flex gap="2" align="center">
                                <Avatar fallback="A" size="2" />
                                <Box style={{ minWidth: 0 }}>
                                    <Text size="2" weight="bold" as="div" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Alice Smith</Text>
                                    <Text size="1" color="gray" as="div" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Mutual Friend</Text>
                                </Box>
                            </Flex>
                            <Flex gap="2" align="center">
                                <Avatar fallback="B" size="2" />
                                <Box style={{ minWidth: 0 }}>
                                    <Text size="2" weight="bold" as="div" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Bob Jones</Text>
                                    <Text size="1" color="gray" as="div" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>New Member</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Card>
                </Box>
            </Grid>
        </Box>
    );
}
