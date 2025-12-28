import { Box, Heading, Text, Grid } from '@radix-ui/themes';
import { getScreens } from '@/lib/data';
import RadixColorPaletteTable from '@/components/radix/RadixColorPaletteTable';
import RadixScreenCard from '@/components/radix/RadixScreenCard';
import RadixBackButton from '@/components/radix/RadixBackButton';

// Radix Components
import RadixLoginCard from '@/components/radix/RadixLoginCard';
import RadixSignupCard from '@/components/radix/RadixSignupCard';
import RadixChatList from '@/components/radix/RadixChatList';
import RadixPostCard from '@/components/radix/RadixPostCard';
import RadixMobileNav from '@/components/radix/RadixMobileNav';
import RadixMobileLanding from '@/components/radix/RadixMobileLanding';
import RadixMobileProfile from '@/components/radix/RadixMobileProfile';
import RadixDesktopLanding from '@/components/radix/RadixDesktopLanding';
import RadixShell from '@/components/radix/RadixShell';
import RadixPostFeed from '@/components/radix/RadixPostFeed';
import RadixMobileLogin from '@/components/radix/RadixMobileLogin';
import RadixMobileSignup from '@/components/radix/RadixMobileSignup';
import RadixMobileChat from '@/components/radix/RadixMobileChat';
import RadixStyleGuide from '@/components/radix/RadixStyleGuide';
import RadixChatScreen from '@/components/radix/RadixChatScreen';
import RadixMobileShell from '@/components/radix/RadixMobileShell';

export const dynamic = 'force-dynamic';

export default async function RadixPage() {
  const webScreens = await getScreens('web');
  const mobileScreens = await getScreens('mobile');

  return (
    <Box style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
      <Box mb="6">
        <RadixBackButton />
        <Heading size="8" mb="2" style={{ color: 'var(--accent-10)' }}>Radix UI Design Showcase</Heading>
        <Text size="3" color="gray">
          A complete mirror of the application screens implemented using Radix UI Themes.
        </Text>
      </Box>

      <RadixColorPaletteTable />

      <Heading size="6" mb="4" style={{ borderBottom: '1px solid var(--gray-4)', paddingBottom: 8 }}>Web Interface</Heading>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="5" mb="8">
        {webScreens.map((screen) => {
          let PreviewComponent = null;
          if (screen.id === 'w1') PreviewComponent = <RadixStyleGuide />;
          if (screen.id === 'w2') PreviewComponent = <RadixPostFeed />; // Updated
          if (screen.id === 'w3') PreviewComponent = <RadixDesktopLanding />;
          if (screen.id === 'w5') PreviewComponent = <RadixLoginCard />;
          if (screen.id === 'w6') PreviewComponent = <RadixSignupCard />;
          if (screen.id === 'w7') PreviewComponent = <RadixShell />;
          if (screen.id === 'w8') PreviewComponent = <RadixChatScreen />;

          return (
            <Box key={screen.id} style={{ height: 400 }}>
              <RadixScreenCard screen={screen} platform="web" componentPreview={PreviewComponent} />
            </Box>
          );
        })}
      </Grid>

      <Heading size="6" mb="4" style={{ borderBottom: '1px solid var(--gray-4)', paddingBottom: 8 }}>Mobile Interface</Heading>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="5" mb="8">
        {mobileScreens.map((screen) => {
          let PreviewComponent = null;
          if (screen.id === 'm1') PreviewComponent = <RadixMobileShell />;
          if (screen.id === 'm2') PreviewComponent = <RadixMobileLanding />;
          if (screen.id === 'm3') PreviewComponent = <RadixMobileLogin />;
          if (screen.id === 'm4') PreviewComponent = <RadixMobileSignup />;
          if (screen.id === 'm5') PreviewComponent = <RadixMobileProfile />;
          if (screen.id === 'm6') PreviewComponent = <RadixMobileChat />;

          return (
            <Box key={screen.id} style={{ height: 500 }}>
              <RadixScreenCard screen={screen} platform="mobile" imageHeight={500} componentPreview={PreviewComponent} />
            </Box>
          );
        })}
      </Grid>
    </Box >
  );
}
