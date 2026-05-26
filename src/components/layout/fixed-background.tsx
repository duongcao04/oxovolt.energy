import { useTheme } from 'next-themes';

export const FixedBackground = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { theme } = useTheme();

    const backgroundUrl =
        theme === 'dark'
            ? "url('dark-global-background.png')"
            : "url('global-background.png')";

    return (
        <div className="flex min-h-screen flex-col">
            {/* 1. The Fixed Background (Stays in place) */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: backgroundUrl }}
            />

            {/* 2. The Scrollable Content Wrapper (Scrolls over the background) */}
            {/* Added `relative z-10` to sit above the background and `flex-1` to expand */}
            <div className="z-10 flex w-full flex-1 flex-col">{children}</div>
        </div>
    );
};
