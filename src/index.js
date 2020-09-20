const SCRIPT_URL = 'https://www.purpledotprice.com/api/v1/purpledot.js';

const findScript = () => document.querySelector(`script[src^="${SCRIPT_URL}"]`);

const injectScript = () => {
  const script = document.createElement('script');
  script.src = `${SCRIPT_URL}`;

  const headOrBody = document.head || document.body;
  headOrBody.appendChild(script);

  return script;
};

let purpleDotPromise = null;

const loadScript = () => {
  // Only ever load once
  if (purpleDotPromise !== null) {
    return purpleDotPromise;
  }

  purpleDotPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side
      resolve(null);
      return;
    }

    if (window.PurpleDot) {
      resolve(window.PurpleDot);
      return;
    }

    try {
      let script = findScript();

      if (!script) {
        script = injectScript();
      }

      script.addEventListener('load', () => {
        if (window.PurpleDot) {
          resolve(window.PurpleDot);
        } else {
          reject(new Error('PurpleDot not available'));
        }
      });

      script.addEventListener('error', () => {
        reject(new Error('Failed to load PurpleDot'));
      });
    } catch (error) {
      reject(error);
    }
  });

  return purpleDotPromise;
};

const loadPurpleDot = () => Promise
  .resolve()
  .then(() => loadScript())
  .catch((err) => console.warn(err));

export default loadPurpleDot;
