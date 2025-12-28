'use client';

import { Box, Flex, Text, Button, Heading, Separator } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';

export default function RadixMobileLanding() {
    return (
        <Box style={{ height: '100%', minHeight: 500, backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-3)', overflow: 'hidden', border: '1px solid var(--gray-4)', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Box style={{ backgroundColor: paletteColors.moccasin, padding: '32px 16px', borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px', textAlign: 'center' }}>
                <Heading size="8" mb="2" style={{ color: paletteColors.darkSlateGray }}>Logo</Heading>
                <Heading size="6" style={{ color: paletteColors.darkSlateGray }}>Welcome</Heading>
            </Box>

            <Flex direction="column" gap="3" p="4" flexGrow="1">
                <Button size="3" variant="outline" color="red" style={{ justifyContent: 'center' }}>
                    Continue with Google
                </Button>
                <Button size="3" variant="outline" color="gray" style={{ justifyContent: 'center' }}>
                    Login with Microsoft
                </Button>

                <Separator size="4" my="2" />

                <Button size="3" variant="solid" style={{ backgroundColor: paletteColors.darkSlateGray, justifyContent: 'center' }}>
                    Login with Email
                </Button>

                <Box mt="auto" style={{ textAlign: 'center' }}>
                    <Text size="2">Don't have an account?</Text>
                    <Text size="2" weight="bold" color="indigo" style={{ display: 'block', marginTop: 4 }}>JOIN NOW</Text>
                </Box>
            </Flex>
        </Box>
    );
}
