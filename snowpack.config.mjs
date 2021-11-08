/** @type {import("snowpack").SnowpackUserConfig } */

// This is implicit if you have snowpack.key/crt files in
// the root of your project.
//
//
// const fs = require("fs");
// const cert = readFileSync("snowpack.crt");
// const key = readFileSync("snowpack.key");

export default {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
    secure: true,
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
