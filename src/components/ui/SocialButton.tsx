'use client';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Window'; // Using Window icon for Microsoft
import { styled } from '@mui/material/styles';

const StyledSocialButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: 20,
    textTransform: 'none',
    fontSize: '0.95rem',
    padding: '10px 24px',
    borderColor: theme.palette.divider,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        borderColor: theme.palette.text.primary,
    },
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
}));

interface SocialButtonProps extends ButtonProps {
    provider: 'google' | 'microsoft' | 'email';
}

export default function SocialButton({ provider, ...props }: SocialButtonProps) {
    let icon = null;
    let label = '';

    switch (provider) {
        case 'google':
            icon = <GoogleIcon sx={{ color: '#DB4437' }} />;
            label = 'Continue with Google';
            break;
        case 'microsoft':
            icon = <MicrosoftIcon sx={{ color: '#00A4EF' }} />;
            label = 'Continue with Microsoft';
            break;
        case 'email':
            // Email is usually just text or generic icon, handling as fallback or specific if needed
            label = 'Continue with Email';
            break;
    }

    return (
        <StyledSocialButton variant="outlined" fullWidth {...props}>
            {icon && <Box component="span" sx={{ display: 'flex' }}>{icon}</Box>}
            {label}
        </StyledSocialButton>
    );
}
