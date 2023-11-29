import { UAParser } from 'ua-parser-js';
// returns true if current webview is not supported
export const detectBrowserEngine = () => {
  const parser = new UAParser(navigator.userAgent);
  const result = parser.getResult();
  console.log(result);
  const engine = parser.getEngine();
  console.log(engine);
};
