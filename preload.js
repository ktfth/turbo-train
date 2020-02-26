// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const network = require('network');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['public', 'private', 'gateway']) {
    network['get_' + type + '_ip']((err, ip) => {
      replaceText(`${type}-ip`, (err || ip))
    });
  }
})
