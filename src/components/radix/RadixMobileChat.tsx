'use client';

import { Box, Flex, Text, Avatar, TextField, ScrollArea } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';
import RadixMobileNav from './RadixMobileNav';

export default function RadixMobileChat() {
    // Reusing mock data directly for simplicity/isolation
    const chats = [
        { name: 'Alice Smith', msg: 'Hey, are we still on?', time: '2m' },
        { name: 'Bob Jones', msg: 'Sent the documents.', time: '1h' },
        { name: 'Community Group', msg: 'New event posted!', time: '3h' },
        { name: 'David Lee', msg: 'Thanks!', time: '1d' },
        { name: 'Sarah Connor', msg: 'I\'ll be back.', time: '2d' },
        { name: 'John Wick', msg: '...', time: '5d' },
    ];

    return (
        <Box style={{
            height: '100%',
            minHeight: 600, // Simulate mobile height
            width: '100%',
            maxWidth: 450,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            backgroundColor: 'white'
        }}>
            {/* Header */}
            <Box style={{ backgroundColor: paletteColors.darkSlateGray, padding: '16px', borderBottom: '1px solid var(--gray-5)' }}>
                <Flex justify="between" align="center" mb="3">
                    <Text size="5" weight="bold" style={{ color: 'white' }}>Messages</Text>
                </Flex>
                <TextField.Root placeholder="Search chats..." size="2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}>
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" color="white" />
                    </TextField.Slot>
                </TextField.Root>
            </Box>

            {/* List */}
            <ScrollArea type="auto" scrollbars="vertical" style={{ flex: 1 }}>
                <Box p="0" pb="60px"> {/* Padding bottom for nav bar */}
                    {chats.map((chat, i) => (
                        <Box key={i} style={{ padding: '12px 16px', borderBottom: '1px solid var(--gray-4)', cursor: 'pointer' }}>
                            <Flex gap="3" align="center">
                                <Avatar fallback={chat.name[0]} radius="full" size="3" color="indigo" />
                                <Box flexGrow="1" style={{ minWidth: 0 }}>
                                    <Flex justify="between" align="baseline">
                                        <Text size="3" weight="bold" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat.name}</Text>
                                        <Text size="1" color="gray" style={{ flexShrink: 0, marginLeft: 8 }}>{chat.time}</Text>
                                    </Flex>
                                    <Text size="2" color="gray" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                                        {chat.msg}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Box>
            </ScrollArea>

            {/* Bottom Nav - Fixed Position style within this container */}
            <Box style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <RadixMobileNav />
            </Box>
        </Box>
    );
}
