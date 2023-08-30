import React, { useState, useEffect } from 'react';
import Picture from 'components/Bubble/Rotate';

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    setScrollTop(currentPosition);
  };

  return (
    <div className="container">
      <div style={{ transform: `scale(${1 - scrollTop/1000})`, opacity: `${1 - scrollTop/1000}` }} >
      <div className="relative h-[100px]   w-[187px] md:h-[75.3px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign.png'} text={'Greeting Module'} type={0} />
                </div>
      </div>
      <div  style={{ opacity: `${scrollTop/1000}` }}>
      <div className="relative h-[100px]   w-[187px] md:h-[75.3px] md:w-[139.8px]">
                  <Picture img={'images/img_magicpatterndesign.png'} text={'Greeting Module'} type={0} />
                </div>
      </div>
    </div>
  );
};

export default App;