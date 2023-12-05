import { useEffect } from 'react';
import Config from "./Config"

function RedireccionHTTPS() {
  useEffect(() => {
    if (window.location.protocol === 'http:') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, [Config]);

  return null;
}

export default RedireccionHTTPS;
