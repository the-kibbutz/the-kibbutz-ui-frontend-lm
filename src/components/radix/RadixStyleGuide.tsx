'use client';

import { Card, Box, Flex, Text, Heading, Grid, Badge } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';

export default function RadixStyleGuide() {
    return (
        <Card size="3" style={{ height: '100%', overflowY: 'auto' }}>
            <Flex direction="column" gap="6">
                <Box>
                    <Heading size="6" mb="4" style={{ borderBottom: '1px solid var(--gray-4)', paddingBottom: 8 }}>Typography</Heading>
                    <Flex direction="column" gap="4">
                        <Box>
                            <Heading size="9">Heading 9 - The quick brown fox</Heading>
                            <Text size="1" color="gray">Size 9</Text>
                        </Box>
                        <Box>
                            <Heading size="8">Heading 8 - The quick brown fox</Heading>
                            <Text size="1" color="gray">Size 8</Text>
                        </Box>
                        <Box>
                            <Heading size="6">Heading 6 - The quick brown fox</Heading>
                            <Text size="1" color="gray">Size 6</Text>
                        </Box>
                        <Box>
                            <Heading size="4">Heading 4 - The quick brown fox</Heading>
                            <Text size="1" color="gray">Size 4</Text>
                        </Box>
                        <Box>
                            <Text size="3" as="p">Body Text (Size 3) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </Box>
                        <Box>
                            <Text size="2" as="p">Caption/Small Text (Size 2) - Used for secondary information.</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box>
                    <Heading size="6" mb="4" style={{ borderBottom: '1px solid var(--gray-4)', paddingBottom: 8 }}>Colors & Variance</Heading>
                    <Grid columns="3" gap="4">
                        {Object.entries(paletteColors).map(([name, hex]) => (
                            <Flex key={name} align="center" gap="2">
                                <Box style={{ width: 40, height: 40, borderRadius: 'var(--radius-2)', backgroundColor: hex, border: '1px solid var(--gray-4)' }} />
                                <Box>
                                    <Text size="2" weight="bold" style={{ textTransform: 'capitalize' }}>{name.replace(/([A-Z])/g, ' $1')}</Text>
                                    <Text size="1" color="gray">{hex}</Text>
                                </Box>
                            </Flex>
                        ))}
                    </Grid>
                </Box>

                <Box>
                    <Heading size="6" mb="4" style={{ borderBottom: '1px solid var(--gray-4)', paddingBottom: 8 }}>Status Badges</Heading>
                    <Flex gap="3">
                        <Badge color="green">Success</Badge>
                        <Badge color="blue">Info</Badge>
                        <Badge color="orange">Warning</Badge>
                        <Badge color="red">Error</Badge>
                        <Badge color="gray">Neutral</Badge>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
}
