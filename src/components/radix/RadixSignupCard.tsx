'use client';

import { Card, Box, Flex, Text, Button, TextField, Select, Checkbox, Heading } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';

export default function RadixSignupCard() {
    return (
        <Card size="3" style={{ maxWidth: 500, width: '100%', margin: '0 auto', backgroundColor: paletteColors.lavenderBlush }}>
            <Box style={{ backgroundColor: paletteColors.moccasin, padding: '24px', borderRadius: 'var(--radius-3)', marginTop: '-12px', marginLeft: '-12px', marginRight: '-12px', textAlign: 'center' }}>
                <Heading size="6" style={{ color: paletteColors.darkSlateGray }}>Join The Kibbutz</Heading>
                <Text size="2" style={{ color: paletteColors.darkSlateGray }}>Start your journey today</Text>
            </Box>

            <Flex direction="column" gap="4" mt="4">
                <Flex gap="3">
                    <Box flexGrow="1">
                        <Text as="label" size="2" weight="bold">First Name</Text>
                        <TextField.Root placeholder="First Name" size="3" />
                    </Box>
                    <Box flexGrow="1">
                        <Text as="label" size="2" weight="bold">Last Name</Text>
                        <TextField.Root placeholder="Last Name" size="3" />
                    </Box>
                </Flex>

                <Box>
                    <Text as="label" size="2" weight="bold" mb="1" style={{ display: 'block' }}>Date of Birth</Text>
                    <Flex gap="2">
                        <Select.Root defaultValue="1">
                            <Select.Trigger placeholder="Day" />
                            <Select.Content>
                                <Select.Item value="1">1</Select.Item>
                                <Select.Item value="2">2</Select.Item>
                            </Select.Content>
                        </Select.Root>
                        <Select.Root defaultValue="jan">
                            <Select.Trigger placeholder="Month" />
                            <Select.Content>
                                <Select.Item value="jan">January</Select.Item>
                                <Select.Item value="feb">February</Select.Item>
                            </Select.Content>
                        </Select.Root>
                        <Select.Root defaultValue="2000">
                            <Select.Trigger placeholder="Year" />
                            <Select.Content>
                                <Select.Item value="2000">2000</Select.Item>
                                <Select.Item value="1999">1999</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Flex>
                </Box>

                <Box>
                    <Text as="label" size="2" weight="bold">Email</Text>
                    <TextField.Root placeholder="example@email.com" size="3" />
                </Box>

                <Box>
                    <Text as="label" size="2" weight="bold">Password</Text>
                    <TextField.Root placeholder="New Password" type="password" size="3" />
                </Box>

                <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="2">I agree to the Terms and Conditions</Text>
                </Flex>

                <Button size="3" variant="solid" style={{ backgroundColor: paletteColors.darkSlateGray, cursor: 'pointer' }}>
                    Sign Up
                </Button>
            </Flex>
        </Card>
    );
}
