'use client';

import { Card, Box, Flex, Text, Grid, Heading } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';

export default function RadixColorPaletteTable() {
    return (
        <Card size="3" mb="6">
            <Heading size="5" mb="4">Design System Colors</Heading>
            <Grid columns={{ initial: '2', sm: '3', md: '5' }} gap="4">
                {Object.entries(paletteColors).map(([name, hex]) => (
                    <Box key={name}>
                        <Box
                            style={{
                                width: '100%',
                                height: 80,
                                backgroundColor: hex,
                                borderRadius: 'var(--radius-3)',
                                marginBottom: 'var(--space-2)',
                                border: '1px solid var(--gray-4)',
                            }}
                        />
                        <Text as="div" size="2" weight="bold" style={{ textTransform: 'capitalize' }}>
                            {name.replace(/([A-Z])/g, ' $1').trim()}
                        </Text>
                        <Text as="div" size="1" color="gray" style={{ fontFamily: 'monospace' }}>
                            {hex}
                        </Text>
                    </Box>
                ))}
            </Grid>
        </Card>
    );
}
