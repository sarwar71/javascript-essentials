const { readFile } = require('fs/promises');
const fetch = require('node-fetch');

// await can be use only in the async function.
// await make sure that when 1st promise resolved then start working on 2nd promise
async function process() {
  const content = await readFile('sites.txt'); 

  const uris = content.toString('utf8').trim().split(/\r?\n/);
  console.log(`Number of URIs: ${uris.length}`);

  try{
    //const promises = uris.map(u => fetch(u));
    const results = await Promise.all(uris.map(u => fetch(u)));
    const statuses = results.map(res => res.status);
    console.log('Statuses:', statuses);
  } catch (e){
    console.log("Error in fetch: ", e);
  }
}

process();

console.log("After call to process");

