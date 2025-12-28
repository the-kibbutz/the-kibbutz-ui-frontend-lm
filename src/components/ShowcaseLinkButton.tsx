'use client';
import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

export default function ShowcaseLinkButton(props: ButtonProps) {
    return (
        <Button
            component={Link}
            href="/showcase"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ mt: 2, borderRadius: 20, px: 4 }}
            {...props}
        >
            View Live Component Library
        </Button>
    );
}
