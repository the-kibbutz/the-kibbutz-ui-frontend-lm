'use client';

import { Card, Box, Flex, Text, Avatar, Button, Inset } from '@radix-ui/themes';
import { HeartIcon, ChatBubbleIcon, Share1Icon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';

export default function RadixPostCard() {
    return (
        <Card size="2" style={{ maxWidth: 400 }}>
            {/* Header */}
            <Flex gap="3" align="center" mb="3">
                <Avatar fallback="RD" radius="full" size="3" style={{ backgroundColor: paletteColors.moccasin, color: paletteColors.darkSlateGray }} />
                <Box>
                    <Text as="div" size="2" weight="bold">Radix Design</Text>
                    <Text as="div" size="1" color="gray">2 hours ago</Text>
                </Box>
            </Flex>

            {/* Content */}
            <Box mb="3">
                <Text size="3">
                    Exploring the new Radix UI themes! It aligns perfectly with our premium design goals. #DesignSystem #UI
                </Text>
            </Box>

            {/* Image Placeholder */}
            <Inset side="x" mb="3" clip="padding-box">
                <Box style={{ height: 200, backgroundColor: paletteColors.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text size="5" color="indigo" weight="bold" style={{ opacity: 0.5 }}>Post Image</Text>
                </Box>
            </Inset>

            {/* Actions */}
            <Flex gap="4" align="center">
                <Button variant="ghost" color="gray">
                    <HeartIcon /> Like
                </Button>
                <Button variant="ghost" color="gray">
                    <ChatBubbleIcon /> Comment
                </Button>
                <Button variant="ghost" color="gray" style={{ marginLeft: 'auto' }}>
                    <Share1Icon /> Share
                </Button>
            </Flex>
        </Card>
    );
}
