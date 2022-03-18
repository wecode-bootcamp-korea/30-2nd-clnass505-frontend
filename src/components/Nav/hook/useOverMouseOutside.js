import { useEffect } from 'react';

function useOverMouseOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mouseover', listener);
    return () => {
      document.addEventListener('mouseover', listener);
    };
  }, [ref, handler]);
}

export default useOverMouseOutside;
