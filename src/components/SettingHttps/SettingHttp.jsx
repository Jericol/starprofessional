import { useEffect } from 'react';

function RedireccionHTTPS() {
  useEffect(() => {
    if (window.location.protocol === 'http:') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, []);

  return null;
}

export default RedireccionHTTPS;
