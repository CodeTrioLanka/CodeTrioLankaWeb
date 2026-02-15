import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
}

export const NavigationLink = ({ href, children, className, onClick, target, rel }: NavigationLinkProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) onClick();

        if (href.startsWith('#')) {
            e.preventDefault();
            if (location.pathname === '/') {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Update URL hash without reload
                    window.history.pushState(null, '', href);
                }
            } else {
                navigate('/' + href);
            }
        }
    };

    // Build the props for the anchor tag
    const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
        href,
        className,
        target,
        rel
    };

    // Only attach specialized click handler for internal hash links
    if (href.startsWith('#')) {
        return (
            <a {...anchorProps} onClick={handleClick}>
                {children}
            </a>
        );
    }

    // Pass through other props for external links, but still allow onClick for menu closing etc.
    return (
        <a {...anchorProps} onClick={onClick}>
            {children}
        </a>
    );
};
