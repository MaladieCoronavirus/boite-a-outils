import React from 'react';

const OutboundLink = ({children, href, ...rest}) =>

    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
          // log analytics will be done there
          return false;
      }}
    >
      {children}
    </a>
;

export default OutboundLink;