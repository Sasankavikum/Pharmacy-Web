import React, { useState, useEffect } from 'react';
import back from './images/vitharana.jpg';

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Change this to the desired duration of your splash screen

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <div className="splash">
      <img src={back} alt="Splash screen" className='splash-img' />
    </div>
  ) : null;
};

export default Splash;