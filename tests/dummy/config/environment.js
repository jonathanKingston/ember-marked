/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment:  environment,
    baseURL:      process.env.EMBER_CLI_BASE_URL || '/',
    locationType: process.env.EMBER_CLI_LOCATION_TYPE || 'auto',

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src':  "'self' 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com",
      'font-src':    "'self'",
      'connect-src': "'self' cdnjs.cloudflare.com",
      'img-src':     "'self'",
      'style-src':   "'self' 'unsafe-inline' cdnjs.cloudflare.com",
      'frame-src':   "ghbtns.com platform.twitter.com"
    },

    EmberENV:     {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
