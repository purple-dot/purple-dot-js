import { loadPurpleDot } from '@purple-dot/purple-dot-js';

loadPurpleDot()
  .then((purpleDot) => {
    // Dummy event subscription to check the SDK loaded
    purpleDot.on('PlacementLoaded', () => {});
  })
  .catch(err => console.error(err));
