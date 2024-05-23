import React from 'react';
import { useEffectOnce } from 'react-use';

const page = () => {
    useEffectOnce(() => {
        const preventDefault = (e) => {
          if (e.ctrlKey && (e.deltaY || e.deltaX)) {
            e.preventDefault();
          }
        };
    
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('keydown', preventDefault, { passive: false });
    
        return () => {
          window.removeEventListener('wheel', preventDefault);
          window.removeEventListener('keydown', preventDefault);
        };
      });
    
  return (
    <div>
      
    </div>
  )
}

export default page
