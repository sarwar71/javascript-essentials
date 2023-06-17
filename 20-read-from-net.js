const fs = require('fs');
const request = require('request'); // It used for http request

/*
For 'readFile' and 'request' function after done the fist argument, that means read the text file or read url, then node automatically call the function and the function 
will return response after works done, it's works asyncronously.
 
Here used the nested callback function it's called callback hell, but it's not better. We will used promise for that.
*/ 
fs.readFile('sites.txt', function (err, content) {
  if (err) {
    console.log(err);
    return;
  }

  const uris = content.toString('utf8').trim().split(/\r?\n/);

  console.log(`Number of URIs: ${uris.length}`);

  for (let i = 0; i < uris.length; i++) {
    const uri = uris[i];

    // jokhon uri er kaj shes hobe then node function ta call korbe, oi somoy function tar kaj shes korar jonno wait korbe na asyncronously for loop ghure function 
    // ta 2nd time abr call hobe, evabe cholte thakbe and j function tar kaj shes hobe se function ta return kore dibe. And it's a callback function.
    request(uri, function (error, response, body) {
      if (error) {
        console.log(`Error in request for URI ${i}`, error);
        return;
      }

      console.log(`Got response for URI ${i}, statusCode: ${response.statusCode}, length: ${body.length}`);
    })
  }

  // do something

});

console.log("After call to fs.readFile");


