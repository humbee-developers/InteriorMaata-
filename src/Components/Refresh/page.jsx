import React, { useEffect } from 'react';

const ScrollToTopOnRefresh = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to only run the effect once after initial render

  return null; // Since this is a utility component, it doesn't render anything
};

export default ScrollToTopOnRefresh;
