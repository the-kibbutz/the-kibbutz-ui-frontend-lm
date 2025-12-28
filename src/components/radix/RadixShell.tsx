'use client';

import { Card, Box, Flex, Text, Button, Avatar, IconButton, TextField, ScrollArea } from '@radix-ui/themes';
import { HomeIcon, MagnifyingGlassIcon, GearIcon, BellIcon, PersonIcon, ExitIcon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';

export default function RadixShell() {
    return (
        <Card size="3" style={{ height: 600, padding: 0, display: 'flex', overflow: 'hidden' }}>
            {/* Sidebar */}
            <Box style={{ width: 250, backgroundColor: paletteColors.darkSlateGray, color: 'white', display: 'flex', flexDirection: 'column' }}>
                <Box p="4">
                    <Text size="5" weight="bold" style={{ color: paletteColors.moccasin }}>The Kibbutz</Text>
                </Box>

                <ScrollArea type="auto" scrollbars="vertical" style={{ flex: 1 }}>
                    <Flex direction="column" gap="1" p="2">
                        <Button variant="ghost" color="gray" style={{ color: 'white', justifyContent: 'flex-start', padding: '12px' }}>
                            <HomeIcon width="20" height="20" /> Home
                        </Button>
                        <Button variant="ghost" color="gray" style={{ color: 'white', justifyContent: 'flex-start', padding: '12px' }}>
                            <PersonIcon width="20" height="20" /> Profile
                        </Button>
                        <Button variant="ghost" color="gray" style={{ color: 'white', justifyContent: 'flex-start', padding: '12px' }}>
                            <BellIcon width="20" height="20" /> Notifications
                        </Button>
                        <Button variant="ghost" color="gray" style={{ color: 'white', justifyContent: 'flex-start', padding: '12px' }}>
                            <GearIcon width="20" height="20" /> Settings
                        </Button>
                    </Flex>
                </ScrollArea>

                <Box p="4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Flex align="center" gap="3">
                        <Avatar fallback="JD" radius="full" size="2" color="indigo" />
                        <Box flexGrow="1">
                            <Text as="div" size="2" weight="bold">John Doe</Text>
                            <Text as="div" size="1" style={{ opacity: 0.7 }}>@johndoe</Text>
                        </Box>
                        <IconButton variant="ghost" color="gray" style={{ color: 'white' }}>
                            <ExitIcon />
                        </IconButton>
                    </Flex>
                </Box>
            </Box>

            {/* Main Content */}
            <Flex direction="column" style={{ flex: 1, backgroundColor: 'var(--gray-2)' }}>
                {/* Top Bar */}
                <Box style={{ backgroundColor: 'white', padding: '16px 24px', borderBottom: '1px solid var(--gray-4)' }}>
                    <Flex justify="between" align="center">
                        <Text size="4" weight="bold">Dashboard</Text>

                        <Flex gap="3" align="center">
                            <TextField.Root placeholder="Search..." size="2">
                                <TextField.Slot>
                                    <MagnifyingGlassIcon height="16" width="16" />
                                </TextField.Slot>
                            </TextField.Root>
                            <IconButton variant="soft" color="gray">
                                <BellIcon />
                            </IconButton>
                        </Flex>
                    </Flex>
                </Box>

                {/* Page Content Placeholder */}
                <Box p="5">
                    <Box style={{
                        border: '2px dashed var(--gray-4)',
                        borderRadius: 'var(--radius-4)',
                        height: 400,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--gray-1)'
                    }}>
                        <Flex direction="column" align="center" gap="2" style={{ color: 'var(--gray-8)' }}>
                            <Text size="6">📄</Text>
                            <Text size="3">Main Content Area</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Card>
    );
}
