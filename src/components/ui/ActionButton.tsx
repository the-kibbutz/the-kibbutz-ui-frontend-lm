'use client';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: 20, // Rounded pill shape often seen in the designs
    textTransform: 'none',
    fontSize: '1rem',
    padding: '10px 24px',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none',
    },
}));

interface ActionButtonProps extends ButtonProps {
    label: string;
}

export default function ActionButton({ label, ...props }: ActionButtonProps) {
    return (
        <StyledButton variant="contained" color="primary" fullWidth {...props}>
            {label}
        </StyledButton>
    );
}
