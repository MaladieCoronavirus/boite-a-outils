import 'typeface-inter';

export const shouldUpdateScroll = ({ routerProps }) => {
  let sectionId = routerProps.location.pathname.replace(/\//g, '-').slice(1, -1);
  if (document.getElementById(sectionId)) {
    return sectionId;
  }

  return true;
}
