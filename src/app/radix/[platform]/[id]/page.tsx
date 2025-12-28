import { Box, Flex, Button, Heading, Text } from '@radix-ui/themes';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Radix Components
import RadixLoginCard from '@/components/radix/RadixLoginCard';
import RadixSignupCard from '@/components/radix/RadixSignupCard';
import RadixChatList from '@/components/radix/RadixChatList';
import RadixPostCard from '@/components/radix/RadixPostCard';
import RadixMobileNav from '@/components/radix/RadixMobileNav';
import RadixMobileLanding from '@/components/radix/RadixMobileLanding';
import RadixMobileProfile from '@/components/radix/RadixMobileProfile';
import RadixStyleGuide from '@/components/radix/RadixStyleGuide';
import RadixDesktopLanding from '@/components/radix/RadixDesktopLanding';
import RadixShell from '@/components/radix/RadixShell';
import RadixChatScreen from '@/components/radix/RadixChatScreen';

export const dynamic = 'force-dynamic';

import RadixBackButton from '@/components/radix/RadixBackButton';

export default async function RadixComponentPage({ params }: { params: Promise<{ platform: string; id: string }> }) {
    const { platform, id } = await params;

    let ComponentToRender = null;

    // ... (component mapping logic remains the same, verified in previous steps) 
    if (platform === 'web') {
        if (id === 'w1') ComponentToRender = <RadixStyleGuide />;
        else if (id === 'w2') ComponentToRender = <RadixPostCard />;
        else if (id === 'w3') ComponentToRender = <RadixDesktopLanding />;
        else if (id === 'w5') ComponentToRender = <RadixLoginCard />;
        else if (id === 'w6') ComponentToRender = <RadixSignupCard />;
        else if (id === 'w7') ComponentToRender = <RadixShell />;
        else if (id === 'w8') ComponentToRender = <RadixChatScreen />;
    } else if (platform === 'mobile') {
        if (id === 'm1') ComponentToRender = <RadixMobileNav />;
        else if (id === 'm2') ComponentToRender = <RadixMobileLanding />;
        else if (id === 'm3') ComponentToRender = <RadixLoginCard />;
        else if (id === 'm4') ComponentToRender = <RadixSignupCard />;
        else if (id === 'm5') ComponentToRender = <RadixMobileProfile />;
        else if (id === 'm6') ComponentToRender = <RadixChatList />;
    }

    if (!ComponentToRender) {
        return (
            <Box p="6">
                <Heading color="red">Component Not Found</Heading>
                <Text>The component for {platform}/{id} has not been mapped or implemented yet.</Text>
                <Box mt="4">
                    <RadixBackButton href="/radix" label="Back to Showcase" />
                </Box>
            </Box>
        );
    }

    return (
        <Box p="6" style={{ minHeight: '100vh', backgroundColor: 'var(--gray-2)' }}>
            <Box mb="4">
                <RadixBackButton href="/radix" label="Back to Showcase" />
            </Box>

            <Flex justify="center" align="start" style={{ minHeight: '80vh' }}>
                {ComponentToRender}
            </Flex>
        </Box>
    );
}
