'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BackButtonProps {
    href?: string;
    label?: string;
}

export default function BackButton({ href = "/", label = "Back to Home" }: BackButtonProps) {
    return (
        <Button component={Link} href={href} startIcon={<ArrowBackIcon />}>
            {label}
        </Button>
    );
}
