const { loadPurpleDot } = require('../src/index');

/* These tests run with --env=node rather than jsdom */

describe('loadPurpleDot()', () => {
  it('does not crash and resolves to null when rendered server-side', async () => {
    const purpleDot = await loadPurpleDot();

    expect(purpleDot).toBe(null);
  });
});
