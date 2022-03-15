import { useEffect } from 'react';

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    let refCurrent;
    for (let i = 0; i < ref.current.length; i++) {
      if (ref.current[i]) {
        refCurrent = ref.current[i];
      }
    }

    const listener = event => {
      if (!refCurrent || refCurrent.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
