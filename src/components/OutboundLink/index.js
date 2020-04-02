const OutboundLink = ({href, ...rest}) => {
  const url = new URL(href);

  return (
    <a
      {...rest}
      href={url.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
          // log analytics will be done there
          return false;
      }}
    />
  )
};

export default OutboundLink;