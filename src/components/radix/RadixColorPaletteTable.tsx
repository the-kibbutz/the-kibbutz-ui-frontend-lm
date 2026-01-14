'use client';

import { useState } from 'react';
import { Card, Box, Flex, Text, Grid, Button } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

export default function RadixColorPaletteTable() {
    const [open, setOpen] = useState(false);

    return (
        <Box mb="6">
            <Button
                size="3"
                variant="soft"
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    justifyContent: 'space-between'
                }}
            >
                <Flex align="center" gap="2">
                    <Box
                        as="span"
                        style={{
                            width: 20,
                            height: 20,
                            display: 'inline-block',
                            background: 'linear-gradient(45deg, #6a6f7d, #a6bed5, #bedce4, #f1dab0)',
                            borderRadius: 'var(--radius-2)',
                            border: '1px solid var(--gray-4)'
                        }}
                    />
                    <Text size="3" weight="bold">Design System Colors</Text>
                </Flex>
                <Flex align="center" gap="2">
                    <Text size="2" color="gray">
                        {open ? 'Hide' : 'Show'} Palette
                    </Text>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Flex>
            </Button>

            {open && (
                <Card 
                    size="3" 
                    mt="4" 
                    style={{ 
                        opacity: 1,
                        transition: 'opacity 0.2s ease-in, transform 0.2s ease-in',
                        transform: 'translateY(0)'
                    }}
                >
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
            )}
        </Box>
    );
}
