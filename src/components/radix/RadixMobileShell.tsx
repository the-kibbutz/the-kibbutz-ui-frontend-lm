'use client';

import { Box, Flex, Text } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';
import RadixMobileNav from './RadixMobileNav';

export default function RadixMobileShell() {
    return (
        <Box style={{
            height: '100%',
            minHeight: 600,
            width: '100%',
            maxWidth: 450,
            margin: '0 auto',
            backgroundColor: paletteColors.lavenderBlush,
            borderRadius: 'var(--radius-3)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            {/* Empty Content Area */}
            <Flex align="center" justify="center" style={{ flex: 1 }}>
                <Text color="gray" size="2">Content Area</Text>
            </Flex>

            {/* Bottom Nav */}
            <Box style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <RadixMobileNav />
            </Box>
        </Box>
    );
}
