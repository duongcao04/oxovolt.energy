import React from 'react'

// Extend standard paragraph attributes to allow standard <p> props
interface TextGradientProps extends React.HTMLAttributes<HTMLParagraphElement> {
    from?: string
    via?: string // New optional middle color
    to?: string
    direction?: string
}

export const TextGradient: React.FC<TextGradientProps> = ({
    from = '#ec4899', // Default starting color (pink)
    via, // Optional middle color
    to = '#8b5cf6', // Default ending color (purple)
    direction = 'to right', // Default gradient direction
    style,
    children,
    ...rest
}) => {
    // Conditionally build the gradient string based on whether 'via' is provided
    const gradientString = via
        ? `linear-gradient(${direction}, ${from}, ${via}, ${to})`
        : `linear-gradient(${direction}, ${from}, ${to})`

    const gradientStyle: React.CSSProperties = {
        backgroundImage: gradientString,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
        ...style,
    }

    return (
        <p style={gradientStyle} {...rest}>
            {children}
        </p>
    )
}
