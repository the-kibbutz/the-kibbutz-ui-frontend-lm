'use client';

import { Button } from '@radix-ui/themes';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface RadixBackButtonProps {
    href?: string;
    label?: string;
}

export default function RadixBackButton({ href = "/", label = "Back to Home" }: RadixBackButtonProps) {
    return (
        <Button variant="ghost" color="gray" asChild style={{ cursor: 'pointer', marginBottom: 16 }}>
            <Link href={href}>
                <ArrowLeftIcon /> {label}
            </Link>
        </Button>
    );
}
