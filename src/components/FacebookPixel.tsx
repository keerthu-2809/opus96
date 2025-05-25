import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }

  type FbqArgs = [event: string, ...params: unknown[]];

  interface Fbq {
    (...args: FbqArgs): void;
    callMethod?: (...args: FbqArgs) => void;
    queue?: FbqArgs[];
    loaded?: boolean;
    version?: string;
    push?: (...args: FbqArgs) => void;
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.fbq) return;

    const fbq: Fbq = function (...args: [string, ...unknown[]]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else if (fbq.queue) {
        fbq.queue.push(args);
      }
    };

    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.push = (...args: [string, ...unknown[]]) => {
      fbq.queue?.push(args);
    };

    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq('init', '1314369903316026');
    window.fbq('track', 'PageView');
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1314369903316026&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
}
