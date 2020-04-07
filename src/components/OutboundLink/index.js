import React from 'react';
import {trackEvent} from "Components/Tracking";

const OutboundLink = ({children, href, ...rest}) => {
    const url = new URL(href);

    return (
        <a
            {...rest}
            href={url.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                trackEvent('outbound_link', url.hostname + url.pathname);
                return false;
            }}
        >
            {children}
        </a>
    )
};

export default OutboundLink;
