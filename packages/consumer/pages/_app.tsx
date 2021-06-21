import * as Sentry from "@sentry/node";
import { AppProps } from "next/app";
import { analytics } from "@project/shared";
import React, { useEffect } from "react";
import "../utils/css-imports";
import "antd/dist/antd.css";

import { useRouter } from "next/router";
import { Layout } from "antd";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `consumer-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logEvent = (url: string) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent("screen_view", {
          screen_name: url,
          app_name: "Skeleton-Consumer",
        });
      };

      routers.events.on("routeChangeComplete", (url) => {
        window.scrollTo(0, 0);
        logEvent(url);
      });

      logEvent(window.location.pathname);
      return () => {
        routers.events.off("routeChangeComplete", logEvent);
      };
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
