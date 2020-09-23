# PurpleDot.js SDK ES Module

An ES module wrapper for the [purpledot.js SDK](https://www.purpledotprice.com/docs/reference/javascript-sdk).

**Note:** This package wraps the PurpleDot object provided by the purpledot.js
library and dynamically loads the underlying script. It does not bundle the full
source code.

## Installation

```
npm install @purple-dot/purple-dot-js
```

## Usage

### `loadPurpleDot`

This function returns a promise that resolves with the `PurpleDot` object
provided by the SDK. If not included already, it will inject the script tag into your
page and load it. When called in a server environment it returns `null`.

```javascript
import { loadPurpleDot } from '@purple-dot/purple-dot-js';

const purpleDot = await loadPurpleDot();

// Use the SDK as usual
purpleDot.init({ apiKey: '5f6b6189-5380-423d-8f59-6c34eb61bbff' });
purpleDot.load({ placementType: 'button' });
```
