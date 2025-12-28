'use client';

import { Box, Flex, Text } from '@radix-ui/themes';
import { HomeIcon, ChatBubbleIcon, PersonIcon, BellIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';

export default function RadixMobileNav() {
    return (
        <Box style={{ backgroundColor: 'var(--accent-9)', padding: '12px 0', borderTop: '1px solid var(--gray-4)' }}>
            <Flex justify="between" px="4">
                <Flex direction="column" align="center" gap="1" style={{ opacity: 0.7, cursor: 'pointer' }}>
                    <ChatBubbleIcon color="white" width="20" height="20" />
                    <Text size="1" style={{ color: 'white', fontSize: '10px' }}>Messages</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1" style={{ opacity: 0.7, cursor: 'pointer' }}>
                    <PersonIcon color="white" width="20" height="20" />
                    <Text size="1" style={{ color: 'white', fontSize: '10px' }}>Friends</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1" style={{ cursor: 'pointer' }}>
                    <HomeIcon color="white" width="24" height="24" />
                    <Text size="1" weight="bold" style={{ color: 'white', fontSize: '10px' }}>Home</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1" style={{ opacity: 0.7, cursor: 'pointer' }}>
                    <BellIcon color="white" width="20" height="20" />
                    <Text size="1" style={{ color: 'white', fontSize: '10px' }}>Alerts</Text>
                </Flex>
                <Flex direction="column" align="center" gap="1" style={{ opacity: 0.7, cursor: 'pointer' }}>
                    <ListBulletIcon color="white" width="20" height="20" />
                    <Text size="1" style={{ color: 'white', fontSize: '10px' }}>Menu</Text>
                </Flex>
            </Flex>
        </Box>
    );
}
