const withTM = require('next-transpile-modules')(['@project/shared']);
const withImages = require('next-images');
const nextSourceMaps = require('@zeit/next-source-maps');

module.exports = withImages(
  nextSourceMaps(
    withTM({
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.alias['@sentry/node'] = '@sentry/browser';
        }
        return config;
      },
    })
  )
);
