
# ipm package: PunycodeNodeJs

## Overview

Partial Implementation of NodeJs&#39; Punycode Library

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup
Import Just the Code Library, Code Service just gives an exmaple of how to use it.

Example Checkout the Code Service, once system is imported.

```javascript
function TestPunycodeNodeJs(req, resp) {
  const punycode  = PunycodeNodeJs();
  const example1 = punycode.encode('mañana'); // 'maana-pta'
  const example2 = punycode.encode('☃-⌘'); // '--dqo34k'
  const decodeExample1 = punycode.decode('maana-pta'); // 'mañana'
  const decodeExample2 = punycode.decode('--dqo34k'); // '☃-⌘'
  log("Encoding Examples:");
  log(example1);
  log(example2);
  log("Decoding Examples");
  log(decodeExample1);
  log(decodeExample2);
  resp.success('Success');
}

```
## API
The goal is to provide an API that is identical to [node's Punycode API](https://nodejs.org/api/punycode.html) ,which is deprecated now. This project was bundled with Node.js from v0.6.2+ until v7 (soft-deprecated). The current version supports recent versions of Node.js only. It is created by performing minor modifications to the [punycode.js](https://github.com/bestiejs/punycode.js) library.

## Contributing
PRs are very welcome! The main way to contribute to `PunycodeNodeJs` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5 (followed by some modifications), rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js. This module intends to provide exactly the same API as Node.js, so features that are not available in the core `Punycode` module will not be accepted. 

If there is a difference in behaviour between Node.js's `Punycode` module and this module, please open an issue!
