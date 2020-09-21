import { loadPurpleDot } from '@purple-dot/purple-dot-js';

loadPurpleDot().then(() => console.log('yay')).catch(err => console.error(err));
