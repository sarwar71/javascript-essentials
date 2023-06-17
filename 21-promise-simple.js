const fetch = require('node-fetch'); // 'node-fetch' is a library

console.log('Fetching data');

/*
fetch method return a promise, then call 'then'/'catch' method. 'then' method call a function with promise and return another promise.
promise-resolve -> then
promise-reject -> catch
*/
fetch('https://edition.cnn.com')
  .then(function (res) {
    console.log('status:', res.status);
    return res.text();
  })
  .then(function(content){
    console.log("Page content page:", content.length)
  })
  .catch(function (error) {
    console.log('Error in fetch', error);
  })

console.log('After call to fetch');
