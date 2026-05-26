import { Link } from '@tanstack/react-router';
import DarkLogoImage from '/dark-logo.png';
import { useTheme } from 'next-themes';
import { cn } from '@heroui/styles';
import LogoImage from '/logo.png';

export const Logo = ({
    classNames,
}: {
    classNames?: { wrapper?: string; img?: string };
}) => {
    const { theme } = useTheme();
    return (
        <Link to="/" className={cn('block', classNames?.wrapper)}>
            <img
                src={theme === 'dark' ? DarkLogoImage : LogoImage}
                alt="Logo"
                className={cn('h-10.5 w-55 object-contain', classNames?.img)}
            />
        </Link>
    );
};
