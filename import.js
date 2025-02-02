const importScript = 'https://raw.githubusercontent.com/Crazybloy2/GetWikidotUsername/refs/heads/main/test2.js';
const el = document.createElement('script');
el.setAttribute('type', 'text/javascript');
el.setAttribute('src', importScript);
document.getElementById('importJS').append(el);
console.log('test');
