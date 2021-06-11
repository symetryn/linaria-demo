import * as Sentry from '@sentry/node';
import { AppProps } from 'next/app';
import { analytics } from '@project/shared';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../utils/css-imports';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== 'development',
    environment: `owner-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url: string) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view', {
          screen_name: url,
          app_name: 'Skeleton-Owner',
        });
      };

      routers.events.on('routeChangeComplete', (url) => {
        window.scrollTo(0, 0);
        logEvent(url);
      });

      logEvent(window.location.pathname);
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
