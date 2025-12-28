import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface LogoProps {
    width?: number;
    height?: number;
    variant?: 'full' | 'icon'; // Future proofing if we have an icon-only version
}

export default function Logo({ width = 150, height = 50, variant = 'full' }: LogoProps) {
    return (
        <Box sx={{ position: 'relative', width, height, display: 'flex', alignItems: 'center' }}>
            <Image
                src="/assets/logo/logo1.jpg"
                alt="The Kibbutz Logo"
                fill
                sizes={`${width}px`}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                priority
            />
        </Box>
    );
}
