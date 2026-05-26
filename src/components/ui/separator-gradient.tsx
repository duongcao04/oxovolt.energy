import React from 'react'

// Extend standard div attributes to allow props like className, id, style, etc.
interface SeparatorGradientProps extends React.HTMLAttributes<HTMLDivElement> {
    from?: string
    via?: string
    to?: string
    orientation?: 'horizontal' | 'vertical'
    thickness?: number | string // Allows setting the line thickness (e.g., '2px')
}

export const SeparatorGradient: React.FC<SeparatorGradientProps> = ({
    from = 'var(--color-primary-100)', // Default starting color
    via = 'var(--color-primary-500)', // Optional middle color
    to = 'var(--color-primary-100)', // Default ending color
    orientation = 'horizontal', // Default orientation
    thickness = '2px', // Default thickness
    style,
    ...rest
}) => {
    // 1. Determine the direction of the gradient based on orientation
    const direction = orientation === 'horizontal' ? 'to right' : 'to bottom'

    // 2. Build the gradient string, conditionally including 'via'
    const gradientString = via
        ? `linear-gradient(${direction}, ${from}, ${via}, ${to})`
        : `linear-gradient(${direction}, ${from}, ${to})`

    // 3. Set the dimensions based on the orientation
    const dimensionsStyle: React.CSSProperties =
        orientation === 'horizontal'
            ? { width: '100%', height: thickness }
            : { width: thickness, height: '100%' } // Note: Vertical requires the parent to have a defined height

    // 4. Combine styles
    const mergedStyle: React.CSSProperties = {
        backgroundImage: gradientString,
        flexShrink: 0, // Prevents flexbox from squishing the separator
        ...dimensionsStyle,
        ...style,
    }

    return <div style={mergedStyle} role="separator" {...rest} />
}
