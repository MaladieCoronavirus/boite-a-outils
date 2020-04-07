const trackEvent = (label, context) => {
    window.sa_event && window.sa_event((label+'__'+context).substring(0, 100));
};

export default trackEvent;
