'use client';

import { Box, Flex, Text } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';
import RadixMobileNav from './RadixMobileNav';

export default function RadixMobileShell() {
    return (
        <Box style={{
            width: '100%',
            maxWidth: 420,
            margin: '0 auto',
            height: 'min(760px, calc(100dvh - 120px))',
            backgroundColor: paletteColors.lavenderBlush,
            borderRadius: 'var(--radius-3)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--gray-4)'
        }}>
            {/* Empty Content Area */}
            <Flex align="center" justify="center" style={{ flex: 1, minHeight: 0 }}>
                <Text color="gray" size="2">Content Area</Text>
            </Flex>

            {/* Bottom Nav */}
            <RadixMobileNav />
        </Box>
    );
}
