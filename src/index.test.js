/* eslint-disable global-require */

describe('loadPurpleDot()', () => {
  afterEach(() => {
    delete window.PurpleDot;
    document.head.innerHTML = '';
    document.body.innerHTML = '';
    jest.resetModules();
  });

  it('injects the script', async () => {
    const loadPurpleDot = require('./index').default;
    loadPurpleDot();

    await Promise.resolve(); // Wait a tick

    expect(
      document.querySelector('script[src="https://www.purpledotprice.com/api/v1/purpledot.js"]'),
    ).not.toBe(null);
  });

  it('does not inject the script if PurpleDot is already loaded', async () => {
    window.PurpleDot = {};

    const loadPurpleDot = require('./index').default;
    loadPurpleDot();

    await Promise.resolve(); // Wait a tick

    expect(
      document.querySelector('script[src="https://www.purpledotprice.com/api/v1/purpledot.js"]'),
    ).toBe(null);
  });

  it('does not inject the script twice', async () => {
    const loadPurpleDot = require('./index').default;
    loadPurpleDot();
    loadPurpleDot();

    await Promise.resolve(); // Wait a tick

    expect(
      document.querySelectorAll('script[src="https://www.purpledotprice.com/api/v1/purpledot.js"]').length,
    ).toBe(1);
  });
});
