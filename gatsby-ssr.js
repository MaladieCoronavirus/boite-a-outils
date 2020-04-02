import 'typeface-inter';
import React from "react";

// please do not change the way this export is done, otherwise Gatsby won't execute this snippet.
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {

    // setup the doNotTrack signal before simple-analytics tag injection
    let headComponents = getHeadComponents();

    const component =
        React.createElement('script', {
            key: 'do-not-track-setup',
            type: 'text/javascript',
            dangerouslySetInnerHTML: {
                __html: 'document.cookie.indexOf("doNotTrack=yes") !== -1 && (window.doNotTrack = "1")'
            }
        });

    headComponents.splice(headComponents.findIndex(i => i.key === 'plugin-simpleanalytics'), 0, component);

    replaceHeadComponents(headComponents)
};
