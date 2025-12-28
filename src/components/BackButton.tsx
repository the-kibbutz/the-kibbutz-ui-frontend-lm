'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton() {
    return (
        <Button component={Link} href="/" startIcon={<ArrowBackIcon />}>
            Back to Home
        </Button>
    );
}
