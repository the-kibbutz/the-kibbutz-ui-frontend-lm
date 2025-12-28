'use client';

import { Box, Flex, Text, Button, TextField, Separator, Heading, Link as RadixLink } from '@radix-ui/themes';
import { EnvelopeClosedIcon, LockClosedIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { paletteColors } from '@/theme/theme';

export default function RadixMobileLogin() {
    return (
        <Box style={{
            height: '100%',
            minHeight: 600,
            width: '100%',
            maxWidth: 450,
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box mb="8">
                <Heading size="8" mb="2" style={{ color: paletteColors.darkSlateGray }}>Login</Heading>
                <Text size="3" color="gray">Welcome back to The Kibbutz</Text>
            </Box>

            <Flex direction="column" gap="3" mb="6">
                <Button size="3" variant="outline" color="gray">
                    <GitHubLogoIcon /> Login with Google
                </Button>
                <Button size="3" variant="outline" color="blue">
                    Login with Microsoft
                </Button>
            </Flex>

            <Flex align="center" gap="3" mb="6">
                <Separator style={{ flex: 1 }} />
                <Text size="2" color="gray">OR</Text>
                <Separator style={{ flex: 1 }} />
            </Flex>

            <Flex direction="column" gap="4" style={{ flex: 1 }}>
                <Box>
                    <Text size="2" weight="bold" mb="1" as="div">Email</Text>
                    <TextField.Root placeholder="Enter your email" size="3">
                        <TextField.Slot>
                            <EnvelopeClosedIcon />
                        </TextField.Slot>
                    </TextField.Root>
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="1" as="div">Password</Text>
                    <TextField.Root placeholder="Enter your password" type="password" size="3">
                        <TextField.Slot>
                            <LockClosedIcon />
                        </TextField.Slot>
                    </TextField.Root>
                    <Flex justify="end" mt="1">
                        <RadixLink size="2" color="blue">Forgot Password?</RadixLink>
                    </Flex>
                </Box>

                <Button size="3" style={{ backgroundColor: paletteColors.steelBlue, marginTop: '12px' }}>
                    Login
                </Button>
            </Flex>

            <Flex justify="center" mt="auto">
                <Text size="2">Don't have an account? <RadixLink weight="bold">Sign up</RadixLink></Text>
            </Flex>
        </Box>
    );
}
