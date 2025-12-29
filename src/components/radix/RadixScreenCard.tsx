'use client';

import { useRouter } from 'next/navigation';

import { Card, Box, Text, Flex, Inset, Badge } from '@radix-ui/themes';
import { ScreenData } from '@/lib/types';
import { CheckCircledIcon, SewingPinFilledIcon } from '@radix-ui/react-icons'; // Using SewingPin as a 'construction' proxy or similar
// Actually let's use ExclamationTriangleIcon for missing or just a neat generic icon
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';

interface RadixScreenCardProps {
    screen: ScreenData;
    platform: 'web' | 'mobile';
    imageHeight?: number;
    componentPreview?: React.ReactNode;
}

export default function RadixScreenCard({ screen, platform, imageHeight = 200, componentPreview }: RadixScreenCardProps) {
    const isImplemented = !!componentPreview;
    const router = useRouter();

    const handleClick = () => {
        if (isImplemented) {
            router.push(`/radix/${platform}/${screen.id}`);
        }
    };

    return (
        <Card
            size="2"
            onClick={handleClick}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                opacity: isImplemented ? 1 : 0.7,
                cursor: isImplemented ? 'pointer' : 'default'
            }}
            onMouseEnter={(e) => {
                if (isImplemented) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-4)';
                    e.currentTarget.style.transition = 'transform 0.2s, box-shadow 0.2s';
                }
            }}
            onMouseLeave={(e) => {
                if (isImplemented) {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                }
            }}
        >
            <Inset side="top" pb="current">
                <Box style={{
                    minHeight: imageHeight,
                    backgroundColor: 'var(--gray-3)',
                    position: 'relative',
                    overflow: 'auto',
                    padding: 'var(--space-3)'
                }}>
                    {/* Component List */}
                    {screen.ui_components && screen.ui_components.length > 0 ? (
                        <Flex direction="column" gap="1">
                            {screen.ui_components.map((component, index) => (
                                <Box 
                                    key={index}
                                    style={{
                                        padding: 'var(--space-1)',
                                        borderRadius: 'var(--radius-2)',
                                        transition: 'background-color 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(166, 190, 213, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <Text 
                                        size="2" 
                                        style={{ 
                                            color: paletteColors.steelBlue,
                                            fontWeight: 500
                                        }}
                                    >
                                        • {component.name}
                                    </Text>
                                </Box>
                            ))}
                        </Flex>
                    ) : (
                        <Flex direction="column" align="center" justify="center" style={{ 
                            height: imageHeight,
                            opacity: 0.5 
                        }}>
                            <Text size="2" color="gray">No components listed</Text>
                        </Flex>
                    )}

                    {/* Status Badge */}
                    <Box style={{ position: 'absolute', top: 12, right: 12 }}>
                        {isImplemented ? (
                            <Badge color="green" variant="solid" radius="full">
                                <CheckCircledIcon /> Live
                            </Badge>
                        ) : (
                            <Badge color="orange" variant="solid" radius="full">
                                <ExclamationTriangleIcon /> Pending
                            </Badge>
                        )}
                    </Box>
                </Box>
            </Inset>

            <Flex direction="column" gap="1" mt="2" flexGrow="1">
                <Text size="4" weight="bold">{screen.id.toUpperCase()}</Text>
                <Text size="2" color="gray" style={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                }}>
                    {screen.description || 'No description available.'}
                </Text>
            </Flex>
        </Card>
    );
}
