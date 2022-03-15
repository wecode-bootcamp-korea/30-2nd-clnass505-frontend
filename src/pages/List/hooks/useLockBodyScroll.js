import { useLayoutEffect } from 'react';

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
};

export default useLockBodyScroll;
