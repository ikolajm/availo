import React, { ReactNode } from 'react'
import { Link } from 'expo-router';
import LinkStyles from '../styles/components/LinkStyles';

const ThemedLink = ({children, href, incomingStyles, ...props}: ThemedLinkProps) => {
    return (
        <Link
            href={href}
            style={[{color: LinkStyles.colors.default}, incomingStyles]}
            {...props}
        >
            {children}
        </Link>
    )
}

export default ThemedLink;

interface ThemedLinkProps {
    children: ReactNode,
    href: any,
    incomingStyles?: any
}