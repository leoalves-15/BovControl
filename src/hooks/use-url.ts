import {useEffect, useState} from 'react';

export function useUrl() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  return {
    url
  };
}
