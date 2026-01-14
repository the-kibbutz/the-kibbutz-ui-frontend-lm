'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Card, Box, Text, Flex, Inset, Badge, Button, Dialog, Heading, ScrollArea } from '@radix-ui/themes';
import { ScreenData } from '@/lib/types';
import { CheckCircledIcon, ExclamationTriangleIcon, ListBulletIcon } from '@radix-ui/react-icons';
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
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleClick = () => {
        if (isImplemented) {
            router.push(`/radix/${platform}/${screen.id}`);
        }
    };

    const handleComponentsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDialogOpen(true);
    };

    const imagePath = `/assets/ui/${platform}/${screen.imageName}`;

    return (
        <>
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
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Radix Component Preview or Reference Image */}
                        {componentPreview ? (
                            <Box style={{
                                position: 'relative',
                                overflow: 'auto',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Box style={{
                                    transform: 'scale(0.75)',
                                    transformOrigin: 'top center',
                                    width: '133.33%',
                                    height: '133.33%'
                                }}>
                                    {componentPreview}
                                </Box>
                            </Box>
                        ) : (
                            <Box style={{
                                position: 'relative',
                                width: '100%',
                                height: imageHeight,
                                minHeight: imageHeight
                            }}>
                                <img
                                    src={imagePath}
                                    alt={screen.description || screen.id}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        padding: 'var(--space-2)'
                                    }}
                                    onError={(e) => {
                                        console.error('Failed to load image:', imagePath);
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </Box>
                        )}

                        {/* Status Badge */}
                        <Box style={{ position: 'absolute', top: 12, right: 12, zIndex: 10 }}>
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

                        {/* Components Button */}
                        {screen.ui_components && screen.ui_components.length > 0 && (
                            <Box style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 10 }}>
                                <Button
                                    size="2"
                                    variant="soft"
                                    onClick={handleComponentsClick}
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: 'var(--shadow-2)'
                                    }}
                                >
                                    <ListBulletIcon />
                                    Components ({screen.ui_components.length})
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Inset>

                <Flex direction="column" gap="1" mt="2" flexGrow="1" p="3">
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

            {/* Components Dialog */}
            <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                <Dialog.Content style={{ maxWidth: 600, maxHeight: '80vh' }}>
                    <Dialog.Title>
                        <Heading size="5">UI Components - {screen.id.toUpperCase()}</Heading>
                    </Dialog.Title>
                    <Dialog.Description size="2" color="gray" mb="4">
                        {screen.description || 'List of UI components for this screen.'}
                    </Dialog.Description>

                    <ScrollArea type="auto" scrollbars="vertical" style={{ maxHeight: '60vh' }}>
                        <Box>
                            {screen.ui_components && screen.ui_components.length > 0 ? (
                                <Flex direction="column" gap="2">
                                    {screen.ui_components.map((component, index) => (
                                        <Box
                                            key={index}
                                            style={{
                                                padding: 'var(--space-3)',
                                                borderRadius: 'var(--radius-3)',
                                                backgroundColor: 'var(--gray-2)',
                                                border: '1px solid var(--gray-4)'
                                            }}
                                        >
                                            <Text size="3" weight="bold" style={{ color: paletteColors.steelBlue }}>
                                                {component.name}
                                            </Text>
                                            {component.notes && component.notes !== "Location to be defined" && (
                                                <Text size="2" color="gray" mt="1">
                                                    {component.notes}
                                                </Text>
                                            )}
                                        </Box>
                                    ))}
                                </Flex>
                            ) : (
                                <Text size="2" color="gray">No components listed.</Text>
                            )}
                        </Box>
                    </ScrollArea>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">Close</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </>
    );
}
