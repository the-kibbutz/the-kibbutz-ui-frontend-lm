'use client';

import { useRouter } from 'next/navigation';

import { Card, Box, Text, Flex, Inset, Badge } from '@radix-ui/themes';
import { ScreenData } from '@/lib/types';
import { CheckCircledIcon, SewingPinFilledIcon } from '@radix-ui/react-icons'; // Using SewingPin as a 'construction' proxy or similar
// Actually let's use ExclamationTriangleIcon for missing or just a neat generic icon
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

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
                    height: imageHeight,
                    backgroundColor: 'var(--gray-3)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {isImplemented ? (
                        <Box style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            position: 'relative',
                            pointerEvents: 'none',
                            backgroundColor: 'white' // Ensure background is white for contrast
                        }}>
                            <Box style={{
                                width: platform === 'web' ? '1280px' : '375px', // Simulate standard widths
                                height: platform === 'web' ? '800px' : '812px',
                                transform: platform === 'web' ? 'scale(0.25)' : 'scale(0.5)',
                                transformOrigin: 'top left',
                                position: 'absolute',
                                top: 0,
                                left: platform === 'web' ? '50%' : '50%',
                                marginLeft: platform === 'web' ? '-160px' : '-94px', // (containerWidth/2 - (simulatedWidth * scale)/2) ... simplified: just center via flex is harder with scale. 
                                // Actually, transformOrigin 'top center' is easiest.
                            }}>
                                <Box style={{
                                    transform: 'none', // Reset inner to avoid double math
                                    width: '100%',
                                    height: '100%',
                                    // For 'top center' origin approach:
                                }}>
                                    {componentPreview}
                                </Box>
                            </Box>
                        </Box>
                    ) : (
                        <Flex direction="column" align="center" gap="2" style={{ opacity: 0.5 }}>
                            <Text size="5">🖼️</Text>
                            <Text size="2">Image Preview Placeholder</Text>
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
