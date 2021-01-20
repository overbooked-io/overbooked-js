# Overbooked Javascript/Node.js SDK

![Build](https://github.com/overbooked-io/overbooked-js/workflows/Build/badge.svg?branch=master)

The Overbooked Javascript/Node.js SDK provides convenient access to Overbooked API from application written in client-side Javascript and server-side Node.js.

## Documentation

See the [API Reference](https://docs.overbooked.io/)

## Requirements

Node 10 or higher.

## Installation

Install the package with:

```bash
npm install @overbooked/overbooked-js
```
or
```bash
yarn add @overbooked/overbooked-js
```

## Usage

The Client needs to be configured with `publicKey` or `secretKey`, which are available in the [Overbooked Dashboard](https://dashboard.overbooked.io/) in Settings -> Environments section.

Javascript
```javascript
import { Overbooked } from "@overbooked/overbooked-js";

const overbooked = new Overbooked.Client({
  publicKey: 'pk_xxxxxxx'
})

const { data, meta, error, success } = await overbooked.resource.list({
  page: 1,
  limit: 50,
})
```

Node.js
```javascript
const { Overbooked } = require("@overbooked/overbooked-js");

const overbooked = new Overbooked.Client({
  secretKey: 'sk_xxxxxxx'
})

const { data, meta, error, success } = await overbooked.resource.list({
  page: 1,
  limit: 50,
})
```

