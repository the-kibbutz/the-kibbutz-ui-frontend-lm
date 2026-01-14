import { Box, Flex, Button, Heading, Text } from '@radix-ui/themes';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import RadixBackButton from '@/components/radix/RadixBackButton';
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

import { getScreens } from '@/lib/data';
import RadixPostFeed from '@/components/radix/RadixPostFeed';
import RadixMobileLogin from '@/components/radix/RadixMobileLogin';
import RadixMobileSignup from '@/components/radix/RadixMobileSignup';
import RadixMobileChat from '@/components/radix/RadixMobileChat';
import RadixMobileShell from '@/components/radix/RadixMobileShell';

export async function generateStaticParams() {
    const webScreens = await getScreens('web');
    const mobileScreens = await getScreens('mobile');

    const webParams = webScreens.map(s => ({ platform: 'web', id: s.id }));
    const mobileParams = mobileScreens.map(s => ({ platform: 'mobile', id: s.id }));

    return [...webParams, ...mobileParams];
}

export default async function RadixComponentPage({ params }: { params: Promise<{ platform: string; id: string }> }) {
    const { platform, id } = await params;

    let ComponentToRender = null;

    if (platform === 'web') {
        if (id === 'w1') ComponentToRender = <RadixStyleGuide />;
        else if (id === 'w2') ComponentToRender = <RadixPostFeed />; // Fixed
        else if (id === 'w3') ComponentToRender = <RadixDesktopLanding />;
        else if (id === 'w5') ComponentToRender = <RadixLoginCard />;
        else if (id === 'w6') ComponentToRender = <RadixSignupCard />;
        else if (id === 'w7') ComponentToRender = <RadixShell />;
        else if (id === 'w8') ComponentToRender = <RadixChatScreen />;
    } else if (platform === 'mobile') {
        if (id === 'm1') ComponentToRender = <RadixMobileShell />; // Fixed
        else if (id === 'm2') ComponentToRender = <RadixMobileLanding />;
        else if (id === 'm3') ComponentToRender = <RadixMobileLogin />; // Fixed
        else if (id === 'm4') ComponentToRender = <RadixMobileSignup />; // Fixed
        else if (id === 'm5') ComponentToRender = <RadixMobileProfile />;
        else if (id === 'm6') ComponentToRender = <RadixMobileChat />; // Fixed
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

    const isMobile = platform === 'mobile';

    return (
        <Box
            style={{
                minHeight: '100dvh',
                backgroundColor: 'var(--gray-2)',
                padding: isMobile ? 12 : 24,
                overflowX: 'hidden',
            }}
        >
            <Box mb={isMobile ? "3" : "4"}>
                <RadixBackButton href="/radix" label="Back to Showcase" />
            </Box>

            <Flex
                justify="center"
                align="start"
                style={{
                    minHeight: isMobile ? 'calc(100dvh - 72px)' : '80vh',
                    width: '100%',
                }}
            >
                <Box
                    style={{
                        width: '100%',
                        maxWidth: isMobile ? 420 : 1200,
                    }}
                >
                    {ComponentToRender}
                </Box>
            </Flex>
        </Box>
    );
}
