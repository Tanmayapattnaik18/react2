import React, { useEffect } from 'react';

const ScrollComponent = () => {
    
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolled to', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '150vh' }}>
      <h1>Scroll down to see the effect</h1>
    </div>
  );
};

export default ScrollComponent;
