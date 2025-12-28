'use client';

import { Box, Flex, Text, Button, TextField, Select, Heading, Link as RadixLink } from '@radix-ui/themes';
import { paletteColors } from '@/theme/theme';

export default function RadixMobileSignup() {
    return (
        <Box style={{
            height: '100%',
            minHeight: 700, // Taller for more content
            width: '100%',
            maxWidth: 450,
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box mb="6">
                <Heading size="8" mb="2" style={{ color: paletteColors.steelBlue }}>Create Account</Heading>
                <Text size="3" color="gray">Join The Kibbutz today</Text>
            </Box>

            <Flex direction="column" gap="4" style={{ flex: 1 }}>
                <Flex gap="3">
                    <Box style={{ flex: 1 }}>
                        <Text size="2" weight="bold" mb="1" as="div">First Name</Text>
                        <TextField.Root placeholder="John" size="3" />
                    </Box>
                    <Box style={{ flex: 1 }}>
                        <Text size="2" weight="bold" mb="1" as="div">Last Name</Text>
                        <TextField.Root placeholder="Doe" size="3" />
                    </Box>
                </Flex>

                <Box>
                    <Text size="2" weight="bold" mb="1" as="div">Date of Birth</Text>
                    <Flex gap="2">
                        <Select.Root defaultValue="day">
                            <Select.Trigger style={{ flex: 1 }} />
                            <Select.Content>
                                <Select.Item value="day">Day</Select.Item>
                                {[...Array(31)].map((_, i) => <Select.Item key={i} value={String(i + 1)}>{i + 1}</Select.Item>)}
                            </Select.Content>
                        </Select.Root>
                        <Select.Root defaultValue="month">
                            <Select.Trigger style={{ flex: 1 }} />
                            <Select.Content>
                                <Select.Item value="month">Month</Select.Item>
                                <Select.Item value="jan">Jan</Select.Item>
                                <Select.Item value="feb">Feb</Select.Item>
                            </Select.Content>
                        </Select.Root>
                        <Select.Root defaultValue="year">
                            <Select.Trigger style={{ flex: 1 }} />
                            <Select.Content>
                                <Select.Item value="year">Year</Select.Item>
                                <Select.Item value="2000">2000</Select.Item>
                                <Select.Item value="1999">1999</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Flex>
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="1" as="div">Gender</Text>
                    <Select.Root defaultValue="select">
                        <Select.Trigger style={{ width: '100%' }} />
                        <Select.Content>
                            <Select.Item value="select">Select Gender</Select.Item>
                            <Select.Item value="male">Male</Select.Item>
                            <Select.Item value="female">Female</Select.Item>
                            <Select.Item value="other">Other</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="1" as="div">Email</Text>
                    <TextField.Root placeholder="john.doe@example.com" size="3" />
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="1" as="div">Password</Text>
                    <TextField.Root placeholder="Create a password" type="password" size="3" />
                </Box>

                <Button size="3" style={{ backgroundColor: paletteColors.steelBlue, marginTop: '12px' }}>
                    Sign Up
                </Button>
            </Flex>

            <Flex justify="center" mt="4">
                <Text size="2">Already have an account? <RadixLink weight="bold">Login</RadixLink></Text>
            </Flex>
        </Box>
    );
}
