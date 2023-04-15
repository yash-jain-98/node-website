const url = require('node:url');

const myURL = new URL('https://futurevision.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

//new code
myURL.hash='test';
console.log(myURL);

//new code
myURL.hostname='yash';
console.log(myURL);

//new code
console.log(myURL.href);