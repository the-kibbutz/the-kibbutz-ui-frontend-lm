'use client';

import { Box, Flex, Text, Button, Avatar, Heading, TabNav } from '@radix-ui/themes';
import { Pencil1Icon, CheckCircledIcon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';
import RadixMobileNav from './RadixMobileNav';

export default function RadixMobileProfile() {
    return (
        <Box style={{
            width: '100%',
            maxWidth: 420,
            margin: '0 auto',
            height: 'min(760px, calc(100dvh - 120px))',
            backgroundColor: 'var(--color-background)',
            borderRadius: 'var(--radius-3)',
            overflow: 'hidden',
            border: '1px solid var(--gray-4)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
                {/* Header */}
                <Box style={{ backgroundColor: 'var(--accent-9)', padding: '24px 16px', color: 'white', position: 'relative' }}>
                    <Flex direction="column" align="center">
                        <Avatar fallback="JD" size="6" radius="full" style={{ marginBottom: 12, border: '4px solid white', backgroundColor: paletteColors.moccasin, color: paletteColors.darkSlateGray }} />
                        <Heading size="4">John Doe</Heading>
                        <Text size="2" style={{ opacity: 0.8 }}>@johndoe_dev</Text>

                        <Flex gap="4" mt="3">
                            <Box style={{ textAlign: 'center' }}>
                                <Text weight="bold" size="3" as="div">245</Text>
                                <Text size="1" style={{ opacity: 0.8 }}>Followers</Text>
                            </Box>
                            <Box style={{ textAlign: 'center' }}>
                                <Text weight="bold" size="3" as="div">120</Text>
                                <Text size="1" style={{ opacity: 0.8 }}>Following</Text>
                            </Box>
                        </Flex>

                        <Button variant="outline" size="1" style={{ position: 'absolute', top: 16, right: 16, color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                            <Pencil1Icon /> Edit
                        </Button>
                    </Flex>
                </Box>

                {/* Banner */}
                <Box style={{ backgroundColor: paletteColors.lightBlue, padding: '12px 16px' }}>
                    <Flex gap="3" align="center">
                        <CheckCircledIcon width="24" height="24" color="orange" />
                        <Box>
                            <Text size="2" weight="bold" as="div">Improve Profile</Text>
                            <Text size="1">Add a bio to get more followers.</Text>
                        </Box>
                    </Flex>
                </Box>

                {/* Tabs */}
                <TabNav.Root>
                    <TabNav.Link href="#" active>My Activities</TabNav.Link>
                    <TabNav.Link href="#">Saved</TabNav.Link>
                </TabNav.Root>

                {/* Empty State */}
                <Box p="6">
                    <Flex direction="column" align="center" gap="2" style={{ opacity: 0.5, marginTop: 40 }}>
                        <Text size="2">No posts yet</Text>
                        <Button variant="soft" size="2">Create Post</Button>
                    </Flex>
                </Box>
            </Box>

            {/* Bottom Nav */}
            <RadixMobileNav />
        </Box>
    );
}
