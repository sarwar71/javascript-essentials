const { readFile } = require('fs/promises');
const fetch = require('node-fetch');

readFile('sites.txt')
  .then(function (content) {
    const uris = content.toString('utf8').trim().split(/\r?\n/);
    console.log(`Number of URIs: ${uris.length}`);

    //return fetch(uris[0]);

    const promises = uris.map(u => fetch(u)); // array of promises
    return Promise.all(promises); // when resolved all promises then return.
  })
  .then(function (responses) {
    const statuses = responses.map(res => res.status);
    const textPromises = responses.map(res => res.text());
    console.log('statuses:', statuses);
    return Promise.all(textPromises);
  })
  .then(function(contents){
    for(content of contents){
      console.log("Content length: ", content.length);
    }
  });

console.log("After call to readFile");

// 1 - text
// 2 - multiple promise resolution